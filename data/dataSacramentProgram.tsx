import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, March 19th, 2023",
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
    name: "#140 Did You Think To Pray",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#194 There Is A Green Hill Far Away",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#125 How Gentle God's Commands",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Brother Kyle Swenson",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Sister Shelina Swenson",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Brother Christian Crook",
      color: "yellow",
      order: 0
    },
    {
      title: "Intermediate Hymn",
      name: "#45 Lead Me Into Live Eternal",
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