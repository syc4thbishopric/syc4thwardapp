import Head from "next/head"
import { Box, Card, CardContent, NoSsr, Typography } from "@mui/material"
import Masonry from "@mui/lab/Masonry"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard, {IHeroCard} from "../components/modules/cards/HeroCard"
import Announcement, { IAnnouncement } from "../components/modules/announcements/Announcement"
import ContactCard, { IContactCard } from "../components/modules/cards/ContactCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import {
    filterAndSortAnnouncements,
    generateAnnouncementKey,
} from "../shared/utils/announcement.util"
import React, { useMemo } from 'react'
import {convertAnnouncements, getAllAnnouncements} from "../shared/services/announcement.service";
import {filterById, filterByType, setHttpHeaders} from "../shared/utils/api.util";
import { withFallback } from "../shared/services/api-client";
import {
    convertBannerCards,
    convertFaceCards, convertHeroCard, convertImageCards,
    convertMiniCards,
    getDataCards,
} from "../shared/services/data-card.service";
import BannerCard, {IBannerCard} from "../components/modules/cards/BannerCard";
import {config, serverConfig} from "../config";
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"

export const getServerSideProps = async ({ res }) => {
  setHttpHeaders(res)
  const [announcements, dataCards] = await Promise.all([withFallback(getAllAnnouncements(), []), withFallback(getDataCards(), [])])
  const heroCard = serverConfig.heroCardId ? filterById(dataCards, serverConfig.heroCardId) : filterByType(dataCards, "hero-card")[0]
  return {
    props: {
      announcements,
      dataCards: dataCards.sort((a, b) => a.order - b.order),
      heroCard: heroCard ?? null,
    },
  }
}

function Home({announcements, dataCards, heroCard}) {
  const dataBannerCards: IBannerCard[] = convertBannerCards(filterByType(dataCards, "banner-card"))
  const dataFaceCards: IContactCard[] = convertFaceCards(filterByType(dataCards, "face-card"))
  const dataMiniCards: IMiniCard[] = convertMiniCards(filterByType(dataCards, "mini-card"))
  const dataImageCards: IImageCard[] = convertImageCards(filterByType(dataCards, "image-card"))
  const dataMissionaryCards: IImageCard[] = convertImageCards(filterByType(dataCards, "missionary-card"))
  const dataSundayMeeting: IHeroCard | null = heroCard ? convertHeroCard(heroCard, "dark") : null
  const announcementSections = useMemo(
    () => [
      { title: "", items: convertAnnouncements(announcements.filter((item) => item.type === "general")) },
      { title: "Relief Society", items: convertAnnouncements(announcements.filter((item) => item.type === "relief-society")) },
      { title: "Elders", items: convertAnnouncements(announcements.filter((item) => item.type === "elders")) },
      { title: "Young Women", items: convertAnnouncements(announcements.filter((item) => item.type === "young-women")) },
      { title: "Young Men", items: convertAnnouncements(announcements.filter((item) => item.type === "young-men")) },
      { title: "Primary", items: convertAnnouncements(announcements.filter((item) => item.type === "primary")) },
    ],
    [announcements]
  )
  const visibleAnnouncementSections = announcementSections.filter((section) => section.items.length > 0)

  dataMissionaryCards.forEach(card => card.scale = true);

  return (
    <Layout>
      <Head>
        <title>{config.wardName}</title>
      </Head>
      {config.stakeUrl && (
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: config.stakeUrl }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back to Stake Site</span>
          </PrimaryButton>
        </Box>
      )}
      <Box sx={{ pt: 8 }}>
        {dataSundayMeeting && <HeroCard {...dataSundayMeeting} />}
      </Box>
      <Box sx={{ mb: 4 }}>
        <SectionHeader title="Announcements" subtitle="Find out more details of some of the upcoming events and activities." sx={{ pt: 5 }} />
      </Box>
      {dataBannerCards.length > 0 && (
        <>
          <Box sx={{ display: { xs: "grid", lg: "none" }, gap: 2 }}>
            {dataBannerCards.map((card: IBannerCard) => (
              <BannerCard key={card.title} {...card} />
            ))}
          </Box>
          <NoSsr fallback={null}>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Masonry columns={2} spacing={2} sx={{ m: 0 }}>
                {dataBannerCards.map((card: IBannerCard) => (
                  <BannerCard key={card.title} {...card} />
                ))}
              </Masonry>
            </Box>
          </NoSsr>
        </>
      )}
      {visibleAnnouncementSections.length < 1 &&
        <Typography sx={{ mt: 4, textAlign: "center", fontSize: "1.125rem", color: "text.secondary" }}>No Announcements</Typography>
      }
      {visibleAnnouncementSections.map((section) => (
        <Box key={section.title || "general"} sx={{ mt: 4 }}>
          {section.title && (
            <Typography sx={{ mb: 3, textAlign: "center", fontSize: "1.125rem", color: "text.secondary" }}>
              {section.title}
            </Typography>
          )}
          <Box sx={{ display: { xs: "grid", lg: "none" }, gap: 2 }}>
            {filterAndSortAnnouncements(section.items).map((announcement: IAnnouncement) => (
              <Card key={generateAnnouncementKey(announcement)} sx={{ boxShadow: 6 }}>
                <CardContent sx={{ p: { xs: 3, lg: 4 }, bgcolor: "background.paper" }}>
                  <Announcement {...announcement} />
                </CardContent>
              </Card>
            ))}
          </Box>
          <NoSsr fallback={null}>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Masonry columns={2} spacing={2} sx={{ m: 0 }}>
                  {filterAndSortAnnouncements(section.items).map((announcement: IAnnouncement) => (
                    <Card key={generateAnnouncementKey(announcement)} sx={{ boxShadow: 6 }}>
                      <CardContent sx={{ p: { xs: 3, lg: 4 }, bgcolor: "background.paper" }}>
                        <Announcement {...announcement} />
                      </CardContent>
                    </Card>
                ))}
              </Masonry>
            </Box>
          </NoSsr>
        </Box>
      ))}
      {dataFaceCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Meet with a member of the bishopric" subtitle="Select a time and quickly schedule your appointment." sx={{ pt: 5 }}/>
          <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" } }}>
            {dataFaceCards
              .filter((card) => !card.hidden)
              .map((card: IContactCard) => (
                <Box key={card.title}>
                  <ContactCard {...card} />
                </Box>
              ))}
          </Box>
        </>
      )}
      {dataMiniCards.filter((card) => !card.hidden).length > 0 && (
        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" } }}>
          {dataMiniCards
            .filter((card) => !card.hidden)
            .map((card: IMiniCard) => (
              <Box key={card.title}>
                <MiniCard {...card} />
              </Box>
            ))}
        </Box>
      )}
      {dataMissionaryCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Missionaries Serving" subtitle="Take some time to write our missionaries." sx={{ pt: 5 }}/>
          <Box sx={{ display: "grid", gap: 3, pt: 3, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" } }}>
            {dataMissionaryCards
              .filter((card) => !card.hidden)
              .map((card: IImageCard) => (
                <Box key={card.title}>
                  <ImageCard {...card} />
                </Box>
              ))}
          </Box>
        </>
      )}
      {dataImageCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Learn what's going on" subtitle="Below are some of the happenings of the ward and ways to become involved." sx={{ pt: 5 }}/>
          <Box sx={{ display: "grid", gap: 3, pt: 3, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" } }}>
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
    </Layout>
  )
}

export default Home
