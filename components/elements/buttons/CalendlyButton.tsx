import { Button } from "@mui/material"
import { openPopupWidget } from "react-calendly"
import { Props } from "react-calendly/typings/components/PopupWidget/PopupWidget"

type CalendlyButtonProps = {
  children: React.ReactNode
  buttonProps: any
  url: string
  disabled?: boolean
}

const CalendlyButton = ({ children, buttonProps, url, disabled }: CalendlyButtonProps) => {
  return (
    <Button {...buttonProps} disabled={disabled} onClick={() => openPopupWidget({ url, pageSettings: {} } as Props)}>
      {children}
    </Button>
  )
}
export default CalendlyButton
