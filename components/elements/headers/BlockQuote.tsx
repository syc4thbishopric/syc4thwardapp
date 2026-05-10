import { Box, Stack, Typography } from "@mui/material"
import Divider from "../dividers/Divider"

export type IBlockQuote = {
  quote: string
  name?: string
  title?: string
}
const BlockQuote = ({ quote, name = "", title = "" }: IBlockQuote) => {
  return (
    <Box component="blockquote" sx={{ my: 7, mx: 0 }}>
      <Divider />
      <Box sx={{ maxWidth: 768, mx: "auto", pt: 7, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, lineHeight: { xs: 1.45, sm: 1.35 }, fontSize: { xs: "1.5rem", sm: "2rem" }, color: "text.primary" }}
        >
          &ldquo;{quote}&rdquo;
        </Typography>
        {(name || title) && (
          <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 1.5 }} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
            {name && (
              <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
                {name}
              </Typography>
            )}
            {name && title && (
              <Box component="svg" viewBox="0 0 20 20" aria-hidden="true" sx={{ display: { xs: "none", md: "block" }, width: 20, height: 20, color: "primary.main" }}>
                <path d="M11 0h3L9 20H6l5-20z" fill="currentColor" />
              </Box>
            )}
            {title && (
              <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                {title}
              </Typography>
            )}
          </Stack>
        )}
      </Box>
      <Box sx={{ pt: 7 }}>
        <Divider />
      </Box>
    </Box>
  )
}
export default BlockQuote
