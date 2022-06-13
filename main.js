noseX = 0;
noseY = 0;

function preload() {
    specs = loadImage('https://i.postimg.cc/h4Vtc2L2/deluxe-black-glasses-removebg-preview-1.png');

}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX = ' + results[0].pose.nose.x);
        console.log('noseY = ' + results[0].pose.nose.y);
    }

}

function draw() {
    image(video, 0, 0, 350, 350);
    image(specs, noseX-50, noseY-75, 100, 100);
    //fill(200,0,30);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);

}

function take_snapshot(){
    save('MySelfieIsGood.png');
}