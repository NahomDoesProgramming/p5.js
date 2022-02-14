function preload()
{

}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    fill(50, 168, 82);
    circle(60, 60, 70);
    fill(237, 26, 230);
    square(120, 70, 70);
    fill(245, 127, 10);
    triangle(150, 150, 70, 150, 150, 70);
}
