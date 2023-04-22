import { parseHymnNumber } from "../../../shared/services/hymn.service"
import Hymn from './hymn'

export type IProgramItem = {
  title: string
  name?: string
  color: string
  order?: number
}

const ProgramItem = ({...item}: IProgramItem) => {
  let hymnNumber: number | null
  if (item.title.includes('Hymn')) {
    hymnNumber = parseHymnNumber(item.name)
  }
  return (
    <div className="dots-in-between w-full">
      <span className="font-bold bg-white pr-3">{item.title}</span>
      <span className="text-right bg-white float-right pl-3">{hymnNumber ? <Hymn number={hymnNumber} name={item.name} /> : item.name}</span>
    </div>
  )
}

export default ProgramItem