import { IProgram } from '../components/modules/sacrament-program/sacrament-program'

export const dataSacramentProgram: IProgram = {
  date: "Sunday, February 19th, 2023",
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
    name: "#220 Lord, I Would Follow Thee",
    color: "green"
  },
  sacramentHymn: {
    title: "Sacrament Hymn",
    name: "#187 God Loved Us, So He Sent His Son",
    color: "green"
  },
  closingHymn: {
    title: "Closing Hymn",
    name: "#89 The Lord Is My Light",
    color: "green"
  },
  openingPrayer: {
    title: "Opening Prayer",
    name: "Sister Krista Riley",
    color: "yellow"
  },
  closingPrayer:  {
    title: "Closing Prayer",
    name: "Brother Dave Riley",
    color: "yellow"
  },
  programContents: [
    {
      title: "Speaker",
      name: "Brother Richard Brough",
      color: "yellow",
      order: 0
    },
    {
      title: "Intermediate Hymn",
      name: "#308 Love One Another",
      color: "green",
      order: 1
    },
    {
      title: "Speaker",
      name: "Brother Rocky Christensen",
      color: "yellow",
      order: 2
    },
  ]
}