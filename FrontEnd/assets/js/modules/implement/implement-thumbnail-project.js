import createThumbnailProjectSkeleton from "../skeleton/create-thumbnail-project.skeleton.js";
import { API } from "../api.js";
import { ATTRIBUTE_CATEGORY_ID } from "../helper.js";

export default async function implementThumbnailProjects() {

  const works = await API.works()

  const containerThumbnailProject = document.querySelector(".modal .removable-gallery .container-removale-gallery")

  works.forEach(work => {
    
    const workSkeleton = createThumbnailProjectSkeleton(work)
    workSkeleton.setAttribute(ATTRIBUTE_CATEGORY_ID, work.category.id)
    containerThumbnailProject.appendChild(workSkeleton)
  });
}