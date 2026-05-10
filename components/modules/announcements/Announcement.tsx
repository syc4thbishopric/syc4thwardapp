import { Box, Button, Chip, Divider, Link, Stack, Typography } from "@mui/material"
import { useState } from "react"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { getDateDisplay } from "../../../shared/utils/date.util"
import { IButton } from "../../../shared/types"
import Linkify from "linkify-react"
import Icon from "../../elements/icons/Icon"

type SubDate = {
  subTitle?: string
  date: Date
}

export type IAnnouncement = {
  title: string
  date?: Date
  dates?: SubDate[]
  location?: {
    address: string
    link?: string
  }
  description?: string
  button?: IButton
}

const options = {
  attributes: null,
  className: "text-blue-700 hover:text-blue-500",
  defaultProtocol: "http",
  events: null,
  format: (value) => value,
  formatHref: (href) => href,
  ignoreTags: [],
  nl2br: false,
  rel: null,
  tagName: "a",
  target: "_blank",
  truncate: 0,
  validate: true,
}

const DESCRIPTION_COLLAPSED_LINES = 5
const DESCRIPTION_EXPAND_THRESHOLD = 240

const renderDate = (date: Date, subTitle?: string) => {
  const dateDisplay = getDateDisplay(date, 7)
  return (
    <Stack key={`${date.toISOString()}${subTitle ? "-" + subTitle : ""}`} spacing={0.75} sx={{ mt: 2 }}>
      {subTitle && (
        <Typography variant="caption" sx={{ fontWeight: 700, color: "text.primary" }}>
          {subTitle}
        </Typography>
      )}
      <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", color: "text.secondary", fontSize: "0.75rem", alignItems: "center" }}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <Icon name="calendar" className="h-3 w-3 mr-1" />
          <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
        </Stack>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <Icon name="clock" className="h-3 w-3 mr-1" />
          <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
        </Stack>
        {dateDisplay.isWithin && (
          <Chip
            size="small"
            label={dateDisplay.relativeDisplay}
            sx={{ bgcolor: "success.light", color: "success.dark", fontSize: "0.75rem" }}
          />
        )}
      </Stack>
    </Stack>
  )
}

const Announcement = ({ ...announcement }: IAnnouncement) => {
  const [expanded, setExpanded] = useState(false)
  const shouldClampDescription = !!announcement.description && announcement.description.length > DESCRIPTION_EXPAND_THRESHOLD

  return (
    <Box>
      <Stack spacing={2}>
        <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            fontSize: "1.05rem",
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {announcement.title}
        </Typography>
        {announcement.date && !announcement.dates && renderDate(announcement.date)}
        {announcement.dates && announcement.dates.map((subDate) => renderDate(subDate.date, subDate.subTitle))}
        {announcement.description && (
          <Box sx={{ mt: 2 }}>
            <Linkify
              tagName="div"
              options={{
                ...options,
                render: ({ attributes, content }) => (
                  <Link {...attributes} href={attributes.href} target="_blank" rel="noreferrer" underline="hover">
                    {content}
                  </Link>
                ),
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  whiteSpace: "pre-wrap",
                  display: shouldClampDescription && !expanded ? "-webkit-box" : "block",
                  WebkitLineClamp: shouldClampDescription && !expanded ? DESCRIPTION_COLLAPSED_LINES : "unset",
                  WebkitBoxOrient: shouldClampDescription && !expanded ? "vertical" : "unset",
                  overflow: "hidden",
                }}
              >
                {announcement.description}
              </Typography>
            </Linkify>
            {shouldClampDescription && (
              <Button
                size="small"
                variant="text"
                onClick={() => setExpanded((value) => !value)}
                sx={{ mt: 1, px: 0, minWidth: 0, fontWeight: 700, alignSelf: "flex-start" }}
              >
                {expanded ? "Show less" : "Read more"}
              </Button>
            )}
          </Box>
        )}
        </Box>
      {announcement.location && (
        <>
          <Divider />
          <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ color: "text.secondary" }}>
            <Box sx={{ pt: 0.25 }}>
              <Icon name="location-marker" className="h-3 w-3 mr-1" />
            </Box>
            {announcement.location.link && (
              <PrimaryButton
                color="blue"
                type="link"
                link={{ url: announcement.location?.link, external: true }}
                sx={{ textAlign: "left", whiteSpace: "normal", justifyContent: "flex-start" }}
              >
                {announcement.location.address}
              </PrimaryButton>
            )}
            {!announcement.location.link && (
              <Typography variant="caption" sx={{ fontSize: "0.8rem", lineHeight: 1.5 }}>
                {announcement.location.address}
              </Typography>
            )}
          </Stack>
        </>
      )}
      <Box sx={{ pt: announcement.location ? 0 : 1, display: "flex", justifyContent: "flex-end" }}>
        {announcement.button && (
          <PrimaryButton size="sm" color="green" link={announcement.button.link} modal={announcement.button.modal}>
            {announcement.button.text}
          </PrimaryButton>
        )}
      </Box>
      </Stack>
    </Box>
  )
}

export default Announcement
