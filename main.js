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



var demo2 = document.getElementById("demo2")
if(demo2.getContext)
{
    var ctx = demo2.getContext("2d")

    ctx.beginPath()

    ctx.moveTo(50,50)
    ctx.lineTo(300, 50)
    ctx.lineTo(50, 300)
    ctx.lineTo(50, 50)

    ctx.fill()
    ctx.closePath()



    ctx.beginPath()

    ctx.moveTo(350, 100)
    ctx.lineTo(350, 350)
    ctx.lineTo(100, 350)
    ctx.lineTo(350, 100)

    ctx.stroke()
    ctx.closePath()
}



var demo3 = document.getElementById("demo3")
if(demo3.getContext)
{
    var ctx = demo3.getContext("2d")

    ctx.beginPath()

    ctx.moveTo(50, 50)
    // ctx.lineTo(350, 50)
    // ctx.lineTo(350, 350)
    // ctx.lineTo(50, 350)
    // ctx.lineTo(50, 50)

    ctx.rect(50, 50, 300, 300)

    ctx.strokeStyle = "green"
    ctx.stroke()
    ctx.closePath()
}


var demo4 = document.getElementById("demo4")
if(demo4.getContext)
{
    var ctx = demo4.getContext("2d")

    ctx.beginPath()
    ctx.moveTo(350, 250)
    ctx.arc(250, 250, 100, 0, Math.PI*2)

    ctx.moveTo(230, 210)
    ctx.arc(210, 210, 20, 0, Math.PI*2)

    ctx.moveTo(310, 210)
    ctx.arc(290, 210, 20, 0, Math.PI*2)

    ctx.moveTo(330, 250)
    ctx.arc(250, 250, 80, 0, Math.PI)

    ctx.stroke()

    ctx.closePath()
}


var demo5 = document.getElementById("demo5")
if(demo5.getContext)
{
    var ctx = demo5.getContext("2d")


    ctx.beginPath()
    ctx.moveTo(55, 50)
    ctx.fillStyle = "red"
    ctx.arc(50, 50, 5, 0, Math.PI*2)
    ctx.fill()
    
    ctx.moveTo(355, 350)
    ctx.arc(350, 350, 5, 0, Math.PI*2)
    ctx.fill()

    ctx.moveTo(355, 50)
    ctx.arc(350, 50, 5, 0, Math.PI*2)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.lineWidth = "10"
    ctx.moveTo(50, 50)
    ctx.arcTo(350, 50, 350, 350, 100)
    ctx.lineTo(350, 350)
    

    ctx.stroke()
    ctx.closePath()


}


var exos3 = document.getElementById("exos3")
if(exos3.getContext)
{
    var ctx = exos3.getContext("2d")

    ctx.beginPath()
    ctx.fillStyle="red"

    ctx.moveTo(55,50)
    ctx.arc(50,50,5,0,Math.PI*2)

    ctx.moveTo(205, 200)
    ctx.arc(200,200,5, 0, Math.PI*2)

    ctx.moveTo(355,50)
    ctx.arc(350, 50, 5, 0, Math.PI*2)
    
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.strokeStyle = "grey"
    ctx.moveTo(50,50)
    ctx.lineTo(200,200)
    ctx.lineTo(350,50)
    ctx.stroke()
    ctx.closePath()


    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.moveTo(50,50)
    ctx.arcTo(200, 200, 350, 50, 210)
    ctx.stroke()
    ctx.closePath()

}

var exos3_5 = document.getElementById("exos3_5")
if(exos3_5.getContext)
{
    var ctx = exos3_5.getContext("2d")
    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.fillRect(50, 50, 400,150)

    ctx.strokeStyle = "pink"
    ctx.lineCap = "round"

    ctx.lineWidth = 10
    ctx.moveTo(200, 100)
    ctx.arc(150, 100, 50, 0, Math.PI)
    ctx.stroke()
    ctx.closePath()
}


const demo6 = document.getElementById('demo6')

