import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../../components/layouts/Layout"
import PageHeader from "../../components/elements/headers/PageHeader"
import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import Icon from "../../components/elements/icons/Icon"
import HeroCard from "../../components/modules/cards/HeroCard"
import BlockQuote from "../../components/elements/headers/BlockQuote"
import { dataHeroCard, dataBlockQuote } from "../../data/welfare/dataDeseretSoap"
import SectionHeader from "../../components/elements/headers/SectionHeader"

function DeseretSoap() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Deseret Soap</title>
      </Head>
      <PageHeader title="Deseret Soap" subtitle="Maples 3rd Ward will have an opportunity to server at Deseret Soap this year." />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/welfare" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back To Welfare</span>
          </PrimaryButton>
        </Box>
        <SectionHeader title="Next Opportunity at Deseret Soap" />
        <Box sx={{ pt: 8 }}>
          <HeroCard {...dataHeroCard} />
        </Box>
        <Box sx={{ pt: 8 }}>
          <BlockQuote {...dataBlockQuote} />
        </Box>
        <Box sx={{ mt: 8 }}>
          <PrimaryButton type="link" link={{ url: "/welfare" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back To Welfare</span>
          </PrimaryButton>
        </Box>
      </Layout>
    </>
  )
}

export default DeseretSoap
