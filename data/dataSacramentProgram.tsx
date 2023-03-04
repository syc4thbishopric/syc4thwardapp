import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, March 5th, 2023",
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
    name: "#137 Testimony",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#173 While Of These Emblems We Partake",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#105 Master The Tempest Is Raging",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Allison Stringam",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Zac Stringam",
    color: "yellow"
  },
  programContents: [
    {
      title: "Fast Sunday",
      name: "Bearing of Testimonies",
      color: "yellow",
      order: 0
    },
    // {
    //   title: "Speaker",
    //   name: "Brother Mike Burr",
    //   color: "yellow",
    //   order: 1
    // },
    // {
    //   title: "Musical Number",
    //   name: "Jodi Cornwall Acc Leslie Pearson, \"Where Can I Turn for Peace?\"",
    //   color: "green",
    //   order: 2
    // },
    // {
    //   title: "Speaker",
    //   name: "Brother Dan Tolbert",
    //   color: "yellow",
    //   order: 3
    // },
  ]
}