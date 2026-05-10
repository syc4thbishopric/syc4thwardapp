import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material"
import { IButton, IImage } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

export type IContactCard = {
  title: string
  subtitle: string
  images?: IImage[]
  button?: IButton
  hidden?: boolean
  soft?: boolean
}

const ContactCard = ({ ...card }: IContactCard) => {
  const buttonColor = card.button?.color ? card.button?.color : "primary"
  return (
    <Card sx={{ height: "100%", boxShadow: 6 }}>
      <CardContent sx={{ p: 4, height: "100%" }}>
        <Stack alignItems="center" justifyContent="space-between" sx={{ height: "100%", textAlign: "center" }}>
        {card.images && (
          <Box sx={{ display: "flex", gap: 0, pb: 3 }}>
            {card.images.map((image: IImage) => (
              <Avatar
                key={image.src}
                src={image.src}
                alt={image.alt || ""}
                sx={{
                  height: image.height,
                  width: image.width,
                  ml: image.src === card.images?.[0]?.src ? 0 : -2,
                  border: "2px solid",
                  borderColor: card.soft ? "grey.400" : "primary.main",
                }}
              />
            ))}
          </Box>
        )}
        <Box>
          <Typography variant="body2" sx={{ color: card.soft ? "text.secondary" : "primary.main", fontWeight: 700 }}>
            {card.subtitle}
          </Typography>
          <Typography variant={card.soft ? "h5" : "h4"} sx={{ fontWeight: 700 }}>
            {card.title}
          </Typography>
        </Box>
      {card.button && (
        <Box sx={{ pt: 3 }}>
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
        </Box>
      )}
      </Stack>
      </CardContent>
    </Card>
  )
}

export default ContactCard
