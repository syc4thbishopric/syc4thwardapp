export const hideBodyScroll = (hide: boolean) => {
  if (typeof document !== `undefined`) {
    if (hide) {
      document.body.classList.add("is-scrollLocked")
    } else {
      document.body.classList.remove("is-scrollLocked")
    }
  }
}
