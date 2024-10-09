import { ATTRIBUTE_PROJECT_ID } from "../helper.js"
import onRemoveProject from "../actions/remove-project.js"

/**
 * Model skeleton thumbnail project:
 * 
 * <li>
 *  <figure>
 *    <img src="{src}" alt="Image of {title}" width="96">
 *  </figure>
 *  
 *  <div class="container-remove">
 *    <button>
 *       <!-- @TODO insert icon remove here -->
 *       rm
 *     </button>
 *  </div>
 * </li>
 */

/**
 *
 * @param {imageUrl: string; title: string;} 
 * @returns HTMLLiElement
 */
export default function createProjectSkeleton({
  imageUrl,
  title,
  id
}) {
  
  const li = document.createElement("li")
  const figure = document.createElement("figure")
  const image = document.createElement("img")

  const containerRemove = document.createElement("div")
  const btnRemove = document.createElement("button")
  const iconRemove = document.createElement("span")

  iconRemove.classList.add("material-symbols-outlined")
  iconRemove.textContent = "delete"

  btnRemove.appendChild(iconRemove)

  image.src = imageUrl
  image.alt = `Image of project ${title}`
  image.width = 96
  
  containerRemove.classList.add("container-remove")
  btnRemove.setAttribute(ATTRIBUTE_PROJECT_ID, id)

  btnRemove.addEventListener("click", onRemoveProject)

  containerRemove.appendChild(btnRemove)
  figure.appendChild(image)

  li.appendChild(figure)
  li.appendChild(containerRemove)

  return li;
}