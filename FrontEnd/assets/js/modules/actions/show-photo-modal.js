export default function onShowPhotoModal() {

  const galleryContent = document.querySelector(".modal .gallery-content")
  const addPhotoContent = document.querySelector(".modal .add-photo-content")
  const actionBack = document.querySelector(".modal .back-action")

  galleryContent.classList.add("hide")
  addPhotoContent.classList.remove("hide")
  actionBack.classList.remove("hide-alt")
}