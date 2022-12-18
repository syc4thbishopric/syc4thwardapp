import ImageCard from "../cards/ImageCard"
import MiniCard from "../cards/MiniCard"
import Divider from "../../elements/dividers/Divider"
import SectionHeader from "../../elements/headers/SectionHeader"
import SacramentProgram from "../../modules/sacrament-program/sacrament-program"
import { IColor, IImage, IButton } from "../../../shared/types"
import { IProgram } from "../sacrament-program/sacrament-program"

export type ISchedule = {
  date: IScheduleDate
  times: IScheduleTime[]
  program: IProgram
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
  primary: "bg-primary-100 text-primary-800",
  blue: "bg-blue-100 text-blue-800",
  red: "bg-red-100 text-red-800",
  green: "bg-green-100 text-green-800",
}

const Schedule = ({ date, times, program }: ISchedule) => {
  return (
    <>
      <SectionHeader title={date.dateFormatted} />
      {times.map((time) => (
        <div key={time.time}>
          <Divider className="mt-8 md:mt-12 lg:mt-14" />
          <div className="pt-8">
            <div className={`inline-flex items-center px-8 py-1 rounded-full text-lg font-semibold ${getColorStyle[time.color]}`}>{time.time}</div>
            <div className={`grid grid-cols-1 gap-x-6 sm:grid-cols-2 pt-5`}>
              {time.events
                .filter((event) => (event.repeats ? event.repeats.includes(date.weekOfTheMonth) : event))
                .map((event) =>
                  event.image ? (
                    <>
                      <div key={event.title} className="py-3 w-full">
                        <ImageCard
                          title={event.title}
                          subtitle={event.subtitle}
                          paragraph={event.description}
                          image={event.image}
                          button={event.button ? { ...event.button, color: time.color } : null}
                        />
                      </div>
                      <div className="py-3 w-full">
                        <SacramentProgram 
                          presiding={program.presiding}
                          conducting={program.conducting}
                          openingHymn={program.openingHymn}
                          closingHymn={program.closingHymn}
                          sacramentHymn={program.sacramentHymn}
                          openingPrayer={program.openingPrayer}
                          closingPrayer={program.closingPrayer}
                          programContents={program.programContents}
                        />
                      </div>
                    </>
                  ) : (
                    <div key={event.title} className="py-3 w-full">
                      <MiniCard
                        title={event.title}
                        subtitle={event.subtitle}
                        paragraph={event.description}
                        button={event.button ? { ...event.button, color: time.color } : null}
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default Schedule
