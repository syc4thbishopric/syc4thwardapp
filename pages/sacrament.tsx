import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Divider from "../components/elements/dividers/Divider"
import PageHeader from "../components/elements/headers/PageHeader"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Icon from "../components/elements/icons/Icon"
import Layout from "../components/layouts/Layout"
import SacramentProgram from "../components/modules/sacrament-program/sacrament-program"
import { dataSacramentProgram } from "../data/dataSacramentProgram"
import { dataCardsRequest } from "../shared/services/data-card.service"
import { setHttpHeaders } from "../shared/utils/api.util"
import { getNextSunday, getScheduleDate } from "../shared/utils/date.util"
import { useWindowSize } from "../shared/utils/general.util"

export const getServerSideProps = async ({req, res}) => {
  setHttpHeaders(res)
  const [dataCards] = await Promise.all([fetch(dataCardsRequest())])
  return {
    props: {
      dataCards: (await dataCards.json()).sort((a, b) => a.order - b.order),
      program: dataSacramentProgram
    }
  }
}

function Sacrament({dataCards, program}) {
  // const dataSacramentCards: IImageCard[] = convertImageCard(filterByType(dataCards, "sacrament-card"))
  const sundayDate = getScheduleDate(getNextSunday());
  const size = useWindowSize();

  return (
    <>
      <PageHeader title="Sacrament Meeting" subtitle="Please see below for the program for today" />
      <Layout>
      <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/sunday" }}>
        <Icon name="chevron-left" className="h-5 w-5" />
        <span className="mr-2 text-sm uppercase font-semibold">Back to Sunday Schedule</span>
      </PrimaryButton>
      <SectionHeader title={sundayDate.dateFormatted} />
      <Divider className="mt-8 md:mt-12 lg:mt-14" />
      {sundayDate.dateFormatted == program.date ?
       <div className="py-3 w-full">
          <SacramentProgram
            date={program.date} 
            presiding={program.presiding}
            conducting={program.conducting}
            openingHymn={program.openingHymn}
            closingHymn={program.closingHymn}
            sacramentHymn={program.sacramentHymn}
            openingPrayer={program.openingPrayer}
            closingPrayer={program.closingPrayer}
            programContents={program.programContents}
          />
        </div> : <SectionHeader title={`Program is forthcoming. Please check later`} />}
      <PrimaryButton type="link" className="mt-20" link={{ url: "/sunday" }}>
        <Icon name="chevron-left" className="h-5 w-5" />
        <span className="mr-2 text-sm uppercase font-semibold">Back to Sunday Schedule</span>
      </PrimaryButton>
      </Layout>
    </>
  )
}

export default Sacrament