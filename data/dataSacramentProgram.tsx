import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, April 9th, 2023",
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
    name: "#200 Christ the Lord Is Risen Today",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#192 He Died! The Great Redeemer Died",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#136 I Know That My Redeemer Lives",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Brother Blake Williams",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Sister Marie Williams",
    color: "yellow"
  },
  programContents: [
    {
      title: "Youth Speaker",
      name: "Sister Adalyn Davis",
      color: "yellow",
      order: 0
    },
    {
      title: "Speaker",
      name: "Sister Ladawn Walker",
      color: "yellow",
      order: 1
    },
    {
      title: "Musical Number - Primary",
      name: "Gethsamane",
      color: "green",
      order: 2
    },
    {
      title: "Speaker",
      name: "Brother Jason Wiersdorf",
      color: "yellow",
      order: 3
    },
  ]
}