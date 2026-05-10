import { Box, type SxProps, type Theme, Typography } from "@mui/material"

export type ISectionHeader = {
  title: string
  subtitle?: string
  sx?: SxProps<Theme>
}

const SectionHeader = ({ title, subtitle = "", sx }: ISectionHeader) => {
  return (
    <Box sx={{ maxWidth: "80rem", mx: "auto", textAlign: "center", ...sx }}>
      <Box sx={{ display: "grid", gap: { xs: 1, sm: 2 } }}>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, letterSpacing: "-0.02em" }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.125rem" }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
export default SectionHeader
