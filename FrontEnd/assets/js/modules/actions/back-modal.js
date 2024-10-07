export default function onBackModal() {
  const galleryContent = document.querySelector(".modal .gallery-content")
  const addPhotoContent = document.querySelector(".modal .add-photo-content")
  const actionBack = document.querySelector(".modal .back-action")

  galleryContent.classList.remove("hide")
  addPhotoContent.classList.add("hide")
  actionBack.classList.add("hide-alt")
}