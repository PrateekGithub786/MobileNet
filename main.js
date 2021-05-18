Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

var audio = new Audio();
audio.src = "Camera Shutter.mp3";

function takeSnapshot() {
    audio.play();

    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);