import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../../components/layouts/Layout"
import PageHeader from "../../components/elements/headers/PageHeader"
import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import Icon from "../../components/elements/icons/Icon"
import HeroCard from "../../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../../components/modules/cards/EventCard"
import BlockQuote from "../../components/elements/headers/BlockQuote"
import { dataInfoCards, dataHeroCard, dataBlockQuote } from "../../data/welfare/dataSaintVincentDePaul"
import SectionHeader from "../../components/elements/headers/SectionHeader"
import { isSameOrAfterToday } from "../../shared/utils/date.util"

function StVincent() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Saint Vincent De Paul </title>
      </Head>
      <PageHeader title="Saint Vincent De Paul" subtitle="Maples 3rd Ward will have a number of opportunities to server at St. Vincent De Paul's this year." />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/welfare" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back To Welfare</span>
          </PrimaryButton>
        </Box>
        <SectionHeader title="Next Opportunity at Saint Vincent De Paul" />
        <Box sx={{ pt: 8 }}>
          <HeroCard {...dataHeroCard} />
        </Box>
        {dataInfoCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Upcoming Events" subtitle="There are two more opportunities to serve here this year." />
            <Box sx={{ mt: 3, display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" } }}>
              {dataInfoCards
                .filter((card) => !card.hidden && isSameOrAfterToday(card.date))
                .sort((a: any, b: any) => a.date - b.date)
                .map((card: IEventCard) => (
                  <EventCard key={card.title} {...card} />
                ))}
            </Box>
          </>
        )}
        <SectionHeader title="Volunteer Info" subtitle="Reach out to Jason Hardman with any questions" />
        <Box sx={{ pt: 8, display: "grid", gap: 1.5 }}>
          <Box>
            <Box component="h2" sx={{ m: 0, fontSize: "1.25rem", fontWeight: 700, color: "text.primary" }}>Address</Box>
            <Box component="p" sx={{ m: 0, color: "text.secondary" }}>437 West 200 South</Box>
            <Box component="p" sx={{ m: 0, color: "text.secondary" }}>Salt Lake City, UT 84115</Box>
          </Box>
          <Box component="ul" sx={{ m: 0, pl: 3, display: "grid", gap: 1.25, color: "text.primary" }}>
            <li>Parking is available in the fenced lot east of the building. The gate is on the north side of 200 South.</li>
            <li>Enter at the south-most blue door on the east side of the building, adjacent to the parking lot.</li>
            <li>Youth 12 and older are welcome with adult supervision.</li>
            <li>Closed toe shoes are required.</li>
            <li>Aprons and plastic gloves are provided.</li>
            <li>Valuables should be left at home or otherwise secured.</li>
          </Box>
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

export default StVincent
