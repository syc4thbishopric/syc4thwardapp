import { Box, Button, Card, CardContent, Divider, Link, Stack, Typography } from "@mui/material"
import { useState } from "react"
import Linkify from "linkify-react"
import { IButton, IImage } from "../../../shared/types"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

export type IBannerCard = {
  title: string
  subtitle: string
  paragraph?: string
  button?: IButton
  image?: IImage
  hidden?: boolean
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

const BannerCard = ({ ...card }: IBannerCard) => {
  const [expanded, setExpanded] = useState(false)
  const imageUrl =
    card.image?.alt === "image-view"
      ? card.image.src
      : !Array.isArray(card.button?.link) && card.button?.link?.label?.text === "image-view"
        ? card.button.link.url
        : null
  const buttonLink =
    !imageUrl && !Array.isArray(card.button?.link) && card.button?.link?.label?.text !== "image-view"
      ? card.button.link
      : null
  const shouldClampDescription = !!card.paragraph && card.paragraph.length > 240

  return (
    <Card sx={{ boxShadow: 6 }}>
      <CardContent sx={{ p: { xs: 3, lg: 4 }, bgcolor: "background.paper" }}>
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
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "primary.main", fontWeight: 700 }}>
              {card.subtitle}
            </Typography>
            {card.paragraph && (
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
                      WebkitLineClamp: shouldClampDescription && !expanded ? 5 : "unset",
                      WebkitBoxOrient: shouldClampDescription && !expanded ? "vertical" : "unset",
                      overflow: "hidden",
                    }}
                  >
                    {card.paragraph}
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
          {imageUrl && (
            <>
              <Divider />
              <Box
                component="img"
                src={imageUrl}
                alt={card.image?.alt && card.image.alt !== "image-view" ? card.image.alt : card.title}
                sx={{ width: "100%", borderRadius: 3, objectFit: "cover" }}
              />
            </>
          )}
          {card.button?.text && buttonLink && (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <PrimaryButton size="sm" type="dark" color="primary" link={buttonLink}>
                {card.button.text}
              </PrimaryButton>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default BannerCard
