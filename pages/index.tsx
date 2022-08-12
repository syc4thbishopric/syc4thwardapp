import Head from "next/head"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard from "../components/modules/cards/HeroCard"
import Announcement, { IAnnouncement } from "../components/modules/announcements/Announcement"
import ContactCard, { IContactCard } from "../components/modules/cards/ContactCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import { dataSundayMeeting, dataAnnouncements, dataFaceCards, dataMiniCards, dataImageCards } from "../data/dataIndex"
import {
    filterAndSortAnnouncements,
    generateAnnouncementKey,
    csvJSON,
    getGeneralAnnouncements,
    getYoungMensAnnouncements
} from "../shared/utils/announcement.util"
import React, { useState, useEffect } from 'react'



function Home() {
  const [generalAnnouncements, setGeneralAnnouncements] = useState<IAnnouncement[]|undefined>([])
  const [youngMenAnnouncements, setYoungMenAnnouncements] = useState<IAnnouncement[]|undefined>([])

  useEffect(() => {
      getGeneralAnnouncements().then(res => {setGeneralAnnouncements(res)});
      getYoungMensAnnouncements().then(res => {setYoungMenAnnouncements(res)});
  }, [])

  return (
    <Layout>
      <Head>
        <title>Sycamores 4th Ward</title>
      </Head>
      <div className="pt-16">
        <HeroCard {...dataSundayMeeting} />
      </div>
      <SectionHeader title="Announcements" subtitle="Find out more details of some of the upcoming events and activities." />
      {generalAnnouncements.length < 1 && youngMenAnnouncements.length < 1  &&
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
