img = " ";
status = "";

function preload()
{
    img = loadImage('kitchen.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("STOOL", 180, 270);
    noFill();
    stroke("#FF0000");
    rect(180, 270, 270, 100);

    fill("#FF0000");
    text("LAMP", 230, 60);
    noFill();
    stroke("#FF0000");
    rect(230, 60, 250, 100);
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', moadelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function moadelLoaded()
{
    console.log("model loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);

    }
    console.log(results);
}

function select1()
{
    window.location = "rooms.html";   
}