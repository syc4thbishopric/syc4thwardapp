import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import BlockQuote from "../components/elements/headers/BlockQuote"
import { dataHeroCard, dataBlockQuote, dataImageCards, dataFaceCard } from "../data/dataWelfare"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import ContactCard from "../components/modules/cards/ContactCard"
import { config } from "../config"

function Welfare() {
  return (
    <>
      <Head>
        <title>{`${config.wardName} - Welfare & Service`}</title>
      </Head>
      <PageHeader title="Welfare &amp; Service" subtitle="Giving your time to those in need is giving your time to your Heavenly Father" />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back</span>
          </PrimaryButton>
        </Box>
        <SectionHeader title="Next Opportunity" />
        <Box sx={{ pt: 8 }}>
          <HeroCard {...dataHeroCard} />
        </Box>
        <Box sx={{ pt: 8 }}>
          <BlockQuote {...dataBlockQuote} />
        </Box>
        {dataImageCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Upcoming Opportunities" />
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 3, pt: 3 }}>
              {dataImageCards
                .filter((card) => !card.hidden)
                .map((card: IImageCard) => (
                  <Box key={card.title}>
                    <ImageCard {...card} />
                  </Box>
                ))}
            </Box>
          </>
        )}
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

export default Welfare
