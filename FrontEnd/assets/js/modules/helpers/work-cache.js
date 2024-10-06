import {API} from "./../api.js"

export const WORKS_KEYNAME = "works"

/**
 * this object provides works list from sessionStorage
 * after first network request works are save and after remove or add work sessionStorage is upgrade
 * this entity exists for reduce network cost each times you see a log with: "get works from session storage" result provide from sessionStorage instead of server
 */
export const WORKS_CACHE = {

  get works() {

    let worksFromStorage = sessionStorage.getItem(WORKS_KEYNAME)?.trim()

    if(worksFromStorage) {
      try {

        worksFromStorage = JSON.parse(worksFromStorage)
        return worksFromStorage
      } catch(error) {
        /**
         * Storage empty or data corrupted/invalid
         * Should clean storage and execute fetch request
         */
        sessionStorage.removeItem(WORKS_KEYNAME)
      }
    }

    return null
  },

  remove(id) {

    const works = this.works

    if(!works) {
      return false
    }

    const nextWorks = works.filter(work => (
      work.id !== id
    ))

    sessionStorage.setItem(WORKS_KEYNAME, JSON.stringify(nextWorks))

    return true
  },

  append(work) {

    const works = this.works

    if(!works) {
      return false
    }

    works.push(work)

    sessionStorage.setItem(WORKS_KEYNAME, JSON.stringify(works))

    return true
  },

  clear() {
    sessionStorage.removeItem(WORKS_KEYNAME)
  },

  async verify() {

    const works = this.works

    if(!works) return null

    if(works.length == 0) {
      sessionStorage.removeItem(WORKS_KEYNAME)
      return null
    }

    const serverWorks = await API.works()

    if(serverWorks.length > 0) {
      sessionStorage.setItem(WORKS_KEYNAME, JSON.stringify(serverWorks))
    }

  }
}