if (demo6.getContext) {
    const ctx = demo6.getContext('2d')

    // Points de visualisation
    ctx.beginPath()

    ctx.fillStyle = "red"

    // Premier point
    // ctx.moveTo(55, 50)
    ctx.arc(50, 50, 5, 0, Math.PI * 2)

    // Deuxi??me point
    // ctx.moveTo(125, 100)
    ctx.arc(125, 100, 5, 0, Math.PI * 2)

    // Troisi??me point
    ctx.moveTo(200, 50)
    ctx.arc(200, 50, 5, 0, Math.PI * 2)

    // ctx.stroke()
    ctx.fill()
    ctx.closePath()

    // Courbe
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.bezierCurveTo(50, 100, 200, 100, 200, 50)
    ctx.stroke()

    ctx.closePath()

}

const demo7 = document.getElementById('demo7')

if (demo7.getContext) {
    const ctx = demo7.getContext('2d')

    // Points de visualisation
    ctx.beginPath()

    ctx.fillStyle = "red"

    // Premier point
    // ctx.moveTo(55, 50)
    ctx.arc(50, 50, 5, 0, Math.PI * 2)

    // Deuxi??me point
    // ctx.moveTo(125, 100)
    ctx.arc(125, 150, 5, 0, Math.PI * 2)

    // Troisi??me point
    ctx.moveTo(200, 50)
    ctx.arc(200, 50, 5, 0, Math.PI * 2)

    // ctx.stroke()
    ctx.fill()
    ctx.closePath()

    // Courbe
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.quadraticCurveTo(125, 150, 200, 50)
    ctx.stroke()

    ctx.closePath()

}


const exoMaison = document.getElementById('exoMaison')
if (exoMaison.getContext) {
    const ctx = exoMaison.getContext('2d')

    /*
        MAISON
    */

    // Cr??ation des murs et du sol
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 5

    ctx.moveTo(200, 200) // p1
    ctx.lineTo(200, 300) // p2 => mur de gauche
    ctx.lineTo(300, 300) // p3 => sol
    ctx.lineTo(300, 200) // p4 => mur de droite

    ctx.stroke()
    ctx.closePath()

    // Cr??ation de la porte
    ctx.beginPath()

    ctx.moveTo(240, 300) // P1
    ctx.lineTo(240, 250) // P2 => c??t?? gauche de ma porte
    ctx.lineTo(260, 250) // P3 => c??t?? haut de ma porte
    ctx.lineTo(260, 300) // P4 => c??t?? droite de ma porte

    ctx.stroke()
    ctx.closePath()

    // Cr??ation du toit
    ctx.beginPath()

    ctx.moveTo(175, 200) // P1
    ctx.lineTo(250, 125) // P2 => c??t?? gauche de ma porte
    ctx.lineTo(325, 200) // P3 => c??t?? haut de ma porte

    ctx.stroke()
    ctx.closePath()

    /*
        SOLEIL
    */

    // Cercle
    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.strokeStyle = 'orange'
    ctx.fillStyle = 'yellow'

    ctx.arc(375, 100, 50, 0, Math.PI * 2)

    ctx.fill()
    ctx.stroke()

    ctx.closePath()

    // Rayon
    ctx.beginPath()

    ctx.moveTo(340, 100)
    ctx.quadraticCurveTo(375, 150, 410, 100)

    ctx.stroke()

    ctx.closePath()

    /*
        ARBRE
    */

    ctx.beginPath()
    ctx.strokeStyle = "lightgreen"

    ctx.moveTo(150, 300)
    ctx.arcTo(150, 100, 200, 150, 25)

    ctx.stroke()

    ctx.closePath()


    /*
        VAGUES
    */

    ctx.beginPath()
    ctx.strokeStyle = 'cyan'

    // Premi??re vague
    ctx.moveTo(150, 350)
    ctx.bezierCurveTo(250, 300, 250, 400, 375, 340)

    // Deuxi??me vague
    ctx.moveTo(150, 400)
    ctx.bezierCurveTo(250, 350, 250, 450, 375, 390)

    ctx.stroke()
    ctx.closePath()

}

