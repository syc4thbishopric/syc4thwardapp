import { Box, Card, CardMedia, Container, Stack, Typography } from "@mui/material"
import { IButton, IImage } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

export type IHeroCard = {
  title: string
  subtitle?: string
  paragraph?: string
  image: IImage
  button?: IButton
  type: "light" | "dark"
}

const HeroCard = ({ ...card }: IHeroCard) => {
  const buttonColor = card.button?.color ? card.button.color : "primary"
  const dark = card.type === "dark"

  return (
    <Card
      sx={{
        overflow: "hidden",
        bgcolor: dark ? "grey.900" : "background.paper",
        color: dark ? "common.white" : "text.primary",
        boxShadow: 8,
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
        <CardMedia
          component="img"
          image={card.image.src}
          alt={card.image.alt || card.title}
          sx={{ minHeight: { xs: 224, sm: 288, md: "100%" }, objectFit: "cover" }}
        />
        <Container maxWidth={false} sx={{ py: { xs: 4, md: 6, lg: 8 }, px: { xs: 3, sm: 4, lg: 6 } }}>
          <Stack spacing={2} justifyContent="center" sx={{ height: "100%", textAlign: { xs: "center", sm: "left" } }}>
            {card.subtitle && (
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: dark ? "primary.light" : "primary.main" }}
              >
                {card.subtitle}
              </Typography>
            )}
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "2rem", sm: "2.5rem" } }}>
              {card.title}
            </Typography>
          {card.paragraph && (
            <Typography sx={{ fontSize: "1.125rem", color: dark ? "grey.300" : "text.secondary" }}>
              {card.paragraph}
            </Typography>
          )}
          {card.button && (
            <PrimaryButton
              type={dark ? "light" : "dark"}
              color={buttonColor}
              link={card.button.link!}
              size="lg"
              disabled={!!card.button.disabled}
              sx={{ alignSelf: { xs: "center", sm: "flex-start" }, mt: 1 }}
            >
              {card.button.text}
            </PrimaryButton>
          )}
          </Stack>
        </Container>
      </Box>
    </Card>
  )
}

export default HeroCard
