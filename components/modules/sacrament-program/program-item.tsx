import { Box, Typography } from "@mui/material"
import { parseHymnNumber } from "../../../shared/services/hymn.service"
import Hymn from './hymn'

export type IProgramItem = {
  title: string
  name?: string
  color: string
  order?: number
}

const ProgramItem = ({...item}: IProgramItem) => {
  const isHymn = item.title.includes("Hymn") && !!item.name
  const hymnNumber = isHymn ? parseHymnNumber(item.name) : null
  const hymnType = isHymn && item.name?.startsWith("CS") ? "children" : "regular"

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto minmax(1.5rem, 1fr) auto",
        alignItems: "end",
        columnGap: 1.5,
        width: "100%",
      }}
    >
      <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
      <Box
        aria-hidden="true"
        sx={{
          alignSelf: "center",
          height: 1,
          mb: 0.5,
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
          backgroundPosition: "left center",
          backgroundSize: "8px 1px",
          backgroundRepeat: "repeat-x",
          color: "text.disabled",
        }}
      />
      <Typography sx={{ textAlign: "right", color: "text.primary" }}>
        {hymnNumber ? <Hymn type={hymnType} number={hymnNumber} name={item.name!} /> : item.name}
      </Typography>
    </Box>
  )
}

export default ProgramItem
