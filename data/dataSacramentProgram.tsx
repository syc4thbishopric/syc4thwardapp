import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, February 5th, 2023",
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
    name: "#134 I Believe in Christ",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#172 In Humility, Our Savior",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#116 Come Follow Me",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Leslie Pearson",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Joe Pearson",
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
    //   name: "Brother Brett Murri",
    //   color: "yellow",
    //   order: 0
    // },
    // {
    //   title: "Intermediate Hymn",
    //   name: "#6 Redeemer of Israel",
    //   color: "green",
    //   order: 1
    // },
    // {
    //   title: "Speaker",
    //   name: "Brother Craig Brown",
    //   color: "yellow",
    //   order: 2
    // },
  ]
}