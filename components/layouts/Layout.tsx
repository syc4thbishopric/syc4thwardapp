import { Box, Container } from "@mui/material"
import Footer from "../elements/footers/Footer"

const Layout = ({ children, className = "" }) => {
  return (
    <Box className={className} sx={{ bgcolor: "background.default", minHeight: "100vh", position: "relative" }}>
      <Container maxWidth="xl" sx={{ pb: 8, px: { xs: 2, sm: 3, lg: 4 } }}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
export default Layout
