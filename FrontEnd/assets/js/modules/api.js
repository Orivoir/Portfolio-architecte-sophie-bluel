import { ENDPOINT, WORKS_KEYNAME } from "./helper.js"

/**
 * this object execute fetch request and provide server data.
 * Define url's and endpoints targeted @see ./helper.js
 */
const API = {

  /**
   * fetch list of projects in database (or local storage if exists)
   * @returns Promise<Array>
   * @see /api-docs/#/default/get_works
   */
  async works() {

    let worksFromStorage = localStorage.getItem(WORKS_KEYNAME)?.trim()

    if(worksFromStorage) {
      try {

        worksFromStorage = JSON.parse(worksFromStorage)
        console.log("get works from local storage !")

        return worksFromStorage
      } catch(error) {
        /**
         * Storage empty or data corrupted/invalid
         * Should clean storage and execute fetch request
         */
        localStorage.removeItem(WORKS_KEYNAME)
      }
    }

    const target = ENDPOINT.works

    const works = await this.fetch(target)

    localStorage.setItem(WORKS_KEYNAME, JSON.stringify(works))

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