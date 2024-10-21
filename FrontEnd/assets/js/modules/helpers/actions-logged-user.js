import onCloseModal from "./../actions/close-modal.js"
import onUpdate from "./../actions/update.js"
import onLogout from "./../actions/logout.js"
import onShowPhotoModal from "../actions/show-photo-modal.js"
import onBackModal from "../actions/back-modal.js"
import onDropPhoto from "../actions/drop-photo.js"
import onBlurTitlePhoto from "../actions/blur-title-photo.js"
import onUploadPhoto from "../actions/upload-photo.js"
import onDragEnter from "../actions/drag-enter.js"
import onDragLeave from "../actions/drag-leave.js"
import onDragOver from "../actions/drag-over.js"

/**
 * this object save listeners to attach/removes for logged/unlogged user
 */
const ACTIONS_LOGGED_USER = {

  get authLink() {
    return document.querySelector("#authentication-link")
  },

  get btnUpdateProject() {
    return document.querySelector(".update-project-content button")
  },

  get modal() {
    return document.querySelector(".modal")
  },

  get btnAddPhoto() {
    return document.querySelector(".modal .container-add-photo button")
  },

  get btnBack() {
    return document.querySelector(".modal .actions .back-action button")
  },

  get inputPhoto () {
    return document.querySelector(".modal input#photo")
  },

  get titlePhoto() {
    return document.querySelector(".modal input#title")
  },
  
  get formUpload() {
    return document.querySelector(".modal form#form-upload-photo")
  },

  get dropZone() {

    return document.querySelector(".modal .drop-zone-photo")
  },

  removes() {
    this.authLink.removeEventListener("click", onLogout)
    this.btnUpdateProject.removeEventListener("click", onUpdate)
    this.modal.removeEventListener("click", onCloseModal)
    this.btnAddPhoto.removeEventListener("click", onShowPhotoModal)
    this.btnBack.removeEventListener("click", onBackModal)
    this.inputPhoto.removeEventListener("change", onDropPhoto)
    this.titlePhoto.removeEventListener("blur", onBlurTitlePhoto)
    this.formUpload.removeEventListener("submit", onUploadPhoto)

    // Drag and Drop events
    this.dropZone.removeEventListener("drop", onDropPhoto)
    this.dropZone.removeEventListener("dragenter", onDragEnter)
    this.dropZone.removeEventListener("dragleave", onDragLeave)
    this.dropZone.removeEventListener("dragover", onDragOver)
  },
  adds() {
    this.authLink.addEventListener("click", onLogout)
    this.btnUpdateProject.addEventListener("click", onUpdate)
    this.modal.addEventListener("click",  onCloseModal)
    this.btnAddPhoto.addEventListener("click", onShowPhotoModal)
    this.btnBack.addEventListener("click", onBackModal)
    this.inputPhoto.addEventListener("change", onDropPhoto)
    this.titlePhoto.addEventListener("blur", onBlurTitlePhoto)
    this.formUpload.addEventListener("submit", onUploadPhoto)
    
    // Drag and drop event
    this.dropZone.addEventListener("drop", onDropPhoto)
    this.dropZone.addEventListener("dragenter", onDragEnter)
    this.dropZone.addEventListener("dragleave", onDragLeave)
    this.dropZone.addEventListener("dragover", onDragOver)
  },

  autoCloseModal() {

    this.btnBack.click()
    this.modal.click()
  }
}

export {ACTIONS_LOGGED_USER}