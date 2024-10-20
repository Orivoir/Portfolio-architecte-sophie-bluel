import { ENDPOINT, USER } from "./helper.js"

/**
 * this object execute fetch request and provide server data.
 * Define url's and endpoints targeted @see ./helper.js
 */
const API = {

  /**
   * fetch list of projects in database (or session storage if exists)
   * @returns Promise<Array>
   * @see /api-docs/#/default/get_works
   */
  async works() {

    const target = ENDPOINT.works

    const works = await this.fetch(target)

    return works
  },

  /**
   * fetch list of categoris in database
   * @returns Promise<Array>
   * @see /api-docs/#/default/get_categories
   */
  async categories() {

    const target = ENDPOINT.categories

    const categories = await this.fetch(target)

    return categories
  },

  /**
   * request authentication with credentials
   * @param {email: string; password: string} credentials 
   * @returns {token: string; id: numner}
   */
  async login({email, password}) {

    const target = ENDPOINT.login
    
    const response = await fetch(target, {
      body: JSON.stringify({email, password}),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })

    const data = await response.json()

    return data.error || data.message ? false: data
  },

  /**
   * 
   * @param {number} id 
   * @returns {message: string; status: number}
   */
  async removeWork(id) {

    if(!USER.isConnected) {
      return {message: "connected user is required for this action", status: 401}
    }

    const target = ENDPOINT.removeWork(id)
    const token = USER.token

    const response = await fetch(target, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    if(response.status === 200 || response.status === 204) {
      return  {message: "OK", status: 200}
    }

    return {
      message: "request failed with status",
      status: response.status
    }
  },

  /**
   * 
   * @param {file: File; title: string; categoryId: number;} options 
   * @returns {id: number; title: string; imageUrl: string; categoryId: string; userId: number} created object
   */
  async upload({file, title, categoryId}) {


    if(!USER.isConnected) {
      return {message: "connected user is required for this action", status: 401}
    }

    const target = ENDPOINT.upload
    const token = USER.token
  
    const formData = new FormData()

    formData.append("image", file)
    formData.append("title", title)
    formData.append("category", categoryId)

    const response = await fetch(target, {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await response.json()

    return data
  },

  /**
   * generic fetch GET method with target and extract JSON from response
   * @param {string} target 
   * @returns Promise<JSON>
   */
  async fetch(target) {

    const response = await fetch(target)

    const data = await response.json()

    return data
  }
}

export {API}