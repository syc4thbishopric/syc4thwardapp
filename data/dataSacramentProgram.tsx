import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, March 12th, 2023",
  presiding: {
    title: "Presiding",
    name: "President David Bassett",
    color: "red"
  },
  conducting: {
    title: "Conducting",
    name: "Bishop Brian Shepherd",
    color: "red"
  },
  openingHymn: {
    title: "Opening Hymn",
    name: "#263 Go Forth With Faith",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#177 Tis Sweet to Sing the Matchless Love",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#124 Be Still My Soul",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Morgan Wiersdorf",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Caden Millett",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Bishop Brian Shepherd",
      color: "yellow",
      order: 0
    },
    {
      title: "Musical Number",
      name: "Rachelle Brady \"My Heavenly Father Loves Me\"",
      color: "green",
      order: 1
    },
    {
      title: "Speaker",
      name: "President David Bassett",
      color: "yellow",
      order: 2
    },
  ]
}