import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, February 26th, 2023",
  presiding: {
    title: "Presiding",
    name: "Bishop Brian Shepherd",
    color: "red"
  },
  conducting: {
    title: "Conducting",
    name: "Brother Jim Crawford",
    color: "red"
  },
  openingHymn: {
    title: "Opening Hymn",
    name: "#239 Choose The Right",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#193 I Stand All Amazed",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#223 Have I Done Any Good?",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Brother Mike Shipley",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Sister Tiana Shepherd",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Sister Eden Carlson",
      color: "yellow",
      order: 0
    },
    {
      title: "Speaker",
      name: "Brother Mike Burr",
      color: "yellow",
      order: 1
    },
    {
      title: "Musical Number",
      name: "Jodi Cornwall Acc Leslie Pearson, \"Where Can I Turn for Peace?\"",
      color: "green",
      order: 2
    },
    {
      title: "Speaker",
      name: "Brother Dan Tolbert",
      color: "yellow",
      order: 3
    },
  ]
}