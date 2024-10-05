import logoutAction from "./../logout-action.js"

export default function toggleLogged() {


  const authLink = document.querySelector("#authentication-link")

  authLink.removeEventListener("click", logoutAction)
  
  if(authLink.href === "#") {
    authLink.href = "/login.html"
    authLink.textContent = "login"
  } else {
    authLink.href = "#"
    authLink.textContent = "logout"
    authLink.addEventListener("click", logoutAction)
  }


  const updateProjectContent = document.querySelector(".update-project-content")

  updateProjectContent.classList.toggle("hide")

  const filtersContainer = document.querySelector(".filters-gallery")
  
  filtersContainer.classList.toggle("hide")
}