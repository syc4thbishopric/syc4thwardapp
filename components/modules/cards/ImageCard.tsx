import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import { IButton, IImage } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

export type IImageCard = {
  title: string
  subtitle: string
  paragraph?: string
  image: IImage
  button?: IButton
  hidden?: boolean
  scale?: boolean
}

const ImageCard = ({ ...card }: IImageCard) => {
  const buttonColor = card.button && card.button.color ? card.button.color : "primary"
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%", boxShadow: 6 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: card.scale ? "4 / 5" : "16 / 10",
          bgcolor: card.scale ? "grey.100" : "transparent",
          overflow: "hidden",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={card.image.src}
          alt={card.image.alt || card.title}
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: card.scale ? "contain" : "cover",
            objectPosition: card.scale ? "center" : "top",
            p: card.scale ? 2 : 0,
          }}
        />
      </Box>
      <CardContent sx={{ p: 3, display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 700 }}>
            {card.subtitle}
          </Typography>
          <Stack spacing={1.5} sx={{ mt: 1.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary" }}>
              {card.title}
            </Typography>
            {card.paragraph && (
              <Typography color="text.secondary" sx={{ whiteSpace: "pre-wrap" }}>
                {card.paragraph}
              </Typography>
            )}
          </Stack>
        </Box>
        {card.button && (
          <Box sx={{ pt: 3, textAlign: { xs: "center", md: "left" } }}>
            <PrimaryButton type="dark" color={buttonColor} link={card.button.link}>
              {card.button.text}
            </PrimaryButton>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default ImageCard
