/**
 * Model skeleton project:
 * 
 * <figure>
 *  <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
 *   <figcaption>Abajour Tahina</figcaption>
 * </figure>
 */

/**
 *
 * @param {imageUrl: string; title: string;} 
 * @returns HTMLFigureElement
 */
export default function createProjectSkeleton({
  imageUrl,
  title,
}) {
  
  const figure = document.createElement("figure")
  const image = document.createElement("img")
  const figcaption = document.createElement("figcaption")

  image.src = imageUrl
  image.alt = `Image of project ${title}`
  figcaption.textContent = title

  figure.appendChild(image)
  figure.appendChild(figcaption)

  return figure;
}