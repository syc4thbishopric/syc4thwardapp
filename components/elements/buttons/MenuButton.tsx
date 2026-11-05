import Link from "next/link"
import { Button, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import Icon from "../icons/Icon"
import CalendlyPopup from "./CalendlyPopup"
import { ILink } from "../../../shared/types"

type MenuButtonProps = {
  children: React.ReactNode
  buttonProps: any
  links: ILink[]
}

const MenuButton = ({ children, buttonProps, links }: MenuButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        {...buttonProps}
        onClick={handleOpen}
        endIcon={<Icon name="chevron-down" className="h-5 w-5" />}
        sx={[
          ...(Array.isArray(buttonProps?.sx) ? buttonProps.sx : [buttonProps?.sx]),
          {
            color: buttonProps?.variant === "contained" ? "inherit" : undefined,
            WebkitTextFillColor: buttonProps?.variant === "contained" ? "inherit" : undefined,
            "&:visited": {
              color: buttonProps?.variant === "contained" ? "inherit" : undefined,
              WebkitTextFillColor: buttonProps?.variant === "contained" ? "inherit" : undefined,
            },
            "&:hover": {
              color: buttonProps?.variant === "contained" ? "inherit" : undefined,
              WebkitTextFillColor: buttonProps?.variant === "contained" ? "inherit" : undefined,
            },
            "& .MuiButton-icon": {
              color: buttonProps?.variant === "contained" ? "inherit" : undefined,
            },
            "& .MuiButton-endIcon": {
              color: buttonProps?.variant === "contained" ? "inherit" : undefined,
            },
            "& .MuiButton-endIcon svg": {
              color: buttonProps?.variant === "contained" ? "inherit" : undefined,
              fill: "currentColor",
            },
          },
        ]}
      >
        {children}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {links.map((link: ILink) =>
          link.calendly ? (
            <CalendlyMenuItem
              key={link.label?.text || link.url}
              label={link.label}
              url={link.url}
              onClose={handleClose}
              onSelect={setCalendlyUrl}
            />
          ) : (
            <LinkMenuItem
              key={link.label?.text || link.url}
              label={link.label}
              url={link.url}
              external={!!link.external}
              onClose={handleClose}
            />
          )
        )}
      </Menu>
      <CalendlyPopup url={calendlyUrl} onClose={() => setCalendlyUrl(null)} />
    </>
  )
}
export default MenuButton

const CalendlyMenuItem = ({ label, url, onClose, onSelect }) => {
  return (
    <MenuItem
      onClick={() => {
        onClose()
        onSelect(url)
      }}
    >
      {label.text}
    </MenuItem>
  )
}
const LinkMenuItem = ({ label, url, external, onClose }) => {
  return (
    <MenuItem
      component={external ? "a" : Link}
      href={url}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={onClose}
    >
      {label.text}
    </MenuItem>
  )
}
