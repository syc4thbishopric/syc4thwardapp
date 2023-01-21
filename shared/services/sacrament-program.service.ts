import axios from "axios";
import moment from "moment";
import { csvJSON } from "../utils/announcement.util";

export async function getSacramentMusic(date: Date) {
  await axios.get('https://docs.google.com/spreadsheets/d/1PDGt_-PgTJNdoamU0hnz25ZCUO2a8wd_AK7E4CjPGqI/gviz/tq?tqx=out:csv&tq=SELECT%20A,B,C,D,E')
    .then(function (response) {
      const jsonData = csvJSON(response.data)
      const filterMusic = jsonData.filter(item => moment(new Date(item.Date)).format('YYYY-MM-DD') == moment(date).format('YYYY-MM-DD'))
      const finalMusic = []
      filterMusic.forEach(item => {
        finalMusic.push(
          {
          openingHymn: {
            title: "Opening Hymn",
            name: item.OpeningHymn,
            color: "green"
          },
          sacramentHymn: {
            title: "Sacrament Hymn",
            name: item.SacramentHymn,
            color: "green"
          },
          intermediateHymn: {
            title: "Intermediate Hymn",
            name: item.IntermediateHymnMusicalNumber,
            color: "green",
            order: 1
          },
          closingHymn: {
            title: "Closing Hymn",
            name: item.ClosingHymn,
            color: "green"
          },
        })
      })

      return finalMusic
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

