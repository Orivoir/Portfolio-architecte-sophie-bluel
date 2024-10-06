import createProjectSkeleton from "../skeleton/create-project-skeleton.js";
import { API } from "../api.js";
import { ATTRIBUTE_CATEGORY_ID } from "../helper.js";

export default async function implementProjects() {

  const works = await API.works()

  const containerProject = document.querySelector("#portfolio .gallery")

  // clear content if called for upgrade UI
  containerProject.innerHTML = ""

  works.forEach(work => {
    
    const workSkeleton = createProjectSkeleton(work)
    workSkeleton.setAttribute(ATTRIBUTE_CATEGORY_ID, work.category.id)
    containerProject.appendChild(workSkeleton)

  });
}