const config ={
    width: 700,
    height: 500,
    type : Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0, x: 0}
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config)
let dude
let cursors

image ={
    width: 100,
    height: 50,
    default: 'img/snake.png',
}

function preload() {
    this.load.image('dude', 'img/snake.png')
    this.load.image('background', 'img/background1.jpg')
}

function create() {
    this.add.image(300, 250, 'background');
    dude = this.physics.add.image(300, 300, 'dude')
    dude.setScale(1/9,1/9)
    dude.body.setSize(100, 200);
    dude.collideWorldBounds = true

    cursors = this.input.keyboard.createCursorKeys()
    console.log(cursors)
}

function update(){


    if(cursors.up.isDown){
        dude.setVelocity(0, -150)
    }
     if(cursors.right.isDown){
         dude.setVelocity(150, 0)
     }
    if(cursors.left.isDown){
        dude.setVelocity(-150, 0)
    }
    if(cursors.down.isDown){
        dude.setVelocity(0, 150)
    }
}
