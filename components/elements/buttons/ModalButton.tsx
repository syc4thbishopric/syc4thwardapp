import { useState } from "react"
import { Button } from "@mui/material"
import { hideBodyScroll } from "../../../shared/utils/document.util"
import ModalWrapper from "../../modules/modals/ModalWrapper"
import ModalEvent from "../../modules/modals/ModalEvent/ModalEvent"
// import ModalEventAction from "../../modules/modals/ModalEvent/ModalEventAction/ModalEventAction"

type ModalButtonProps = {
  children: React.ReactNode
  buttonProps: any
  disabled?: boolean
  modal: any
}

const ModalButton = ({ children, buttonProps, disabled, modal }: ModalButtonProps) => {
  const [showModal, setShowModal] = useState(false)
  const Modal = () => {
    const wrapperProps = { id: modal.title, showModal: showModal, setShowModal: setShowModal }
    switch (modal.type) {
      case "event":
        return (
          <ModalWrapper {...wrapperProps} closeOnClickOutside={true}>
            <ModalEvent {...modal} />
          </ModalWrapper>
        )
      // case "event-action":
      //   return (
      //     <ModalWrapper {...wrapperProps} closeOnClickOutside={false} className="md:mt-10 w-full sm:max-w-xl md:max-w-3xl xl:max-w-6xl">
      //       <ModalEventAction {...modal} />
      //     </ModalWrapper>
      //   )
    }
  }
  const toggleModal = () => {
    hideBodyScroll(!showModal)
    setShowModal(!showModal)
  }

  return (
    <>
      <Button {...buttonProps} disabled={disabled} onClick={toggleModal}>
        {children}
      </Button>
      <Modal />
    </>
  )
}
export default ModalButton
