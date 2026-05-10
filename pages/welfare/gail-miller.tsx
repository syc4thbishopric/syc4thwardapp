import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../../components/layouts/Layout"
import PageHeader from "../../components/elements/headers/PageHeader"
import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import Icon from "../../components/elements/icons/Icon"
import HeroCard from "../../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../../components/modules/cards/EventCard"
import BlockQuote from "../../components/elements/headers/BlockQuote"
import { dataInfoCards, dataHeroCard, dataBlockQuote } from "../../data/welfare/dataGailMiller"
import SectionHeader from "../../components/elements/headers/SectionHeader"
import { isSameOrAfterToday } from "../../shared/utils/date.util"

function GailMiller() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Gail Miller Homeless Resource Center</title>
      </Head>
      <PageHeader
        title="Gail Miller Resource Center"
        subtitle="Maples 3rd Ward will have a number of opportunities to server at Gail Miller Homeless Resource Center this year."
      />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/welfare" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back To Welfare</span>
          </PrimaryButton>
        </Box>
        <SectionHeader title="Next Opportunity at Gail Miller Homeless Resource Center" />
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
        <Box sx={{ pt: 8, display: "grid", gap: 3 }}>
          <Box sx={{ display: "grid", gap: 1.5 }}>
            <Box component="h2" sx={{ m: 0, fontSize: "1.25rem", fontWeight: 700, color: "text.primary" }}>Address</Box>
            <Box component="p" sx={{ m: 0, color: "text.secondary" }}>242 West Paramount Avenue</Box>
            <Box component="p" sx={{ m: 0, color: "text.secondary" }}>Salt Lake City, UT 84115</Box>
          </Box>
          <Box component="ul" sx={{ m: 0, pl: 3, display: "grid", gap: 1.25, color: "text.primary" }}>
            <li>If you are experiencing COVID symptoms, please stay home.</li>
            <li>Because you&apos;ll be working around food, please make sure that you&apos;re showered and that your clothes are clean.</li>
            <li>Please be sure to bring close-toed shoes and socks.</li>
            <li>Please wear a shirt with sleeves. No tank tops.</li>
            <li>Bring a hair tie for hair that is longer than five inches.</li>
            <li>Bring a hat if you don&apos;t want to wear a hairnet.</li>
            <li>Hair nets, beard nets, aprons, and gloves will be provided upon arrival.</li>
          </Box>
          <Box sx={{ display: "grid", gap: 1.5 }}>
            <Box component="h2" sx={{ m: 0, fontSize: "1.25rem", fontWeight: 700, color: "text.primary" }}>Where to Park</Box>
            <Box component="ul" sx={{ m: 0, pl: 3, display: "grid", gap: 1.25, color: "text.primary" }}>
              <li>Press the call button at the gate to have a staff member open the gate.</li>
              <li>Let them know that you are here to volunteer.</li>
              <li>Once in the parking area, follow the road around the building and park in any open spot.</li>
            </Box>
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

export default GailMiller
