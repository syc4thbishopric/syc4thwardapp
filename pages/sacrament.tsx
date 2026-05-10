import { Box } from "@mui/material"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import PageHeader from "../components/elements/headers/PageHeader"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Icon from "../components/elements/icons/Icon"
import Layout from "../components/layouts/Layout"
import SacramentProgram from "../components/modules/sacrament-program/sacrament-program"
import { getSacramentProgram } from "../shared/services/sacrament-program.service"
import { setHttpHeaders } from "../shared/utils/api.util"
import { getNextSunday, getScheduleDate } from "../shared/utils/date.util"

export const getServerSideProps = async ({ res }) => {
  setHttpHeaders(res)
  return {
    props: {
      responseProgram: await getSacramentProgram()
    }
  }
}

function Sacrament({responseProgram}) {
  const sundayDate = getScheduleDate(getNextSunday());
  const programDate = getScheduleDate(responseProgram.date) ? getScheduleDate(responseProgram.date) : getScheduleDate("2099-01-01");

  return (
    <>
      <PageHeader title="Sacrament Meeting Program" />
      <Layout>
        <Box sx={{ pt: 2 }}>
          <PrimaryButton type="link" link={{ url: "/sunday" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back to Sunday Schedule</span>
          </PrimaryButton>
        </Box>
        <SectionHeader title={sundayDate.dateFormatted} />
        {sundayDate.dateFormatted == programDate.dateFormatted ?
        <Box sx={{ width: "100%" }}>
            <SacramentProgram
              date={programDate.dateFormatted} 
              presiding={responseProgram.presiding}
              conducting={responseProgram.conducting}
              openingHymn={responseProgram.openHymn}
              chorister={responseProgram.chorister}
              organist={responseProgram.organist}
              closingHymn={responseProgram.closingHymn}
              sacramentHymn={responseProgram.sacramentHymn}
              openingPrayer={responseProgram.invocation}
              closingPrayer={responseProgram.benediction}
              programContents={responseProgram.programContent}
            />
          </Box> : <SectionHeader title="Program is forthcoming. Please check later" />}
        <Box sx={{ mt: 8 }}>
          <PrimaryButton type="link" link={{ url: "/sunday" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back to Sunday Schedule</span>
          </PrimaryButton>
        </Box>
      </Layout>
    </>
  )
}

export default Sacrament
