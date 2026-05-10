import Link from "next/link"
import { Button } from "@mui/material"

type LinkButtonProps = {
  children: React.ReactNode
  buttonProps: any
  url: string
  external?: boolean
  disabled?: boolean
}

const LinkButton = ({ children, buttonProps, url, external, disabled }: LinkButtonProps) => {
  if (disabled) {
    return <Button {...buttonProps} disabled>{children}</Button>
  }

  return external ? (
    <Button {...buttonProps} component="a" href={url} target="_blank" rel="noreferrer">
      {children}
    </Button>
  ) : (
    <Button {...buttonProps} component={Link} href={url}>
      {children}
    </Button>
  )
}
export default LinkButton
