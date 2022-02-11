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


