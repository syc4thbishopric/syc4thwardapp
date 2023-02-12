import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, February 12th, 2023",
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
    name: "#302 I Know My Father Lives",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#183 In Rememberance of Thy Suffering",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#219 Because I Have Been Given Much",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Deneece Park",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Dennis Park",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Sister Hallie Oakeson",
      color: "yellow",
      order: 0
    },
    {
      title: "Speaker",
      name: "Sister Earnest",
      color: "yellow",
      order: 0
    },
    // {
    //   title: "Intermediate Hymn",
    //   name: "#6 Redeemer of Israel",
    //   color: "green",
    //   order: 1
    // },
    {
      title: "Speaker",
      name: "Sister Holman",
      color: "yellow",
      order: 2
    },
  ]
}