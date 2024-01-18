let paddle;
let paddle2;
let ball;
let rec = false;

function setup() {
    new Canvas(400, 400)
    paddle = new Sprite();
    paddle.width = 20;
    paddle.height = 20;
    paddle.x = 15;
    paddle.color = "white";

    paddle2 = new Sprite();
    paddle2.width = 20;
    paddle2.height = 20;
    paddle2.x = width - 10;
    paddle2.color = "white";

    ball = new Sprite();
    ball.width = 20;
    ball.height = 20;
    ball.color = "white";
}

function movement() {
    if(kb.pressing("up") && !rec) {
        socket.emit("requests", -3, "y");
        rec = true;
    } else if (kb.pressing("down") && !rec) {
        socket.emit("requests", 3, "y");
        rec = true;
    }
    if(kb.pressing("left") && !rec) {
        socket.emit("requests", -3, "x");
        rec = true;
    }  else if (kb.pressing("right") && !rec) {
        socket.emit("requests", 3, "x");
        rec = true;
    }
}

function teams() {
    
}

function update() {
    socket.emit("update", true);
    socket.on("responses", (arg, arg2) => {
        if (rec) {
            console.log(arg2);
            if (arg2 === "y") {
                paddle.y += arg;
            } else if (arg2 === "x") {
                paddle.x += arg;
            }
            rec = false;
        }
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