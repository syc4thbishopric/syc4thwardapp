import { Link } from "@mui/material"
import { useEffect, useState } from "react"

import { getHymnByNumber, getChildHymnByNumber } from "../../../shared/services/hymn.service"

type Props = {
  type: string
  number: number
  name: string
}

const Hymn: React.FC<Props> = ({ type, number, name }) => {
  const [href, setHref] = useState<string | null>(null)

  useEffect(() => {
    async function loadHymn() {
      let hymnHref = ""
      if (type == "children") {
        hymnHref = await getChildHymnByNumber(number)
        setHref(hymnHref)
      } else if (type == "regular") {
        hymnHref = await getHymnByNumber(number)
        setHref(hymnHref)
      }
    }
    loadHymn()
  }, [number, type])

  return (
    <Link href={href || undefined} target="_blank" rel="noopener noreferrer" underline="hover" color="info.main">
      {name}
    </Link>
  )
}

export default Hymn
