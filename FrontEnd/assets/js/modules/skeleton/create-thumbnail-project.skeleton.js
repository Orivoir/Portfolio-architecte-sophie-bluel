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
}) {
  
  const li = document.createElement("li")
  const figure = document.createElement("figure")
  const image = document.createElement("img")

  const containerRemove = document.createElement("div")
  const btnRemove = document.createElement("button")

  // @TODO create icon remove here

  image.src = imageUrl
  image.alt = `Image of project ${title}`
  image.width = 96
  
  containerRemove.classList.add("container-remove")
  btnRemove.textContent = "rm"

  // @TODO attach remove action to button remove

  containerRemove.appendChild(btnRemove)
  figure.appendChild(image)

  li.appendChild(figure)
  li.appendChild(containerRemove)

  return li;
}