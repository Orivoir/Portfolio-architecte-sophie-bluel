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
    url.protocol = this.PROTOCOL
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
  },

  get upload() {

    const endpoint = "/works"

    const baseUrl = new URL(this.baseUrl)

    baseUrl.pathname += endpoint

    return baseUrl.toString()
  },

  removeWork(id) {

    const endpoint = `/works/${id}`

    const baseUrl = new URL(this.baseUrl)

    baseUrl.pathname += endpoint

    return baseUrl.toString()
  }
}

export {ENDPOINT}