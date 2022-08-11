import { IAnnouncement } from "../../components/modules/announcements/Announcement"
import { isBeforeNow } from "./date.util"
import fs from 'fs'
import axios from "axios";
import moment from "moment";

const keepForHoursFromStart = 2

export function filterAndSortAnnouncements(announcements: IAnnouncement[]): IAnnouncement[] {
  const filteredAnnouncements: IAnnouncement[] = []

  for (let i = 0; i < announcements.length; i++) {
    if (announcements[i].dates?.length) {
      for (let j = announcements[i].dates?.length; j >= 0; j--) {
        if (isBeforeNow(announcements[i].dates[j]?.date, keepForHoursFromStart)) announcements[i].dates.splice(j, 1)
      }
      announcements[i].dates.sort((a: any, b: any) => a.date - b.date)
      announcements[i].date = announcements[i].dates[0]?.date
      if (announcements[i].dates.length) filteredAnnouncements.push(announcements[i])
    } else if (announcements[i].date) {
      if (!isBeforeNow(announcements[i].date, keepForHoursFromStart)) {
        filteredAnnouncements.push(announcements[i])
        if (announcements[i].dates) delete announcements[i].dates
      }
    }
  }

  return filteredAnnouncements.sort((a: any, b: any) => a.date - b.date)
}

export function generateAnnouncementKey(announcement: IAnnouncement) {
  if (announcement?.date && !announcement?.dates) {
    return `${announcement.title}-${announcement.date?.toISOString()}`
  } else if (announcement.dates) {
    const subDateKeys: string[] = []
    for (let i = 0; i < announcement.dates.length; i++) {
      subDateKeys.push(`${announcement.dates[i]?.date.toISOString()}-${announcement.dates[i]?.subTitle}`)
    }
    return `${announcement.title}-${subDateKeys.join("-")}`
  }
  return announcement.title
}

export async function getGeneralAnnouncements(): Promise<IAnnouncement[]> {
    let finalAnnouncements = []
    await axios.get('https://docs.google.com/spreadsheets/d/1MO1uUzB1beS1dihX0BZmdspwYnqD7jt-Do87B3-Rbis/gviz/tq?tqx=out:csv&sheet=GeneralAnnouncements&tq=SELECT%20A,B,C,D')
          .then(function (response) {
            const jsonData = csvJSON(response.data)
              if (jsonData[0].title !== 'title') {
                 finalAnnouncements = jsonData.map(item => {
                    if (item.title && item.date && item.time && item.description) {
                        const newDate = moment(item.date + item.time, 'YYYY-MM-DDLT').toDate()
                        return {
                            date: newDate,
                            title: item.title,
                            description: item.description
                        }
                    }
                }).filter(item => {return item !== undefined})
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    return finalAnnouncements;
}

export async function getYoungMensAnnouncements(): Promise<IAnnouncement[]> {
    let finalAnnouncements = [ ]
    await axios.get('https://docs.google.com/spreadsheets/d/1MO1uUzB1beS1dihX0BZmdspwYnqD7jt-Do87B3-Rbis/gviz/tq?tqx=out:csv&sheet=YoungMen&tq=SELECT%20A,B,C,D')
          .then(function (response) {
            const jsonData = csvJSON(response.data)
              if (jsonData[0].title !== 'title') {
                finalAnnouncements = jsonData.map(item => {
                    if (item.title && item.date && item.time && item.description) {
                        const newDate = moment(item.date + item.time, 'YYYY-MM-DDLT').toDate()
                        return {
                            date: newDate,
                            title: item.title,
                            description: item.description
                        }
                    }
                }).filter(item => {return item !== undefined})
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    return finalAnnouncements;
}

export function csvJSON(rawData, delimiter = ',') {
  let data = rawData.replace(/['"]+/g, '');
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
}
