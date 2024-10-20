import uploadPhotoPreview from "../context/upload-photo-preview.js"

export default function onCloseModal(e) {
  const modal = document.querySelector(".modal")
  const btnCloseModal = document.querySelector(".modal .actions .close-action button")

  if(e.target === modal || e.target === btnCloseModal || e.target === btnCloseModal.querySelector('span')) {
    
    uploadPhotoPreview()
    modal.classList.add("hide")

  }
}