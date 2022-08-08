import Head from "next/head"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard from "../components/modules/cards/HeroCard"
import Announcement, { IAnnouncement } from "../components/modules/announcements/Announcement"
import ContactCard, { IContactCard } from "../components/modules/cards/ContactCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import { dataSundayMeeting, dataAnnouncements, dataFaceCards, dataMiniCards, dataImageCards } from "../data/dataIndex"
import { filterAndSortAnnouncements, generateAnnouncementKey, csvJSON } from "../shared/utils/announcement.util"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'



function Home() {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]|undefined>([])

  useEffect(() => {
      axios.get('https://docs.google.com/spreadsheets/d/1MO1uUzB1beS1dihX0BZmdspwYnqD7jt-Do87B3-Rbis/gviz/tq?tqx=out:csv&tq=SELECT%20A,B,C,D')
          .then(function (response) {
            const jsonData = csvJSON(response.data)
            const finalAnnouncements = jsonData.map(item => {
                const newDate = moment(item.date + item.time, 'YYYY-MM-DDLT').toDate()
                return {
                    date: newDate,
                    title: item.title,
                    description: item.description
                }
            })
            setAnnouncements(finalAnnouncements);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
  }, [])

  return (
    <Layout>
      <Head>
        <title>Sycamores 4th Ward</title>
      </Head>
      <div className="pt-16">
        <HeroCard {...dataSundayMeeting} />
      </div>
      {dataAnnouncements.length > 0 && (
        <>
          <SectionHeader title="Announcements" subtitle="Find out more details of some of the upcoming events and activities." />
          <div className="mt-7">
            <div className="relative max-w-xl mx-auto lg:max-w-7xl">
              <div className="grid gap-4 lg:grid-cols-2">
                {filterAndSortAnnouncements(announcements).map((announcement: IAnnouncement) => (
                  <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                    <Announcement {...announcement} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
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
