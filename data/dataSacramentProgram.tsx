import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, January 15th, 2023",
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
    name: "#142 Sweet Hour Of Prayer",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#174 While of These Emblems We Partake",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#143 Let the Holy Spirit Guide",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Juli Oakeson",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Josh Oakeson",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Sister Brianne Cole",
      color: "yellow",
      order: 0
    },
    {
      title: "Intermediate Hymn",
      name: "#108 The Lord is My Shepherd",
      color: "green",
      order: 1
    },
    {
      title: "Speaker",
      name: "Sister Julie Reed",
      color: "yellow",
      order: 2
    },
  ]
}