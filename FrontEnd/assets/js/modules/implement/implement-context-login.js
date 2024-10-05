import { USER } from "../helper.js"
import logged from "./../context/logged.js"
import unlogged from "../context/unlogged.js"

function getCurrentImplementedContext() {

  const authLink = document.querySelector("#authentication-link")

  const target = authLink.getAttribute("href").trim()

  return target === "#" ? "logged": "unlogged"
}

export default function implementContextLogin() {

  const currentImplementedContext = getCurrentImplementedContext()

  if(USER.isConnected && currentImplementedContext == "unlogged") {
    logged()
  } else if(!USER.isConnected && currentImplementedContext == "logged") {
    unlogged()
  }

}