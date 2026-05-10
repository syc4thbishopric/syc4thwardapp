import { Box, Divider as MuiDivider, type SxProps, type Theme, Typography } from "@mui/material"

export type IDivider = {
  text?: string
  sx?: SxProps<Theme>
}

const Divider = ({ text, sx }: IDivider) => {
  return (
    <Box sx={{ position: "relative", py: text ? 1 : 0, ...sx }}>
      <MuiDivider />
      {text && (
        <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <Typography
            component="span"
            variant="body2"
            sx={{ px: 1.5, bgcolor: "background.default", color: "text.secondary" }}
          >
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
export default Divider