const demo8 = document.getElementById('demo8')

if (demo8.getContext) {
    const ctx = demo8.getContext('2d')

    const img = new Image()

    img.style.border = "2px solid black"

    console.log(img);
    img.src = './png.png'

    img.onload = () => {
        ctx.drawImage(img, 25, 25, 450, 450)
    }

    demo8.onclick = () => {
        window.location = demo8.toDataURL('image/png')
    }

}

const damier = document.getElementById('damier')

if (damier.getContext) {
    const ctx = damier.getContext('2d')

    const nbCols = 6
    const nbRows = 6

    let cube = 50
    let x = 50
    let y = 50

    let red = 255
    let green = 255
    let blue = 0

    // let rgb = `rgb(${red}, ${green}, ${blue})`
    // console.log(rgb)

    // Ligne
    for (let i = 0; i < nbRows; i++) {

        // Colonnes
        for (let j = 0; j < nbCols; j++) {
            x += cube

            ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
            green -= 255 / (nbCols - 1)
            ctx.fillRect(x, y, cube, cube)
        }

        x = cube
        y += cube

        green = 255
        red -= 255 / (nbRows -1)
    }

}

const demo9 = document.getElementById('demo9')

if (demo9.getContext) {
    const ctx = demo9.getContext('2d')

    const degradeLinear = ctx.createLinearGradient(0, 100, 0, 0)
    /*(x0, y0, x1, y1) -> repr??sente, en x0 le d??but du d??grad?? sur l'axe X
    y0, le d??but du d??grad?? sur l'axe Y
    x1, la fin du d??grad?? en axe X
    y1, la fin du d??grad?? en axe Y
    Attention : ce n'est pas la taille du bloc, mais bien la taille du d??grad?? !
    avec ces valeurs, si on met 0, 0, 500, 0 -> nous aurons un d??grad?? 
    en axe X ! donc, verticalement d??grad??.
    Si on met 0, 100, 0, 0 -> nous aurons un d??grad?? sur axe y donc en horizontal

    */

    degradeLinear.addColorStop(0, 'limegreen')
    degradeLinear.addColorStop(0.25, 'grey')
    degradeLinear.addColorStop(0.5, 'red')
    degradeLinear.addColorStop(0.75, 'orange')
    degradeLinear.addColorStop(0.9, 'gold')
    degradeLinear.addColorStop(1, 'yellow')

    ctx.fillStyle = degradeLinear
    ctx.fillRect(0, 0, 500, 100)



    const degradeRadial = ctx.createRadialGradient(166, 300, 0, 332, 150, 250)

    degradeRadial.addColorStop(0, 'limegreen')
    degradeRadial.addColorStop(0.25, 'grey')
    degradeRadial.addColorStop(0.5, 'red')
    degradeRadial.addColorStop(0.75, 'orange')
    degradeRadial.addColorStop(0.9, 'gold')
    degradeRadial.addColorStop(1, 'yellow')

    ctx.fillStyle = degradeRadial
    ctx.fillRect(0, 200, 500, 200)

}





var exos5 = document.getElementById("exos5")
if(exos5.getContext)
{
    var ctx = exos5.getContext("2d")

    const degradeLinear = ctx.createLinearGradient(0, 0, 500, 0)

    degradeLinear.addColorStop(0, 'lightBlue')
    degradeLinear.addColorStop(1, "RoyalBlue")

    ctx.fillStyle = degradeLinear
    ctx.fillRect(0, 0, 500, 150)


    const degradeRadial = ctx.createRadialGradient(200, 400, 0, 200, 400, 250)
    degradeRadial.addColorStop(0, 'lightBlue')
    degradeRadial.addColorStop(1, "RoyalBlue")

    ctx.fillStyle = degradeRadial
    ctx.fillRect(0, 350, 500, 150)
    
}



var demo10 = document.getElementById("demo10")
if(demo10.getContext)
{
    var ctx = demo10.getContext("2d")


    ctx.shadowOffsetX = 5
    ctx.shadowOffsetY = 5
    ctx.shadowBlur = 3
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)"


    ctx.font = "40px Times New Roman"
    ctx.fillStyle= "black"
    ctx.fillText("Bruxelles Formation FS JS",10 ,100)

    
}



