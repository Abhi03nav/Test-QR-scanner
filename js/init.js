/* JavaScript code */

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var cam_video_id = "camsource";
var localstream = "";


    function startinit() {
        // Assign the <video> element to a variable
        var video = document.getElementById(cam_video_id);
        var options = {
            "audio": false,
            "video": { facingMode: "environment"  }
        };
        // Replace the source of the video element with the stream from the camera
        if (navigator.getUserMedia) {
            navigator.getUserMedia(options, function(stream) {
                video.srcObject=stream;
                localstream=stream;
            }, function(error) {
                console.log(error)
            });
            // Below is the latest syntax. Using the old syntax for the time being for backwards compatibility.
            // navigator.getUserMedia({video: true}, successCallback, errorCallback);
        } else {
            $("#qr-value").text('Sorry, native web camera streaming (getUserMedia) is not supported by this browser...')
            return;
        }
    }




function startscan() {
    if (!navigator.getUserMedia) return;
    cam = camera(cam_video_id);
    cam.start();
    
}