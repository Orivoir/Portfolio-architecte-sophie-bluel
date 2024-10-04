import { ATTRIBUTE_CATEGORY_ID } from "./helper.js"

/**
 * Add click listener at all buttons filters and apply a toggle system (hide/show) on project
 * `category.id` is use as reference identifier, the toggle system is implement in CSS with class `.hide`
 * 
 * WARNING!!: this function assume filters buttons and projects has been already implements in the document.  
 */
export default function projectsFilter() {

  const filtersBtn = document.querySelectorAll(".filters-gallery button")
  const projects = document.querySelectorAll(".gallery figure")

  filtersBtn.forEach(filterBtn => {
    filterBtn.addEventListener("click", function () {

      
      const categoryId = this.parentNode.getAttribute(ATTRIBUTE_CATEGORY_ID)
      console.log(`Show projects for category: ${categoryId || "All projects"}`)

      if(categoryId == null) {
        projects.forEach(project => project.classList.remove("hide"))
      } else {
        projects.forEach(project => {
          if(project.getAttribute(ATTRIBUTE_CATEGORY_ID) !== categoryId) {
            project.classList.add("hide")
          } else {
            project.classList.remove("hide")
          }
        })
      }
    })
  })
}