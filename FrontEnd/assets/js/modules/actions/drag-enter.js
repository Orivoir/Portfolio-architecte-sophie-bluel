export default function onDragEnter(ev) {
    ev.stopPropagation()
    ev.preventDefault()

    const dropZone = document.querySelector(".drop-zone-photo")

    if(!dropZone.classList.contains("dragover")) {
        dropZone.classList.add("dragover")
    }
}