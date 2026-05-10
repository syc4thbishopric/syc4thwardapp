import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import ContactCard from "../components/modules/cards/ContactCard"
import { dataHeroCard, dataFaceCard } from "../data/dataWardMission"

function WardMission() {
  return (
    <>
      <Head>
        <title>Ward Mission</title>
      </Head>
      <PageHeader title="Ward Mission" />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back</span>
          </PrimaryButton>
        </Box>
        <Box sx={{ pt: 8 }}>
          <HeroCard {...dataHeroCard} />
        </Box>
        <Box sx={{ pt: 8 }}>
          <Divider />
          <SectionHeader title="Contact" />
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(4, minmax(0, 1fr))" }, pt: 5 }}>
            <Box sx={{ gridColumn: { sm: "2 / span 2" } }}>
              <ContactCard {...dataFaceCard} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 8 }}>
          <PrimaryButton type="link" link={{ url: "/" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back</span>
          </PrimaryButton>
        </Box>
      </Layout>
    </>
  )
}

export default WardMission
