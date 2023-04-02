import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, April 2nd, 2023",
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
    name: "#147 Sweet Is the Work",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#185 Reverently and Meekly Now",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#216 We Are Sowing",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Barb Taylor",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Skip Taylor",
    color: "yellow"
  },
  programContents: [
    {
      title: "Youth Speaker",
      name: "Sister Sadie Stringam",
      color: "yellow",
      order: 0
    },
    {
      title: "Speaker",
      name: "Brother Scott Moore",
      color: "yellow",
      order: 1
    },
    {
      title: "Intermediate Hymn",
      name: "#98 I Need Thee Every Hour",
      color: "green",
      order: 2
    },
    {
      title: "Speaker",
      name: "Brother Kyle Swenson",
      color: "yellow",
      order: 3
    },
  ]
}