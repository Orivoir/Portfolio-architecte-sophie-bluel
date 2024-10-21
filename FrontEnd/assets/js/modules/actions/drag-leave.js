export default function onDragLeave(ev) {
  ev.stopPropagation()
  ev.preventDefault()

  // reference to next element over after leave current element 
  const {relatedTarget} = ev

  const dropZone = document.querySelector(".drop-zone-photo")

  // verify if elements currently over is child of drop zone
  // over on a children of dropzone trigger drag leave and drag enter
  // and purpose light visual "bug", html class is untach/attach immediately
  // and style "jumping" on the element.
  if(!dropZone.contains(relatedTarget)) {
    dropZone.classList.remove("dragover")
  }
  // else { console.log("this is a falsy leave currently over child of dropzone"); }
}