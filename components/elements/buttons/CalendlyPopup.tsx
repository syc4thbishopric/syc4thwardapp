import { PopupModal } from "react-calendly"

type CalendlyPopupProps = {
  url: string | null
  onClose: () => void
}

// Only rendered after a click, so `document` is always available here
const CalendlyPopup = ({ url, onClose }: CalendlyPopupProps) => {
  if (!url) return null

  return <PopupModal url={url} open onModalClose={onClose} rootElement={document.getElementById("__next") as HTMLElement} />
}
export default CalendlyPopup
