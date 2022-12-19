import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, December 18th, 2022",
  presiding: {
    title: "Presiding",
    name: "Bishop Brian Shepherd",
    color: "red"
  },
  conducting: {
    title: "Conducting",
    name: "Bishop Brian Shepherd",
    color: "red"
  },
  openingHymn: {
    title: "Opening Hymn",
    name: "#209 Hark! The Herald Angels Sing",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#181 Jesus of Nazareth, Savior and King",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#203 Angels We Have Heard on High",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Eden Carlson",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Sister Avery Earl",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Sister Raina Bassett",
      color: "yellow",
      order: 0
    },
    {
      title: "Musical Number",
      name: "Still, Still, Still (Rachelle Brady)",
      color: "green",
      order: 1
    },
    {
      title: "Speaker",
      name: "President David Bassett",
      color: "yellow",
      order: 2
    },
  ]
}