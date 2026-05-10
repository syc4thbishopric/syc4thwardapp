import { Box, Divider as MuiDivider, type SxProps, type Theme, Typography } from "@mui/material"

export type IProgramDivider = {
  text?: string
  sx?: SxProps<Theme>
}

const ProgramDivider = ({ text, sx }: IProgramDivider) => {
  return (
    <Box sx={{ position: "relative", py: text ? 1 : 0, ...sx }}>
      <MuiDivider sx={{ borderColor: "grey.400" }} />
      {text && (
        <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography
            component="span"
            variant="body2"
            sx={{ px: 1.5, bgcolor: "background.paper", color: "text.secondary", fontWeight: 300, textTransform: "uppercase", fontStyle: "italic" }}
          >
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
export default ProgramDivider
