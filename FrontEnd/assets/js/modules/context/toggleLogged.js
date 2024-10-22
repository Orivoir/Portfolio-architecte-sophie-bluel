import { ACTIONS_LOGGED_USER } from "../helper.js"

export default function toggleLogged() {

  const {authLink} = ACTIONS_LOGGED_USER 
  const updateProjectContent = document.querySelector(".update-project-content")
  const filtersContainer = document.querySelector(".filters-gallery")
  const bannerEditMode = document.querySelector(".banner-edit")

  ACTIONS_LOGGED_USER.removes()
  
  updateProjectContent.classList.toggle("hide")
  filtersContainer.classList.toggle("hide")
  bannerEditMode.classList.toggle("hide")

  if(authLink.href === "#") {
    authLink.href = "/login.html"
    authLink.textContent = "login"
  } else {
    authLink.href = "#"
    authLink.textContent = "logout"
    ACTIONS_LOGGED_USER.adds()
  }
}