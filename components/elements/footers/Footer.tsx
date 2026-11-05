import { Box, Link, Typography } from "@mui/material"
import Divider from "../dividers/Divider"
import { config } from "../../../config"

const Footer = () => {
  return (
    <>
      <Divider />
      <Box component="footer" sx={{ bgcolor: "background.default" }}>
        <Box sx={{ maxWidth: 672, mx: "auto", py: 6, px: { xs: 2, sm: 3, lg: 4 } }}>
          <Typography variant="body2" align="center" color="text.secondary">
            This is <Box component="span" sx={{ textDecoration: "underline", fontWeight: 600 }}>not</Box> an official website of{" "}
            <Link
              href="https://www.churchofjesuschrist.org"
              target="_blank"
              underline="hover"
              color="primary"
              rel="noreferrer"
              sx={{ whiteSpace: "nowrap" }}
            >
              The Church of Jesus Christ of Latter-day Saints
            </Link>
            .
            <br />
            It is operated by members of the <Box component="span" sx={{ whiteSpace: "nowrap" }}>{config.wardName}</Box>.
            {config.stakeUrl && (
              <>
                <br />
                <Link href={config.stakeUrl} underline="hover" color="primary" rel="noreferrer" sx={{ whiteSpace: "nowrap" }}>
                  Return to Stake Website
                </Link>
              </>
            )}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer
