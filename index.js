let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 3300
canvas.height = 1500

class Player {
    constructor() {
        this.position = {
            x: 600, y: 810
        }
        this.speed = {
            x: 0, y: 0
        }
        let image = new Image()
        image.src = 'img/anh ban sung 3.png'
        this.image1 = image
        this.width = 100
        this.height = 100
    }

    drawL() {
        // ctx.fillStyle ='blue'
        // ctx.fillRect(this.position.x,this.position.y, this.width,this.height)
        ctx.drawImage(this.image1, this.position.x, this.position.y)
    }

    update() {
        this.drawL()
        this.position.y += this.speed.y
    }

    moveTop() {
        this.position.y -= 5;
    }

    moveDown() {
        this.position.y += 5;
    }

    moveLeft() {
        this.position.x -= 5
    }

    moveRight() {
        this.position.x += 5
    }

    limitL() {
        if (this.position.x <= 5) {
            this.position.x = 5;
        } else if (this.position.x >= 3100) {
            this.position.x = 3100;
        } else if (this.position.y <= 5) {
            this.position.y = 5;
        } else if (this.position.y >= 1250) {
            this.position.y = 1250;
        }
    }

    limL() {
        this.drawL()
        if (this.position.x + this.width >= player2.position.x
            && this.position.y >= player.position.y
            && this.position.y <= player.position.y + player.height) {

        }
    }
}

class Player2 {
    constructor() {
        this.position = {
            x: 2500, y: 800
        }
        this.speed = {
            x: 0, y: 0
        }
        let image2 = new Image()
        image2.src = 'img/anh ban sung 4.png'
        this.image2 = image2
        this.width = 100
        this.height = 100
    }

    drawR() {
        // ctx.fillStyle ='blue'
        // ctx.fillRect(this.position.x,this.position.y, this.width,this.height)
        ctx.drawImage(this.image2, this.position.x, this.position.y)
    }

    update() {
        this.drawR()
        this.position.y += this.speed.y
    }

    moveTop() {
        this.position.y -= 5;
    }

    moveDown() {
        this.position.y += 5;
    }

    moveLeft() {
        this.position.x += 5
    }

    moveRight() {
        this.position.x -= 5
    }


    limitR() {
        if (this.position.x <= 5) {
            this.position.x = 5;
        } else if (this.position.x >= 3100) {
            this.position.x = 3100
        } else if (this.position.y <= 5) {
            this.position.y = 5;
        } else if (this.position.y >= 1250) {
            this.position.y = 1250;
        }
    }

    limR() {
        this.drawR()
        if (this.position.x + this.width >= player.position.x
            && this.position.y >= player2.position.y
            && this.position.y <= player2.position.y + player2.height) {

        }
    }


}

class Bullet {
    constructor({position, speed}) {
        this.position = position
        this.speed = speed
        this.radius = 5
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 4 / 5)
        ctx.fillStyle = 'blue'
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}

class Bullet2 {
    constructor({position, speed}) {
        this.position = position
        this.speed = speed
        this.radius = 15
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 4 / 5)
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.speed.x
        this.position.y += this.speed.y

    }


}

//goi

let player = new Player()
let player2 = new Player2()
let bullets = []
let keys = [];


//hoat anh xuat hien
function animate() {
    requestAnimationFrame(animate)
    // ctx.fillStyle = 'pink';
    // ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.drawL()
    player.limitL()
    player2.drawR()
    player2.limitR()
    bullets.forEach((bullet) => {
        bullet.update()
        player.limL()
        player2.limR()

    })

}

animate()

// phim di chuyen va ban
function update() {
    if (keys[87]) {
        player.moveTop();
    }
    if (keys[83]) {
        player.moveDown();
    }
    if (keys[65]) {
        player.moveLeft();
    }
    if (keys[68]) {
        player.moveRight();
    }
    if (keys[38]) {
        player2.moveTop();
    }
    if (keys[40]) {
        player2.moveDown();
    }
    if (keys[37]) {
        player2.moveRight()
    }
    if (keys[39]) {
        player2.moveLeft()
    }
    if (keys[74]) {
        console.log('j')
        bullets.push(new Bullet({
            position: {
                x: player.position.x + player.width * 1.7, y: player.position.y + player.height / 5
            }, speed: {
                x: 20, y: 0
            }
        }))
    }
    if (keys[107]) {
        console.log('+')

        bullets.push(new Bullet2({
            position: {
                x: player2.position.x + player2.width / 4, y: player2.position.y + player2.height / 4
            }, speed: {
                x: -20, y: 0
            }
        }))
    }
    setTimeout(update, 5);
    ctx.fillStyle = 'pink'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.drawL()
    player2.drawR()
}

update();
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

