import { Box, Chip } from "@mui/material"
import ImageCard from "../cards/ImageCard"
import MiniCard from "../cards/MiniCard"
import Divider from "../../elements/dividers/Divider"
import SectionHeader from "../../elements/headers/SectionHeader"
import { IColor, IImage, IButton } from "../../../shared/types"

export type ISchedule = {
  date: IScheduleDate
  times: IScheduleTime[]
}

export type IScheduleDate = {
  date: Date
  dateFormatted: string
  weekOfTheMonth: number
}

export type IScheduleTime = {
  time: string
  color: IColor
  events: IScheduleEvent[]
}

export type IScheduleEvent = {
  repeats?: number[]
  title: string
  subtitle: string
  description: string
  button?: IButton
  image?: IImage
}

const getColorStyle = {
  primary: { bgcolor: "primary.light", color: "primary.dark" },
  blue: { bgcolor: "#DBEAFE", color: "#1D4ED8" },
  red: { bgcolor: "#FEE2E2", color: "#B91C1C" },
  green: { bgcolor: "#DCFCE7", color: "#15803D" },
}

const Schedule = ({ date, times }: ISchedule) => {
  return (
    <>
      <SectionHeader title={date.dateFormatted} />
      {times.map((time) => (
        <Box key={time.time}>
          <Divider sx={{ mt: 4 }} />
          <Box sx={{ pt: 4 }}>
            <Chip label={time.time} sx={{ px: 2, py: 2.5, fontSize: "1.125rem", fontWeight: 700, ...getColorStyle[time.color] }} />
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 3, pt: 3 }}>
              {time.events
                .filter((event) => (event.repeats ? event.repeats.includes(date.weekOfTheMonth) : event))
                .map((event) =>
                  event.image ? (
                      <Box key={event.title}>
                        <ImageCard
                          title={event.title}
                          subtitle={event.subtitle}
                          paragraph={event.description}
                          image={event.image}
                          button={event.button ? { ...event.button, color: time.color } : null}
                        />
                      </Box>
                  ) : (
                    <Box key={event.title}>
                      <MiniCard
                        title={event.title}
                        subtitle={event.subtitle}
                        paragraph={event.description}
                        button={event.button ? { ...event.button, color: time.color } : null}
                      />
                    </Box>
                  )
                )}
            </Box>
          </Box>
        </Box>
      ))}
    </>
  )
}
export default Schedule