var exos6 = document.getElementById("exos6")
if(exos6.getContext)
{
    var ctx = exos6.getContext("2d")

    ctx.fillStyle = "blue"
    ctx.fillRect(50, 50, 150, 150)
    
    ctx.fillStyle = "red"
    ctx.globalAlpha = 0.5
    ctx.arc(220, 200, 75, 0, Math.PI*2)
    ctx.fill()
}



var demo11 = document.getElementById("demo11")
if(demo11.getContext)
{
    var ctx = demo11.getContext("2d")


    ctx.font = "30pt Comic Sans MS"
    ctx.textAlign = "start"
    ctx.textBaseline = "top"
    //ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
    ctx.strokeStyle = "DarkOliveGreen"
    ctx.strokeText("Ton th?? t'a-t-il", 50,50)

    ctx.font = "50pt Comic Sans MS"
    ctx.lineWidth = 3
    ctx.strokeText("??t?? ta toux ?", 50,85)

    ctx.font = "20pt Georgia"
    ctx.textAlign = "right"
    ctx.fillStyle = "Brown"
    ctx.fillText("...disait la tortue au tatou", 400, 150)

}



var exos7 = document.getElementById("exos7")
if(exos7.getContext)
{
    var ctx = exos7.getContext("2d")

    ctx.font = "30px Comic Sans MS"
    ctx.textAlign = "start"
    ctx.textBaseline = "bottom"
    ctx.strokeText("Exemple de texte", 50, 50)

    ctx.fillStyle = "blue"
    ctx.fillText("Autre exemple", 50, 100)

}



var demo12 = document.getElementById("demo12")
if(demo12.getContext)
{
    var ctx = demo12.getContext("2d")

 
    //ctx.translate(50, 50)
    //ctx.scale(2,2)

    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(0,50)
    ctx.lineTo(500,50)
    ctx.stroke()

    ctx.moveTo(50,0)
    ctx.lineTo(50, 500)
    ctx.stroke()
    ctx.closePath()

    //ctx.rotate(15 * Math.PI / 180)
    ctx.rotate(0.2)

    ctx.strokeStyle = "grey"
    ctx.strokeRect(50, 50, 400, 250)

    ctx.fillStyle = "red"
    ctx.fillRect(70, 70, 360, 210)

    ctx.clearRect(175, 155, 150, 40) // _> 400 - 150 = 250 / 2 = 125 + 50 = 175 ///// 250 - 40 = 210 / 2 = 105 + 55 = 155
    ctx.clearRect(230, 100, 40, 150) // _> 400 - 40 = 360 / 2 = 180 + 50 = 230 ///// 250 - 150 = 100 / 2 = 50 + 50



}



var demo13 = document.getElementById("demo13")
if(demo13.getContext)
{
    //save sauvegarde les dernier changement des PROPS !!! du ctx sur une pile
    //restore remet les values des props en l'??tat du dernier save connu
    var ctx = demo13.getContext("2d")

    ctx.fillStyle="black"
    ctx.fillRect(50, 50, 300, 300)
    ctx.save()

    ctx.fillStyle="#09F"
    ctx.fillRect(75, 75, 250, 250)
    ctx.save()

    ctx.fillStyle="#FFF"
    ctx.globalAlpha = 0.5
    ctx.fillRect(100, 100, 200, 200)

    ctx.restore()
    ctx.fillRect(125, 125, 150, 150)

    ctx.restore()
    ctx.fillRect(150, 150, 100, 100)
}


var exos8 = document.getElementById("exos8")
if(exos8.getContext)
{
    var ctx = exos8.getContext("2d")

    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 100, 50)
    ctx.save()

    ctx.fillStyle = "blue"
    ctx.translate(300, -40)
    ctx.rotate(1)
    ctx.fillRect(0, 0, 350, 150)


    ctx.fillStyle = "red"
    ctx.translate(175, 75)
    ctx.fillRect(-87, -37.5, 175, 75)


    ctx.restore()
    ctx.fillStyle = "yellow"
    ctx.fillRect(230,100, 175,75)
}


