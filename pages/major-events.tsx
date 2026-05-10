import Layout from "../components/layouts/Layout"
import { Box, Card, CardContent, NoSsr, Typography } from "@mui/material"
import Masonry from "@mui/lab/Masonry"
import Announcement, { IAnnouncement } from "../components/modules/announcements/Announcement"
import {
    filterAndSortAnnouncements,
    generateAnnouncementKey,
} from "../shared/utils/announcement.util"
import React from 'react'
import {convertAnnouncements, getAllAnnouncements} from "../shared/services/announcement.service";

import PageHeader from "../components/elements/headers/PageHeader"
import {setHttpHeaders} from "../shared/utils/api.util";
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"

export const getServerSideProps = async ({ res }) => {
  setHttpHeaders(res)
  return {
    props: {
      announcements: await getAllAnnouncements()
    },
  }
}

function MajorEvents({announcements}) {
  const majorEvents: IAnnouncement[] = convertAnnouncements(announcements.filter((item) => item.type === "major-events"))

  return (
    <>
      <PageHeader title="Key Dates To Remember" subtitle="Below are some dates to be aware of for upcoming events this year" />
      <Layout>
        <Box sx={{ mt: 3 }}>
        <PrimaryButton type="link" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span>Back to Home</span>
        </PrimaryButton>
        </Box>
        {majorEvents.length > 0 &&
          <>
            <Typography sx={{ mt: 3, mb: 3, textAlign: "center", fontSize: "1.125rem", color: "text.secondary" }}>Events</Typography>
            <Box sx={{ display: { xs: "grid", lg: "none" }, gap: 2 }}>
              {filterAndSortAnnouncements(majorEvents).map((announcement: IAnnouncement) => (
                <Card key={generateAnnouncementKey(announcement)} sx={{ boxShadow: 6 }}>
                  <CardContent sx={{ p: { xs: 3, lg: 4 }, bgcolor: "background.paper" }}>
                    <Announcement {...announcement} />
                  </CardContent>
                </Card>
              ))}
            </Box>
            <NoSsr fallback={null}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Masonry columns={2} spacing={2} sx={{ m: 0 }}>
                  {filterAndSortAnnouncements(majorEvents).map((announcement: IAnnouncement) => (
                    <Card key={generateAnnouncementKey(announcement)} sx={{ boxShadow: 6 }}>
                      <CardContent sx={{ p: { xs: 3, lg: 4 }, bgcolor: "background.paper" }}>
                        <Announcement {...announcement} />
                      </CardContent>
                    </Card>
                  ))}
                </Masonry>
              </Box>
            </NoSsr>
          </>
        }
        {majorEvents.length < 1 &&
          <Typography sx={{ mt: 3, textAlign: "center", fontSize: "1.125rem", color: "text.secondary" }}>No Major Events</Typography>
        }
        <Box sx={{ mt: 3 }}>
        <PrimaryButton type="link" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span>Back to Home</span>
        </PrimaryButton>
        </Box>
      </Layout>
    </>
  )
}

export default MajorEvents
