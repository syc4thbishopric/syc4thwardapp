import {IAnnouncement} from "../../components/modules/announcements/Announcement";
import moment from "moment";
import {csvJSON} from "../utils/announcement.util";
import { fetchText, fetchWardJson, getWardPath } from "./api-client";

export const getAllAnnouncements = async () => {
  return fetchWardJson<IAnnouncementResponse[]>(getWardPath("announcement"))
}

/**
 * CONVERTER - ANNOUNCEMENTS
 */
export const convertAnnouncement = (announcement: IAnnouncementResponse): IAnnouncement => {
    return {
    title: announcement?.title,
    description: announcement?.description,
    ...(announcement?.dates?.length === 1 && { date: announcement.dates[0].date ? new Date(announcement.dates[0].date) :null }),
    ...(announcement?.dates?.length > 1 && {
      dates: announcement?.dates?.map((subDate) => {
        return { date: new Date(subDate.date), ...(subDate?.subTitle && { subTitle: subDate.subTitle }) }
      }),
    }),
    ...(announcement?.location?.address && { location: announcement.location }),
  }
}
export const convertAnnouncements = (announcements: IAnnouncementResponse[]): IAnnouncement[] => {
  return announcements.filter((announcement) => announcement.active).map((announcement) => convertAnnouncement(announcement))
}

/**
 * RESPONSE TYPE
 */
export type IAnnouncementResponse = {
  id: string
  wardPath: string
  title: string
  description: string
  active: boolean
  dates: [
    {
      subTitle: string
      date: Date
    }
  ]
  location: {
    address: string
    link: string
  }
  type: string
}

export async function getAnnouncements(organization: string): Promise<IAnnouncement[]> {
    try {
      const rawData = await fetchText(organization, {
        headers: { "Content-Type": "text/plain" },
      })
      const jsonData = csvJSON(rawData)

      if (jsonData[0]?.title === "title") {
        return []
      }

      return jsonData
        .map((item) => {
          if (item.title && item.date && item.time && item.description) {
            const newDate = moment(item.date + item.time, "YYYY-MM-DDLT").toDate()
            return {
              date: newDate,
              title: item.title,
              description: item.description,
            }
          }

          return undefined
        })
        .filter((item): item is IAnnouncement => item !== undefined)
    } catch (error) {
      console.log(error)
      return []
    }
} 
