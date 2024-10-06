import implementProjects from "./modules/implement/implement-projects.js"
import implementFilters from "./modules/implement/implement-filters.js"
import implementContextLogin from "./modules/implement/implement-context-login.js"
import implementThumbnailProjects from "./modules/implement/implement-thumbnail-project.js"

import { USER, WORKS_CACHE } from "./modules/helper.js"
import projectsFilter from "./modules/projects-filter.js"


(async function() {

  /**
   * check if user is logged and update User Interface if needed
   * Defined upgrade User Interface @see ./modules/context/toggleLogged.js
   * Define user state @see ./helper.js
   */
  implementContextLogin()

  /**
   * Verify if sessionStorage that contains projects localy is sync with server
   * Define works cache @see ./helper.js
   */
  await WORKS_CACHE.verify()
  console.log("works cache verify !")
  
  /**
   * create skeleton for each project that fetched from API endpoint (GET /api/works) and append in the document
   * Define fetch api @see ./modules/api.js
   * Define skeleton project @see ./create-project-skeleton.js 
   */
  await implementProjects()
  console.log("Implement projects fully fulled !")
    
    
  /**
   * create skeleton for each category that fetched from API endpoint (GET /api/categories) and append in the document
   * Define fetch api @see ./modules/api.js
   * Define skeleton project @see ./create-filter-skeleton.js
   */
  await implementFilters()
  console.log("Implements filters fully fulled !")
        
  if(USER.isConnected) {

    /**
     * Listen click at filter buttons and apply sort on projects.
     * @see ./projects-filter.js
     */
    projectsFilter()

    /**
     * Implements projects list from modal
     */
    await implementThumbnailProjects()
    
    console.log("Implements thumbnails project in modal fully fulled !")
  }
})()
