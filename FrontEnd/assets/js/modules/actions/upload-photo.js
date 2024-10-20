import { API } from "../api.js"
import {ACTIONS_LOGGED_USER} from "./../helper.js"
import uploadPhotoPreview from "../context/upload-photo-preview.js"
import implementProjects from "../implement/implement-projects.js"
import implementThumbnailProjects from "../implement/implement-thumbnail-project.js"

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
      
      formUpload.reset()

      uploadPhotoPreview()

      ACTIONS_LOGGED_USER.autoCloseModal()

      implementProjects()
      .then(() => {
        console.log("UI Project upgraded")
      })
      implementThumbnailProjects()
      .then(() => {
        console.log("UI thumnails projects upgraded")
      })

    } else {

      console.warn("upload failed with: ", data)
    }
  })
}