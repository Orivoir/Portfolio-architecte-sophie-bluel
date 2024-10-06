import { USER } from "../helper.js"
import logged from "./../context/logged.js"
import unlogged from "../context/unlogged.js"

/**
 * Check if User Interface is currently implemented
 * as logged or unlogged
 */
function getCurrentImplementedContext() {

  const authLink = document.querySelector("#authentication-link")

  const target = authLink.getAttribute("href").trim()

  return target === "#" ? "logged": "unlogged"
}

/**
 * Upgrade User Interface if needed
 * Define upgrade User Interface @see ./../context/toggleLogged.js
 */
export default function implementContextLogin() {

  const currentImplementedContext = getCurrentImplementedContext()

  if(USER.isConnected && currentImplementedContext == "unlogged") {
    logged()
  } else if(!USER.isConnected && currentImplementedContext == "logged") {
    unlogged()
  }

}