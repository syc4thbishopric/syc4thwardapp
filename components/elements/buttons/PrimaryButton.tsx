import { type ButtonProps, type SxProps, type Theme } from "@mui/material"
import { IColor, ILink, IModal } from "../../../shared/types"
import CalendlyButton from "./CalendlyButton"
import LinkButton from "./LinkButton"
import MenuButton from "./MenuButton"
import ModalButton from "./ModalButton"

export type IPrimaryButton = {
  children: React.ReactNode
  color?: IColor
  disabled?: boolean
  link?: ILink | ILink[]
  className?: string
  sx?: SxProps<Theme>
  type?: "dark" | "light" | "link" | "pass-thru"
  size?: "xs" | "sm" | "md" | "lg"
  modal?: IModal
}

const paletteMap: Record<IColor, { main: string; dark: string; light: string; contrastText: string }> = {
  primary: { main: "#4F46E5", dark: "#312E81", light: "#EEF2FF", contrastText: "#FFFFFF" },
  blue: { main: "#2563EB", dark: "#1D4ED8", light: "#DBEAFE", contrastText: "#FFFFFF" },
  red: { main: "#DC2626", dark: "#B91C1C", light: "#FEE2E2", contrastText: "#FFFFFF" },
  green: { main: "#16A34A", dark: "#15803D", light: "#DCFCE7", contrastText: "#FFFFFF" },
  gray: { main: "#6B7280", dark: "#374151", light: "#E5E7EB", contrastText: "#FFFFFF" },
}

const sizeMap = {
  xs: { fontSize: "0.75rem", px: 3, py: 0.75 },
  sm: { fontSize: "0.875rem", px: 3, py: 0.75 },
  md: { fontSize: "1rem", px: 4.5, py: 1.25 },
  lg: { fontSize: "1.125rem", px: 6, py: 1.5 },
}

const getInlineStyle = (buttonType: IPrimaryButton["type"], color: IColor): React.CSSProperties | undefined => {
  const palette = paletteMap[color]

  switch (buttonType) {
    case "light":
      return {
        backgroundColor: "#FFFFFF",
        color: palette.main,
        WebkitTextFillColor: palette.main,
      }
    case "link":
      return {
        color: palette.dark,
        WebkitTextFillColor: palette.dark,
      }
    case "pass-thru":
      return undefined
    case "dark":
    default:
      return {
        backgroundColor: palette.main,
        color: palette.contrastText,
        WebkitTextFillColor: palette.contrastText,
      }
  }
}

const getSx = (buttonType: IPrimaryButton["type"], color: IColor, size: IPrimaryButton["size"]): ButtonProps["sx"] => {
  const palette = paletteMap[color]
  const sizeStyles = sizeMap[size || "md"]

  const baseSx = {
    borderRadius: 3,
    fontWeight: 600,
    fontSize: sizeStyles.fontSize,
    px: sizeStyles.px,
    py: sizeStyles.py,
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    textDecoration: "none",
  }

  switch (buttonType) {
    case "light":
      return {
        ...baseSx,
        bgcolor: "common.white",
        color: palette.main,
        "&:visited": {
          color: palette.main,
        },
        "&:hover": {
          bgcolor: palette.light,
          color: palette.main,
        },
      }
    case "link":
      return {
        ...baseSx,
        px: 0,
        py: 0,
        minWidth: 0,
        bgcolor: "transparent",
        color: palette.dark,
        "&:visited": {
          color: palette.dark,
        },
        "&:hover": {
          bgcolor: "transparent",
          color: palette.main,
        },
      }
    case "pass-thru":
      return {}
    case "dark":
    default:
      return {
        ...baseSx,
        bgcolor: palette.main,
        color: palette.contrastText,
        "&:visited": {
          color: palette.contrastText,
        },
        "& .MuiButton-label": {
          color: palette.contrastText,
        },
        "&:hover": {
          bgcolor: palette.dark,
          color: palette.contrastText,
        },
        "&.MuiButtonBase-root": {
          color: palette.contrastText,
        },
        "& .MuiSvgIcon-root, & svg": {
          color: palette.contrastText,
        },
      }
  }
}

const PrimaryButton = ({
  children,
  color = "primary",
  link = { url: "", calendly: false },
  disabled = false,
  className = "",
  sx,
  type = "dark",
  size = "md",
  modal = undefined,
}: IPrimaryButton) => {
  const buttonProps: ButtonProps = {
    className,
    disabled,
    variant: type === "link" || type === "pass-thru" ? "text" : "contained",
    style: getInlineStyle(type, color),
    sx: Array.isArray(sx) ? [getSx(type, color, size), ...sx] : [getSx(type, color, size), sx],
  }

  if (modal) {
    return (
      <ModalButton buttonProps={buttonProps} disabled={disabled} modal={modal}>
        {children}
      </ModalButton>
    )
  } else if (Array.isArray(link)) {
    return (
      <MenuButton buttonProps={buttonProps} links={link}>
        {children}
      </MenuButton>
    )
  } else {
    return link.calendly ? (
      <CalendlyButton buttonProps={buttonProps} url={link.url} disabled={disabled}>
        {children}
      </CalendlyButton>
    ) : (
      <LinkButton buttonProps={buttonProps} url={link.url} external={!!link.external} disabled={disabled}>
        {children}
      </LinkButton>
    )
  }
}
export default PrimaryButton
