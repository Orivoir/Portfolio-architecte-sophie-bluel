import {
  ACTIONS_LOGGED_USER,
  ENDPOINT,
  USER,WORKS_CACHE,
  WORKS_KEYNAME
} from "./helpers/index.js"

const ATTRIBUTE_CATEGORY_ID = "data-category-id"
const ATTRIBUTE_PROJECT_ID = "data-project-id"

const verifyDisabledBtnUpload = () => {
  const inputPhoto = document.querySelector(".modal input#photo")
  const titlePhoto = document.querySelector(".modal input#title")
  const btnUpload = document.querySelector(".modal form button.btn-upload")

  const isEmptyPhoto = !(inputPhoto.file || inputPhoto.files[0])
  const isEmptyTitle = !(titlePhoto.value.trim().length)

  if(isEmptyPhoto || isEmptyTitle) {
    btnUpload.setAttribute("disabled", true)
  } else {
    btnUpload.removeAttribute("disabled")
  }
}

export {
  ATTRIBUTE_CATEGORY_ID,
  ATTRIBUTE_PROJECT_ID,
  WORKS_KEYNAME,
  ACTIONS_LOGGED_USER,
  ENDPOINT,
  USER,
  WORKS_CACHE,
  verifyDisabledBtnUpload
}
