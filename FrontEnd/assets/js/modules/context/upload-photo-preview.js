export default function uploadPhotoPreview(urlCustomPhoto) {

  const containerPhotoPreview = document.querySelector(".photo-preview")
  const photoPreview = document.querySelector(".photo-preview img")
  const modalDropZone = document.querySelector(".modal .drop-zone-photo")
  const addPhotoTxt = document.querySelector(".add-photo-txt")
  const formatPhotoTxt = document.querySelector(".format-photo-txt")
  const dropZone = document.querySelector(".drop-zone-photo")

  if(typeof urlCustomPhoto === "string" && !!urlCustomPhoto.trim().length) {

    photoPreview.src = urlCustomPhoto

    containerPhotoPreview.classList.add("custom")
    modalDropZone.classList.add("custom")
  
    addPhotoTxt.classList.add("hide")
    formatPhotoTxt.classList.add("hide")

  } else {
    // back to default state

    photoPreview.src = photoPreview.getAttribute("data-placeholder-uri")

    containerPhotoPreview.classList.remove("custom")
    modalDropZone.classList.remove("custom")
    
    addPhotoTxt.classList.remove("hide")
    formatPhotoTxt.classList.remove("hide")

    dropZone.classList.remove("error")
  }
}