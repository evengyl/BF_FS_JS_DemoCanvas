var demo1 = document.getElementById("demo1")
if(demo1.getContext)
{
    var ctx = demo1.getContext('2d')

    ctx.fillStyle = "red"
    ctx.fillRect(50, 50, 400, 150)//x, y, w, h

    ctx.fillStyle = "blue"
    ctx.fillRect(70, 50, 100, 150)
    
    ctx.fillStyle = "green"
    ctx.fillRect(190, 50, 30, 150)
    
    ctx.clearRect(230, 60, 200, 130)

    ctx.strokeStyle = "white"
    ctx.strokeRect(250, 70, 150, 100)
    
    ctx.fillRect(250, 70, 150, 100)


    console.log(ctx)
}

var exos1 = document.getElementById("exos1")
if(exos1.getContext)
{
    var ctx = exos1.getContext('2d')

    ctx.fillStyle = "black"
    ctx.fillRect(50, 50, 200, 200)

    ctx.clearRect(70, 70, 160, 160)

    ctx.strokeStyle = "black"
    ctx.strokeRect(90, 90, 120, 120)
 
}


var exos2 = document.getElementById("exos2")
if(exos2.getContext)
{
    var ctx = exos2.getContext("2d")

    ctx.strokeStyle = "grey"
    ctx.strokeRect(50, 50, 400, 250)

    ctx.fillStyle = "red"
    ctx.fillRect(70, 70, 360, 210)

    ctx.clearRect(175, 155, 150, 40) //400-150 = 250 / 2 = 125 + 50 = 175 //250 - 40 = 210 /2 = 105 + 50 =155
    ctx.clearRect(230,100,40,150) // 400 -40 = 360 /2 = 180 +50 = 230 // 250 - 150 = 100 /2 = 50 + 50 = 100
}


