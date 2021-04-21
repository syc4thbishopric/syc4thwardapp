import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../components/modules/cards/EventCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import BlockQuote from "../components/elements/headers/BlockQuote"
import { dataInfoCards, dataHeroCard, dataBlockQuote, dataImageCards } from "../data/dataSaintVincentDePaul"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import { isSameOrAfterToday } from "../shared/utils/date.util"

function StVincent() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Saint Vincent De Paul </title>
      </Head>
      <PageHeader title="Saint Vincent De Paul" subtitle="Maples 3rd Ward will have a number of opportunities to server at St. Vincent De Paul's this year." />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <SectionHeader title="Next Opportunity at Saint Vincent De Paul" />
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        {dataInfoCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Upcoming Events" subtitle="There are opportunities to serve at the here all year." />
            <div className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {dataInfoCards
                .filter((card) => !card.hidden && isSameOrAfterToday(card.date))
                .sort((a: any, b: any) => a.date - b.date)
                .map((card: IEventCard) => (
                  <EventCard key={card.title} {...card} />
                ))}
            </div>
          </>
        )}
        <div className="pt-16">
          <BlockQuote {...dataBlockQuote} />
        </div>
        <PrimaryButton type="link" className="mt-20" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default StVincent
