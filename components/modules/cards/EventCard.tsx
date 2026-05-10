import { Box, Card, Chip, Stack, Typography } from "@mui/material"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import Icon from "../../elements/icons/Icon"
import { getDateDisplay } from "../../../shared/utils/date.util"
import { IButton, IImage } from "../../../shared/types"

export type IEventCard = {
  title: string
  date?: Date
  image?: IImage
  button?: IButton
  hidden?: boolean
}

const EventCard = ({ ...card }: IEventCard) => {
  const dateDisplay = getDateDisplay(card.date, 7)
  return (
    <Card sx={{ display: "flex", overflow: "hidden", boxShadow: 6 }}>
      <Box
        component="img"
        src={card.image?.src}
        alt={card.image?.alt || card.title}
        sx={{ width: 96, objectFit: "cover", flexShrink: 0 }}
      />
      <PrimaryButton
        type="pass-thru"
        link={card.button!.link!}
        modal={card.button.modal}
        sx={{ width: "100%", justifyContent: "space-between", px: 0, py: 0, color: "inherit" }}
      >
        <Stack direction="row" spacing={2} sx={{ width: "100%", px: 3, py: 2.5, alignItems: "center" }}>
          <Box sx={{ flex: 1, minWidth: 0, textAlign: "left" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, pb: 0.5 }} noWrap title={card.title}>
              {card.title}
            </Typography>
            {card.date && (
              <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", color: "text.secondary", fontSize: "0.875rem", alignItems: "center" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon name="calendar" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                  <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon name="clock" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                  <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
                  <Chip
                    size="small"
                    label={dateDisplay.relativeDisplay}
                    color={dateDisplay.isOver ? "error" : dateDisplay.isWithin ? "success" : "primary"}
                    sx={{
                      ml: 1,
                      bgcolor: dateDisplay.isOver ? "error.light" : dateDisplay.isWithin ? "success.light" : "primary.light",
                      color: dateDisplay.isOver ? "error.dark" : dateDisplay.isWithin ? "success.dark" : "primary.dark",
                    }}
                  >
                  </Chip>
                </Stack>
              </Stack>
            )}
          </Box>
          <Box sx={{ color: "text.secondary", display: "inline-flex", alignItems: "center" }}>
            <Icon name="chevron-right" className="w-5 h-5" />
          </Box>
        </Stack>
      </PrimaryButton>
    </Card>
  )
}

export default EventCard
