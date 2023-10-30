canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

nasa_images_mars=["mars.jpg","mars_1.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg","mars_5.jpg"]
random_number=Math.floor(Math.random()*6)
console.log(random_number)

rover_width=100
rover_height=100
rover_x=10
rover_y=10
background_image=nasa_images_mars[random_number]
rover_image="rover.png"

function add()
{
    background_imgTag=new Image()
    background_imgTag.onload=uploadBackground
    background_imgTag.src=background_image

    rover_imgTag=new Image()
    rover_imgTag.onload=uploadRover
    rover_imgTag.src=rover_image
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)
function  my_keydown(e)
{
    keyPressed=e.keyCode
    console.log(keyPressed)
    if(keyPressed=="38")
    {
        up()
        console.log("up")
    }
    if(keyPressed=="40")
    {
        down()
        console.log("down")
    }
    if(keyPressed=="37")
    {
        left()
        console.log("left")
    }
    if(keyPressed=="39")
    {
        right()
        console.log("right")
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y=rover_y-10
        console.log("when up arrow key is pressed , x= "+rover_x+"  y= "+rover_y)
        uploadBackground()
        uploadRover()
    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y=rover_y+10
        console.log("when down arrow key is pressed , x= "+rover_x+"  y= "+rover_y)
        uploadBackground()
        uploadRover()
    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x=rover_x-10
        console.log("when left arrow key is pressed , x= "+rover_x+"  y= "+rover_y)
        uploadBackground()
        uploadRover()
    }
}

function right()
{
    if(rover_x <=700)
    {
        rover_x=rover_x+10
        console.log("when right arrow key is pressed , x= "+rover_x+"  y= "+rover_y)
        uploadBackground()
        uploadRover()
    }
}