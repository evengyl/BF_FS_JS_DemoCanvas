var demo1 = document.getElementById("demo1")
if(demo1.getContext)
{
    var ctx = demo1.getContext('2d')

    ctx.fillStyle = "red"
    ctx.fillRect(50, 50, 200, 100)//x, y, w, h

    ctx.fillStyle = "blue"
    ctx.fillRect(70, 50, 100, 100)

    ctx.fillStyle = "green"
    ctx.fillRect(190, 50, 30, 100)
}