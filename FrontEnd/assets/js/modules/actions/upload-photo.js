import { API } from "../api.js"

export default function onUploadPhoto(event) {
  
  event.preventDefault()
 
  const formUpload = document.querySelector(".modal form#form-upload-photo")
 
  const elements = formUpload.elements

  const file = (elements[0].file || elements[0].files[0])
  const title = elements[1].value.trim()
  const categoryId = parseInt(elements[2].value)
 
  API.upload({
    file,
    title,
    categoryId
  })
  .then(data => {

    // Upgrade UI with response

    if(data.id) {

      console.log("work created: ", data)

    } else {

      console.warn("upload failed with: ", data)
    }
  })
}