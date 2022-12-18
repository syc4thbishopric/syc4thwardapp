import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  presiding: {
    title: "Presiding",
    name: "Bishop Brian Shepherd",
    color: "yellow"
  },
  conducting: {
    title: "Conducting",
    name: "Bishop Brian Shepherd",
    color: "yellow"
  },
  openingHymn: {
    title: "Opening Hymn",
    name: "#209 Hark! The Herald Angels Sing",
    color: "purple"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#181 Jesus of Nazareth, Savior and King",
    color: "purple"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#203 Angels We Have Heard on High",
    color: "purple"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Eden Carlson",
    color: "green"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Sister Avery Earl",
    color: "green"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Sister Raina Bassett",
      color: "orange",
      order: 0
    },
    {
      title: "Musical Number",
      name: "Still, Still, Still (Rachelle Brady)",
      color: "purple",
      order: 1
    },
    {
      title: "Speaker",
      name: "President David Bassett",
      color: "orange",
      order: 2
    },
  ]
}