status1 = "";

function setup() {
    canvas = createCanvas(480,380);
    video = createCapture(VIDEO);
    video.size(480,340);
    video.hide();
    canvas.center();
}

function start() {
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
search = document.getElementById("object_name").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status1 = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}