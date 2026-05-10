import { Box } from "@mui/material"
import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import SectionHeader from "../components/elements/headers/SectionHeader"

function Welcome() {
  return (
    <>
      <Head>
        <title>Sycamores 4th Ward - Welcome</title>
      </Head>
      <PageHeader title="Welcome" />
      <Layout>
        <Box sx={{ position: "absolute", top: { xs: 8, md: 20 } }}>
          <PrimaryButton type="link" link={{ url: "/" }}>
            <Icon name="chevron-left" className="h-5 w-5" />
            <span>Back</span>
          </PrimaryButton>
        </Box>
        <SectionHeader title="Welcome to the Maples 3rd Ward" />
      </Layout>
    </>
  )
}

export default Welcome
