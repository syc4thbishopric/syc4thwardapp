import { Box, Chip, Divider, Stack, Typography } from "@mui/material"
import PrimaryButton from "../../../elements/buttons/PrimaryButton"
import { IModal, IModalEventData } from "../../../../shared/types"
import { getDateDisplay } from "../../../../shared/utils/date.util"

const ModalEvent = ({ data }: IModal) => {
  const { title, subtitle, image, button, date, duration, location, details } = data as IModalEventData
  const dateDisplay = getDateDisplay(date, 7, duration)

  const relativeChipColor = dateDisplay.isOver ? "error" : dateDisplay.isWithin ? "success" : "primary"

  return (
    <Box sx={{ bgcolor: "background.paper", overflow: "hidden" }}>
      {image && (
        <Box
          component="img"
          src={image.src}
          alt={image.alt || ""}
          sx={{ display: "block", width: "100%", height: { xs: 180, lg: 240 }, objectFit: "cover", objectPosition: "center" }}
        />
      )}
      <Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{ px: { xs: 3, sm: 4 }, py: { xs: 3, sm: 4 } }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography id="modal-event-title" variant="h4" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, fontWeight: 700, color: "text.primary" }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography sx={{ mt: 1, maxWidth: 560, color: "text.secondary" }}>
                {subtitle}
              </Typography>
            )}
          </Box>
          {button?.link && (
            <PrimaryButton link={button.link} color={button.color} size="sm" sx={{ whiteSpace: "nowrap" }}>
              {button.text}
            </PrimaryButton>
          )}
        </Stack>
        <Divider />
        <Stack divider={<Divider flexItem />} sx={{ px: { xs: 3, sm: 4 }, py: 1 }}>
          {date && (
            <>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.75, sm: 3 }} sx={{ py: 2.5 }}>
                <Typography sx={{ width: { sm: 140 }, flexShrink: 0, fontWeight: 600, color: "text.secondary" }}>Date</Typography>
                <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
                  <Typography sx={{ fontWeight: 600, color: "text.primary" }}>{dateDisplay.dateFullDisplay}</Typography>
                  <Chip
                    size="small"
                    label={dateDisplay.relativeDisplay}
                    color={relativeChipColor}
                    sx={{
                      bgcolor: dateDisplay.isOver ? "error.light" : dateDisplay.isWithin ? "success.light" : "primary.light",
                      color: dateDisplay.isOver ? "error.dark" : dateDisplay.isWithin ? "success.dark" : "primary.dark",
                      fontWeight: 600,
                    }}
                  />
                </Stack>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.75, sm: 3 }} sx={{ py: 2.5 }}>
                <Typography sx={{ width: { sm: 140 }, flexShrink: 0, fontWeight: 600, color: "text.secondary" }}>Time</Typography>
                <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                  {dateDisplay.timeRangeDisplay || dateDisplay.timeDisplay}
                </Typography>
              </Stack>
            </>
          )}
          {location && (
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.75, sm: 3 }} sx={{ py: 2.5 }}>
              <Typography sx={{ width: { sm: 140 }, flexShrink: 0, fontWeight: 600, color: "text.secondary" }}>Location</Typography>
              <Typography sx={{ fontWeight: 600, color: "text.primary", whiteSpace: "pre-wrap" }}>{location}</Typography>
            </Stack>
          )}
          {details && (
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.75, sm: 3 }} sx={{ py: 2.5 }}>
              <Typography sx={{ width: { sm: 140 }, flexShrink: 0, fontWeight: 600, color: "text.secondary" }}>Details</Typography>
              <Typography sx={{ color: "text.primary", whiteSpace: "pre-wrap" }}>{details}</Typography>
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default ModalEvent
