import { Card, CardContent, Stack, Typography } from "@mui/material"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import { IButton } from "../../../shared/types"

export type IMiniCard = {
  title: string
  subtitle: string
  paragraph?: string
  button?: IButton
  hidden?: boolean
}

const MiniCard = ({ ...card }: IMiniCard) => {
  const buttonColor = card.button && card.button.color ? card.button.color : "primary"
  return (
    <Card sx={{ height: "100%", boxShadow: 6 }}>
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Stack spacing={1.5} alignItems="center">
          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 700 }}>
            {card.subtitle}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {card.title}
          </Typography>
          {card.paragraph && <Typography color="text.secondary">{card.paragraph}</Typography>}
        </Stack>
      </CardContent>
      {card.button && (
        <Stack sx={{ px: 4, pb: 4 }} alignItems="center">
          <PrimaryButton
            type="dark"
            color={buttonColor}
            link={card.button.link}
            sx={{
              bgcolor: buttonColor === "green" ? "#16A34A" : buttonColor === "blue" ? "#2563EB" : buttonColor === "red" ? "#DC2626" : buttonColor === "gray" ? "#6B7280" : "#4F46E5",
              color: "common.white",
              textDecoration: "none",
              "&, & .MuiButtonBase-root, & .MuiTypography-root, & span, & svg": {
                color: "#fff !important",
              },
              "&:visited": {
                color: "common.white",
              },
              "&:hover": {
                bgcolor: buttonColor === "green" ? "#15803D" : buttonColor === "blue" ? "#1D4ED8" : buttonColor === "red" ? "#B91C1C" : buttonColor === "gray" ? "#374151" : "#312E81",
                color: "common.white",
              },
            }}
          >
            {card.button.text}
          </PrimaryButton>
        </Stack>
      )}
    </Card>
  )
}

export default MiniCard
