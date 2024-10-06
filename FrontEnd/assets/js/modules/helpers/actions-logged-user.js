import onCloseModal from "./../actions/close-modal.js"
import onUpdate from "./../actions/update.js"
import onLogout from "./../actions/logout.js"

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

  removes() {
    this.authLink.removeEventListener("click", onLogout)
    this.btnUpdateProject.removeEventListener("click", onUpdate)
    this.modal.removeEventListener("click", onCloseModal)
  },
  adds() {
    this.authLink.addEventListener("click", onLogout)
    this.btnUpdateProject.addEventListener("click", onUpdate)
    this.modal.addEventListener("click",  onCloseModal)
  }
}

export {ACTIONS_LOGGED_USER}