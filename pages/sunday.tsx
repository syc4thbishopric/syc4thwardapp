import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import Schedule, { ISchedule, IScheduleTime } from "../components/modules/schedules/Schedule"
import { dataSpecialSchedules } from "../data/dataSchedules"
import { getScheduleDate, getNextSunday, isSameOrAfterToday } from "../shared/utils/date.util"
import { filterByType, setHttpHeaders } from "../shared/utils/api.util"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import { convertSchedules, getSchedules } from "../shared/services/schedule.service"
import { config } from "../config"
import { convertImageCards, getDataCards } from "../shared/services/data-card.service"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import SectionHeader from "../components/elements/headers/SectionHeader"

export const getServerSideProps = async ({ res }) => {
  setHttpHeaders(res)
  const [dataCards, schedules] = await Promise.all([getDataCards(), getSchedules()])
  return {
    props: {
        schedules,
        roll: dataCards.sort((a, b) => a.order - b.order)
    },
  }
}

function Sunday({ schedules, roll }) {
  const dataRollCards: IImageCard[] = convertImageCards(filterByType(roll, "roll-card"))
  const dataSundayScheduleTimes: IScheduleTime[] = convertSchedules(schedules.filter(schedule => schedule.events))
  const sundaySchedule: ISchedule = {
    date: getScheduleDate(getNextSunday()),
    times: dataSundayScheduleTimes
  }
  const schedule = dataSpecialSchedules
    .filter((e) => isSameOrAfterToday(e.date.date))
    .concat(sundaySchedule)
    .sort((a: ISchedule, b: ISchedule) => a.date.date.getTime() - b.date.date.getTime())[0]
  return (
    <>
      <Head>
        <title>{config.wardName} - Sunday Meetings</title>
      </Head>
      <PageHeader title="Sunday Meetings" subtitle="Below is a list of scheduled events this upcoming Sunday" />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back</span>
          </PrimaryButton>
        </Box>
        <Schedule {...schedule} />
        {dataRollCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Take Class Attendance" subtitle="Find your organization and select the appropriate class in the dropdown" />
            <Box sx={{ display: "grid", gap: 3, pt: 5, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" } }}>
              {dataRollCards
                .filter((card) => !card.hidden)
                .map((card: IImageCard) => (
                  <Box key={card.title}>
                    <ImageCard {...card} />
                  </Box>
                ))}
            </Box>
          </>
        )}
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

export default Sunday
