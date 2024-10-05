import { ENDPOINT } from "./helper.js"

/**
 * this object execute fetch request and provide server data.
 * Define url's and endpoints targeted @see ./helper.js
 */
const API = {

  /**
   * fetch list of projects in database
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