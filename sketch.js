let paddle;
let paddle2;
let ball;
let rec = false;

function setup() {
    new Canvas(400, 400)
    paddle = new Sprite();
    paddle.width = 10;
    paddle.height = 75;
    paddle.x = 15;
    paddle.color = "white";

    paddle2 = new Sprite();
    paddle2.width = 10;
    paddle2.height = 75;
    paddle2.x = width - 10;
    paddle2.color = "white";

    ball = new Sprite();
    ball.width = 20;
    ball.height = 20;
    ball.color = "white";
}

function movement() {
    if(kb.presses("up") && !rec) {
        socket.emit("requests", -1);
        rec = true;
    } else if (kb.presses("down") && !rec) {
        socket.emit("requests", 1);
        rec = true;
    }
}

function update() {
    socket.emit("update", true);
    socket.on("responses", (arg) => {
        paddle.y += arg;
        console.log("updated", paddle.y);
        rec = false;
    })
}

function draw() {
    background("black");
    movement();
    if (frameCount % 2 === 0) {
        update();
    }
}

function preload() {

}