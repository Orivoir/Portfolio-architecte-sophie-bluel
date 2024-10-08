export const MAX_SIZE_MB_UPLOAD_PHOTO = 4

function onLoadPhotoUpload() {
  this.removeEventListener("load", onLoadPhotoUpload)

  document.querySelector(".photo-preview img").src = this.result
}

export default function onDropPhoto() {

  const photo = this.file || this.files[0]

  const sizeMb = parseFloat(((photo.size / 1_048_576)).toFixed(2))
  
  if(sizeMb > MAX_SIZE_MB_UPLOAD_PHOTO) {
    console.warn("Photo to big")
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
}