import { Box, Container, Typography } from "@mui/material"

export type IPageHeader = {
  title: string
  subtitle?: string
  className?: string
}

const PageHeader = ({ title, subtitle = "", className = "" }: IPageHeader) => {
  return (
    <Box
      className={className}
      sx={{
        background: "linear-gradient(90deg, #312E81 0%, #4338CA 45%, #4F46E5 100%)",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 6, md: 7, lg: 8 }, px: { xs: 3, xl: 8 } }}>
        <Box sx={{ width: "100%", px: { xs: 1, md: 4, lg: 6, xl: 8 }, textAlign: "center" }}>
          <Typography variant="h2" sx={{ color: "common.white", fontSize: { xs: "1.5rem", sm: "2.5rem" } }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h5"
              sx={{ mt: { xs: 1, md: 2 }, lineHeight: 1.4, color: "common.white", fontSize: { xs: "1.125rem", sm: "1.5rem" } }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}
export default PageHeader
