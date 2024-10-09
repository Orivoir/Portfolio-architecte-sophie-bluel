import { API } from "../api.js"
import {ATTRIBUTE_PROJECT_ID} from "../helper.js"
import implementThumbnailProject from "./../implement/implement-thumbnail-project.js"
import implementProject from "./../implement/implement-projects.js"

export default function onRemoveProject() {

  const id = parseInt(this.getAttribute(ATTRIBUTE_PROJECT_ID))

  API.removeWork(id)
  .then(({message, status}) => {
    console.log(`remove of project ${id} has been completed with: (${status}) ${message}`)

    if(status === 200) {

      console.log("database has been upgrade")

      console.log("> start upgrade UI with new data")
      implementProject().then(() => {
        console.log("UI Project list has been upgrade")
      })
      implementThumbnailProject().then(() => {
        console.log("UI Modal has been upgrade")
      })

    }
  })

}