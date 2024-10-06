import onCloseModal from "./actions/close-modal.js"
import onUpdate from "./actions/update.js"
import onLogout from "./actions/logout.js"

/**
 * this object define (static) base url and endpoint of server API
 * Assume a developement environnement
 * Assume static server port as "5678"
 * Should update constant value at another environement, finals endpoints are computed (for each call) with constant value
 * you should never need update finals endpoints.    
 */
const ENDPOINT = {
  PROTOCOL: "http",
  HOSTNAME: "localhost",
  PORT: "5678",
  PREFIX: "/api",

  get baseUrl() {

    const url = new URL(document.location.toString());

    url.hostname = this.HOSTNAME
    url.port = this.PORT
    url.protocol = this.protocol
    url.pathname = this.PREFIX

    return url.toString()
  },

  get works() {
    const endpoint = "/works"

    const baseUrl = new URL(this.baseUrl)

    baseUrl.pathname += endpoint
    
    return baseUrl.toString()

  },

  get categories() {
    const endpoint = "/categories"

    const baseUrl = new URL(this.baseUrl)

    baseUrl.pathname += endpoint

    return baseUrl.toString()
  },

  get login() {

    const endpoint = "/users/login"

    const baseUrl = new URL(this.baseUrl)

    baseUrl.pathname += endpoint

    return baseUrl.toString()
  }
}

/**
 * this object define user state and expose logout action
 * Assume a authentication by token stored into sessionStorage with "token" keyname 
 */
const USER = {

  get isConnected() {

    return !!sessionStorage.getItem("token")
  },

  get token() {

    return sessionStorage.getItem("token")
  },

  logout() {
    if(this.isConnected) {
      sessionStorage.removeItem("token")

      // reload page natural upgrade User Interface with call to implementContextLogin
      document.location.href = "/"
    }

  }
}

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

const ATTRIBUTE_CATEGORY_ID = "data-category-id"

const WORKS_KEYNAME = "works"

export {
  ENDPOINT,
  ATTRIBUTE_CATEGORY_ID,
  WORKS_KEYNAME,
  USER,
  ACTIONS_LOGGED_USER
}
