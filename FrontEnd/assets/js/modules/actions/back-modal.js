import uploadPhotoPreview from "../context/upload-photo-preview.js"
import { ACTIONS_LOGGED_USER } from "./../helper.js"

export default function onBackModal() {
  const galleryContent = document.querySelector(".modal .gallery-content")
  const addPhotoContent = document.querySelector(".modal .add-photo-content")
  const actionBack = document.querySelector(".modal .back-action")

  uploadPhotoPreview()
  ACTIONS_LOGGED_USER.titlePhoto.value = ""
  galleryContent.classList.remove("hide")
  addPhotoContent.classList.add("hide")
  actionBack.classList.add("hide-alt")
}