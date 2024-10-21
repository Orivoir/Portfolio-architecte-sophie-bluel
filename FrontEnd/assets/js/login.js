import { API } from "./modules/api.js"
import { USER } from "./modules/helper.js"

// redirect user if already connected
if(USER.isConnected) {

  const indexUrl = new URL(document.location.href)
  
  indexUrl.pathname = ""

  document.location.href = indexUrl.href
}


const formLogin = document.querySelector("form")

const emailField = document.querySelector("input#email")
const passwordField = document.querySelector("input#password")
const submitBtn = document.querySelector("button[type=\"submit\"]")
const errorTxt = document.querySelector(".error")

formLogin.addEventListener("submit", event => {

  event.preventDefault()

  errorTxt.value = ""

  const email = emailField.value
  const password = passwordField.value

  emailField.value = ""
  passwordField.value = ""

  API.login({email, password})
  .then(response => {

    submitBtn.removeAttribute("disabled")

    if(!response) {
      errorTxt.textContent = "Erreur dans l'identifiant ou le mot de passe"
    } else {
      sessionStorage.setItem("token", response.token)
      document.location.href = "/"
    }

  })
  .catch(() => {
    submitBtn.setAttribute("disabled")
  })

})