import createFilterSkeleton from "../skeleton/create-filter-skeleton.js"
import { API } from "../api.js"
import { ATTRIBUTE_CATEGORY_ID } from "../helper.js"

export default async function implementFilters() {

  const categories = await API.categories()

  const containerFilters = document.createElement("ul")


  const staticFilterSkeleton = createFilterSkeleton("Tous")
  staticFilterSkeleton.querySelector("button")?.classList.add("btn-fill")
  containerFilters.appendChild(staticFilterSkeleton)
 
  categories.forEach(category => {
    
    const filterSkeleton = createFilterSkeleton(category.name)
    filterSkeleton.setAttribute(ATTRIBUTE_CATEGORY_ID, category.id)
    containerFilters.appendChild(filterSkeleton)
  });

  document
    .querySelector("#portfolio .filters-gallery")
    .appendChild(containerFilters)
}