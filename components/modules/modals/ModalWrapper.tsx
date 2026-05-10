import { Dispatch, SetStateAction, useEffect } from "react"
import { Box, Dialog, DialogContent, IconButton } from "@mui/material"
import Icon from "../../elements/icons/Icon"
import { hideBodyScroll } from "../../../shared/utils/document.util"
import React from "react"

export type IModalWrapper = {
  id: string
  children: React.ReactNode
  closeOnClickOutside: boolean
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  className?: string
}

const ModalWrapper = ({ id, children, closeOnClickOutside, showModal, setShowModal, className = "" }: IModalWrapper) => {
  const toggleModal = () => {
    hideBodyScroll(!showModal)
    setShowModal(!showModal)
  }

  useEffect(() => {
    hideBodyScroll(showModal)

    return () => hideBodyScroll(false)
  }, [showModal])

  return (
    <Dialog
      open={showModal}
      onClose={closeOnClickOutside ? toggleModal : undefined}
      maxWidth={false}
      fullWidth
      aria-labelledby={id}
      slotProps={{
        backdrop: {
          sx: {
            bgcolor: "rgba(55, 65, 81, 0.72)",
          },
        },
        paper: {
          sx: {
            width: "min(100%, 768px)",
            mt: { xs: 6, md: 10, lg: 12 },
            mb: 8,
            borderRadius: 3,
            overflow: "visible",
            boxShadow: 24,
            backgroundImage: "none",
          },
        },
      }}
    >
      <IconButton
        aria-label="Close modal"
        onClick={toggleModal}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
          color: "common.white",
          bgcolor: "rgba(15, 23, 42, 0.4)",
          "&:hover": {
            bgcolor: "rgba(15, 23, 42, 0.65)",
          },
        }}
      >
        <Icon name="close" className="h-8 w-8" />
      </IconButton>
      <DialogContent sx={{ p: 0 }}>
        <Box id={id} className={className}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child as React.ReactElement<any>, { toggleModal })
          })}
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ModalWrapper
