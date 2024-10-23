import { verifyDisabledBtnUpload } from "../helper.js"
import uploadPhotoPreview from "./../context/upload-photo-preview.js"

export const MAX_SIZE_MB_UPLOAD_PHOTO = 4

function onLoadPhotoUpload() {
  this.removeEventListener("load", onLoadPhotoUpload)
  uploadPhotoPreview(this.result)
}

export default function onDropPhoto(event) {

  // for the drag and drop events
  event.stopPropagation()
  event.preventDefault()

  document.querySelector(".drop-zone-photo").classList.remove("dragover")

  // data can provide from input file or from drag and drop:
  const photo =
    // try get data from drag and drop
    event?.dataTransfer?.files[0] ||
    // if not exists into drag and drop event,
    // get data from input file
    this.file || this.files[0];

  const sizeMb = parseFloat(((photo?.size / 1_048_576)).toFixed(2))
  
  if(sizeMb > MAX_SIZE_MB_UPLOAD_PHOTO) {
    console.warn("file to large: ", sizeMb)
    return;
  }

  if(!/^image\/(png|jpe?g)$/i.test(photo.type.trim())) {
    console.warn("File is not a photo/image")
    return;
  }

  const freader = new FileReader()

  onLoadPhotoUpload.bind(freader)

  freader.addEventListener("load", onLoadPhotoUpload)

  freader.readAsDataURL(photo)

  // verify disabled button submit
  verifyDisabledBtnUpload()
}