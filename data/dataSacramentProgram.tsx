import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, January 1st, 2023",
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
    name: "#277 As I Search The Holy Scriptures",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#190 In Memory of the Crucified",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#85 How Firm a Foundation",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Holly Moore",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Scott Moore",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Sister Julie Bugger",
      color: "yellow",
      order: 0
    },
    {
      title: "Intermediate Hymn",
      name: "#304 Teach Me To Walk in the Light",
      color: "green",
      order: 1
    },
    {
      title: "Speaker",
      name: "Brother Kerry Bugger",
      color: "yellow",
      order: 2
    },
  ]
}