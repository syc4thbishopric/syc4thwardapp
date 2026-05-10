import { Box, Card, CardContent, Stack } from "@mui/material"
import ProgramItem, { IProgramItem } from "./program-item"
import ProgramDivider from "./program-divider"

export type IProgram = {
  date: string
  presiding: IProgramItem
  conducting: IProgramItem
  chorister: IProgramItem
  organist: IProgramItem
  openingHymn: IProgramItem
  closingHymn: IProgramItem
  sacramentHymn: IProgramItem
  openingPrayer: IProgramItem
  closingPrayer: IProgramItem
  programContents: IProgramItem[]
}

const SacramentProgram = ({...program}: IProgram) => {
  return (
      <Card sx={{ width: "100%", maxWidth: { md: "80%" }, mx: "auto", mt: { xs: 4, md: 6, lg: 7 }, boxShadow: 6 }}>
        <CardContent sx={{ px: { xs: 3, md: 8 }, py: { xs: 4, md: 10 }, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
        <Stack spacing={2}>
          <ProgramItem {...program.presiding} />
          <ProgramItem {...program.conducting} />
          <ProgramItem {...program.chorister} />
          <ProgramItem {...program.organist} />
          <ProgramItem {...program.openingHymn} />
          <ProgramItem {...program.openingPrayer} />
        </Stack>

        <ProgramDivider text="Ward Business" sx={{ pt: 5, pb: 1 }} />

        <Stack spacing={2} sx={{ pt: 4 }}>
          <ProgramItem {...program.sacramentHymn} />
        </Stack>

        <ProgramDivider text="Administration of the Sacrament" sx={{ pt: 4, pb: 1 }} />

        {program.programContents
          .sort((a, b) => a.order - b.order)
          .map((item) => (
            <Box key={item.order} sx={{ pt: 2 }}>
              <ProgramItem key={item.title.concat(item.name || "")} {...item}/>
            </Box>
          ))}

        <Stack spacing={2} sx={{ pt: 2 }}>
          <ProgramItem {...program.closingHymn} />
          <ProgramItem {...program.closingPrayer} />
        </Stack>
        </CardContent>
      </Card>
  )
}

export default SacramentProgram
