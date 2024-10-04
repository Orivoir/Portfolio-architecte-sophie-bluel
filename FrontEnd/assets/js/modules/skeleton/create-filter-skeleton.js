/**
 * Model skeleton button filter list 
 * 
 *  <li>
 *    <button type="button">{categoryName}</button>
 *  </li>
 */

/**
 * 
 * @param {string} categoryName
 * @return HTMLLiElement 
 */
export default function createFilterSkeleton(categoryName) {

  const li = document.createElement("li")
  const button = document.createElement("button")

  button.type = "button"

  button.textContent = categoryName

  li.appendChild(button)

  return li
}
