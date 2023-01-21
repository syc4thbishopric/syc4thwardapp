import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, January 22nd, 2023",
  presiding: {
    title: "Presiding",
    name: "Bishop Brian Shepherd",
    color: "red"
  },
  conducting: {
    title: "Conducting",
    name: "Brother Corwin Higley",
    color: "red"
  },
  openingHymn: {
    title: "Opening Hymn",
    name: "#305 The Light Divine",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#182 We'll Sing All Hail to Jesus' Name",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#241 Count Your Blessings",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Hallie Oakeson",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Jacob Breck",
    color: "yellow"
  },
  programContents: [
    {
      title: "Youth Speaker",
      name: "Sister Isabel Gilchrist",
      color: "yellow",
      order: 0
    },
    {
      title: "Speaker",
      name: "Brother Brett Murri",
      color: "yellow",
      order: 0
    },
    {
      title: "Intermediate Hymn",
      name: "#6 Redeemer of Israel",
      color: "green",
      order: 1
    },
    {
      title: "Speaker",
      name: "Brother Craig Brown",
      color: "yellow",
      order: 2
    },
  ]
}