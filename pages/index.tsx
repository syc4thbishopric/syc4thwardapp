import Head from "next/head"
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
import React, { useState, useEffect } from 'react'
import {convertAnnouncements, getAllAnnouncements, getAnnouncements} from "../shared/services/announcement.service";
import {filterById, filterByType, setHttpHeaders} from "../shared/utils/api.util";
import {
    convertBannerCards,
    convertFaceCards, convertHeroCard, convertImageCards,
    convertMiniCards,
    dataCardsRequest
} from "../shared/services/data-card.service";
import BannerCard, {IBannerCard} from "../components/modules/cards/BannerCard";
import {config} from "../config";

export const getServerSideProps = async ({ req, res }) => {
  setHttpHeaders(res)
  const [announcements, dataCards] = await Promise.all([fetch(getAllAnnouncements()), fetch(dataCardsRequest())])
  return {
    props: {
      announcements: await announcements.json(),
      dataCards: (await dataCards.json()).sort((a, b) => a.order - b.order),
    },
  }
}


function Home({announcements, dataCards}) {
  const [eldersAnnouncements, setEldersAnnouncements] = useState<IAnnouncement[]|undefined>(convertAnnouncements(announcements.filter((item) => item.type === "elders")))
  const [reliefSocietyAnnouncements, setReliefSocietyAnnouncements] = useState<IAnnouncement[]|undefined>(convertAnnouncements(announcements.filter((item) => item.type === "relief-society")))
  const [youngWomenAnnouncements, setYoungWomenAnnouncements] = useState<IAnnouncement[]|undefined>(convertAnnouncements(announcements.filter((item) => item.type === "young-women")))
  const [primaryAnnouncements, setPrimaryAnnouncements] = useState<IAnnouncement[]|undefined>(convertAnnouncements(announcements.filter((item) => item.type === "primary")))
  const [generalAnnouncements, setGeneralAnnouncements] = useState<IAnnouncement[]|undefined>(convertAnnouncements(announcements.filter((item) => item.type === "general")))
  const [youngMenAnnouncements, setYoungMenAnnouncements] = useState<IAnnouncement[]|undefined>(convertAnnouncements(announcements.filter((item) => item.type === "young-men")))
  const dataBannerCards: IBannerCard[] = convertBannerCards(filterByType(dataCards, "banner-card"))
  const dataFaceCards: IContactCard[] = convertFaceCards(filterByType(dataCards, "face-card"))
  const dataMiniCards: IMiniCard[] = convertMiniCards(filterByType(dataCards, "mini-card"))
  const dataImageCards: IImageCard[] = convertImageCards(filterByType(dataCards, "image-card"))
  const dataSundayMeeting: IHeroCard = convertHeroCard(filterById(dataCards, config.pages.index.heroCardId), "dark")
  return (
    <Layout>
      <Head>
        <title>Sycamores 4th Ward</title>
      </Head>
      <div className="pt-16">
        <HeroCard {...dataSundayMeeting} />
      </div>
      <SectionHeader title="Announcements" subtitle="Find out more details of some of the upcoming events and activities." />
      {dataBannerCards.length > 0 && (
        <div className="mt-7">
          {dataBannerCards.map((card: IBannerCard) => (
            <div key={card.title} className="py-4 w-full">
              <BannerCard {...card} />
            </div>
          ))}
        </div>
      )}
      {generalAnnouncements.length < 1 && youngMenAnnouncements.length < 1  && reliefSocietyAnnouncements.length < 1  &&
       eldersAnnouncements.length < 1  && youngWomenAnnouncements.length < 1  && primaryAnnouncements.length < 1  &&
        <p className="text-lg text-gray-500 mt-7 text-center">No Announcements</p>
      }
      {generalAnnouncements.length > 0 &&
        <>
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(generalAnnouncements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      {reliefSocietyAnnouncements.length > 0 &&
        <>
          <p className="text-lg text-gray-500 mt-7 text-center">Relief Society</p>
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(reliefSocietyAnnouncements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      {eldersAnnouncements.length > 0 &&
        <>
          <p className="text-lg text-gray-500 mt-7 text-center">Elders</p>
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(eldersAnnouncements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      {youngWomenAnnouncements.length > 0 &&
        <>
          <p className="text-lg text-gray-500 mt-7 text-center">Young Women</p>
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(youngWomenAnnouncements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      {youngMenAnnouncements.length > 0 &&
        <>
          <p className="text-lg text-gray-500 mt-7 text-center">Young Men</p>
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(youngMenAnnouncements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      {primaryAnnouncements.length > 0 &&
        <>
          <p className="text-lg text-gray-500 mt-7 text-center">Primary</p>
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(primaryAnnouncements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
      {dataFaceCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Meet with a member of the bishopric" subtitle="Select a time and quickly schedule your appointment." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {dataFaceCards
              .filter((card) => !card.hidden)
              .map((card: IContactCard) => (
                <div key={card.title} className="py-3 w-full">
                  <ContactCard {...Object.assign(card, { className: "col-span-1" })} />
                </div>
              ))}
          </div>
        </>
      )}
      {dataMiniCards.filter((card) => !card.hidden).length > 0 && (
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataMiniCards
            .filter((card) => !card.hidden)
            .map((card: IMiniCard) => (
              <div key={card.title} className="py-3 w-full">
                <MiniCard {...card} />
              </div>
            ))}
        </div>
      )}
      {dataImageCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Learn what's going on" subtitle="Below are some of the happenings of the ward and ways to become involved." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 pt-5">
            {dataImageCards
              .filter((card) => !card.hidden)
              .map((card: IImageCard) => (
                <div key={card.title} className="py-3 w-full">
                  <ImageCard {...card} />
                </div>
              ))}
          </div>
        </>
      )}
    </Layout>
  )
}

export default Home
