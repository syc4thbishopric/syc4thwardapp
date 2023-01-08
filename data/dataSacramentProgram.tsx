import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, January 8th, 2023",
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
    name: "#52 The Day Dawn is Breaking",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#176 'Tis Sweet to Sing the Matchless Love",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#300 Families Can be Together Forever",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Brother Kyle Cornwall",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Rich Moffat",
    color: "yellow"
  },
  programContents: [
    {
      title: "Bearing of Testmonies",
      name: "Congregation",
      color: "yellow",
      order: 0
    },
    // {
    //   title: "Intermediate Hymn",
    //   name: "#304 Teach Me To Walk in the Light",
    //   color: "green",
    //   order: 1
    // },
    // {
    //   title: "Speaker",
    //   name: "Brother Kerry Bugger",
    //   color: "yellow",
    //   order: 2
    // },
  ]
}