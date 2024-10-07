import { API } from "../api.js"
import createCategoryOptionSkeleton from "../skeleton/create-category-option-skeleton.js"

export default async function implementCategoriesOptions() {

  const optionsContainer = document.querySelector("#category")

  const categories = await API.categories()

  categories.forEach(category => {
    optionsContainer.appendChild(
      createCategoryOptionSkeleton(category)
    )
  });
}