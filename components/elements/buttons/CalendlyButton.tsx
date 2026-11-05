import { Button } from "@mui/material"
import { useState } from "react"
import CalendlyPopup from "./CalendlyPopup"

type CalendlyButtonProps = {
  children: React.ReactNode
  buttonProps: any
  url: string
  disabled?: boolean
}

const CalendlyButton = ({ children, buttonProps, url, disabled }: CalendlyButtonProps) => {
  const [popupUrl, setPopupUrl] = useState<string | null>(null)

  return (
    <>
      <Button {...buttonProps} disabled={disabled} onClick={() => setPopupUrl(url)}>
        {children}
      </Button>
      <CalendlyPopup url={popupUrl} onClose={() => setPopupUrl(null)} />
    </>
  )
}
export default CalendlyButton
