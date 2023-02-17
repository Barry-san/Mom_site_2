export function handleMenu() {
  document.querySelector(".menu").classList.contains("hidden")
    ? handleOpen()
    : handleClose();
}

export function handleClose() {
  document.querySelector(".menu").classList.remove("flex");
  document.querySelector(".menu").classList.add("hidden");
}

export function handleOpen() {
  document.querySelector(".menu").classList.add("flex");
  document.querySelector(".menu").classList.remove("hidden");
}
