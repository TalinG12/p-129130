song="";
song2="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;
scoreLeftWrist=0;
scoreRightWrist=0;
statusLeftWrist="";
statusRightWrist="";
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function modelLoaded() {
    console.log("Posenet is Initialized");
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}


function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    
    song_variable.isPlaying();
    if (scoreLeftWrist > 0.2) {
        circle(leftWristX,leftWristY,20);
        stop.song2.play();
}

if (statusLeftWrist == "false") {
    stop.song.play();
}
else if (statusLeftWrist == "true") {
    circle(leftWristX,leftWristY,20);
        stop.song2.play();
}



if (scoreRightWrist > 0.2) {
    circle(RightWristX,RightWristY,20);
    stop.song.play();
}

if (statusRightWrist == "false") {
stop.song2.play();
}
else if (statusRightWrist == "true") {
circle(RightWristX,RightWristY,20);
    stop.song.play();
}
}