var demo14 = document.getElementById("demo14")
if(demo14.getContext)
{
    var ctx = demo14.getContext("2d")

    ctx.fillStyle ="DodgerBlue"
    ctx.fillRect(50, 50, 150, 150)


    //ctx.globalCompositeOperation = "source-over"
    //ctx.globalCompositeOperation = "source-in" // supprime tout sauf les partie commune de la source 2
    //ctx.globalCompositeOperation = "source-out" // supprime tout de la partie 1 sur la partie deux
    //ctx.globalCompositeOperation = "source-atop" // supprime tout de la partie 2 qui ne rentre pas dans la partie 1
    //ctx.globalCompositeOperation = "destination-over" // la partie 1 passe devant la partie 2
    //ctx.globalCompositeOperation = "destination-in" // la partie 1 passe devant la partie 2, supprime tout sauf les partie commune de la source 2
    //ctx.globalCompositeOperation = "destination-out" // la partie 1 passe devant la partie 2, supprime tout de la partie 2 sur la partie 1
    //ctx.globalCompositeOperation = "destination-atop" // la partie 1 passe devant la partie 2, supprime tout de la partie 1 qui ne rentre pas dans la partie 2
    //ctx.globalCompositeOperation = "lighter" // ??clairci la partie commune au deux forme
    //ctx.globalCompositeOperation = "darken" // assombri la partie commune au deux forme
    //ctx.globalCompositeOperation = "copy"
    //ctx.globalCompositeOperation = "xor" // ou exclusif-> supprime les partie commune




    ctx.fillStyle = "MediumSeaGreen"
    ctx.arc(200, 200, 75, 0, Math.PI*2)
    ctx.fill()
}

/*
var demo15 = document.getElementById("demo15")
if(demo15.getContext)
{
    var ctx = demo15.getContext("2d")

    var img = new Image(250, 250)
    img.src = './js_logo.jpg'


    ctx.beginPath()
    ctx.arc(200, 200, 150, 0, Math.PI*2)
    ctx.stroke()
    ctx.closePath()

    ctx.clip()




    img.onload = () => {
        ctx.drawImage(img, 50, 50)
    }

}
*/



var i = 0
var xCorp = 250
var xOeilG = 220
var xOeilD = 280
var xBouche = 250

var yCorp = 250
var yOeilG = 220
var yOeilD = 220
var yBouche = 250

var vitesse = 10


var demo16 = document.getElementById("demo16")
if(demo16.getContext)
{
    var ctx = demo16.getContext("2d")
    anim()

}




function anim() {
    
    requestAnimationFrame(anim)
    ctx.clearRect(0, 0, 500, 500)


    ctx.fillStyle = "yellow"

    ctx.beginPath()
    ctx.arc(xCorp, yCorp, 100, 0, Math.PI*2) // x center, y center
    ctx.stroke()
    ctx.fill()
    ctx.closePath()


    ctx.beginPath()
    ctx.arc(xOeilG, yOeilG, 10, 0, Math.PI*2)
    ctx.fillStyle = "white"
    ctx.stroke()
    ctx.fill()
    ctx.closePath()


    ctx.beginPath()
    ctx.arc(xOeilD, yOeilD, 10, 0, Math.PI*2)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()


    ctx.beginPath()
    ctx.arc(xBouche, yBouche, 80, 0, Math.PI)
    ctx.stroke()
    ctx.closePath()


    if(xCorp + 100 > 500 || xCorp -100 < 0)
    {
        vitesse = -vitesse
    }



    xCorp = xCorp + vitesse
    xOeilD = xOeilD + vitesse
    xOeilG = xOeilG + vitesse
    xBouche = xBouche + vitesse


    
    yCorp = yCorp + vitesse
    yOeilD = yOeilD + vitesse
    yOeilG = yOeilG + vitesse
    yBouche = yBouche + vitesse
}


