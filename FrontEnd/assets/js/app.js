import implementProjects from "./modules/implement/implement-projects.js"
import implementFilters from "./modules/implement/implement-filters.js"
import { ATTRIBUTE_CATEGORY_ID } from "./modules/helper.js"
import projectsFilter from "./modules/projects-filter.js"

/**
 * create skeleton for each project that fetched from API endpoint (GET /api/works) and append in the document
 * Define fetch api @see ./modules/api.js
 * Define skeleton project @see ./create-project-skeleton.js 
 */
implementProjects()
.then(() => {

  console.log("Implement projects fully fulled !")


  /**
   * create skeleton for each category that fetched from API endpoint (GET /api/categories) and append in the document
   * Define fetch api @see ./modules/api.js
   * Define skeleton project @see ./create-filter-skeleton.js
   */
  implementFilters()
  .then(() => {
    /**
     * filters have been fully fulled created
     * here can listen click at buttons filters
     */
    console.log("Implements filters fully fulled !")
    
    /**
     * Listen click at filter buttons and apply sort on projects.
     * @see ./projects-filter.js
     */
    projectsFilter()
  })

})