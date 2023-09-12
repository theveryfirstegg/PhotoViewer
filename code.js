
let idGlobal;
const intervalInMilliseconds = 1000;
var names = new Array()

window.onload = function main() {
    let loadButton = document.getElementById("load_button");
    loadButton.onclick = loadImages
}



function loadImages() {
    let photoFolder = document.querySelector("#photo_folder").value;
    let commonName = document.querySelector("#common_name").value;
    let startNumber = document.querySelector("#start_number").value;
    let endNumber = document.querySelector("#end_number").value;

    let counter = startNumber;
    

    if (endNumber < startNumber) {
        document.getElementById(changing_text).innerHTML = "Error: Invalid Range"
    }

    while (counter <= endNumber) {
        let new_name = photoFolder + commonName + counter + ".jpg";
        names.push(new_name);
        counter++;
    }

    document.querySelector("#image_slideshow").src = names[0];


}

function slideshow() {
    let photoFolder = document.querySelector("#photo_folder").value;
    let commonName = document.querySelector("#common_name").value;
    let startNumber = document.querySelector("#start_number").value;
    let endNumber = document.querySelector("#end_number").value;



        let photoName = photoFolder;
        photoName += commonName;
        photoName += startNumber;

        let imageElement = document.getElementById("image_slideshow")
        let currentPhoto = imageElement.getAttribute("src")
        imageElement.setAttribute("src", photoName)




}