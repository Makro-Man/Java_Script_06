'use strict'

function Robot() {
    this.name;
    this.text;
    this.constructor = function (name,text){
        this.name = name;
        this.text = text;
    }
    this.constructor("Robot",'просто працюю');
    this.work = function () {
        console.log("Я " + this.name + " - я " + this.text + "!");
    }
}

function CoffeRobot (){
    Robot.call(this);
    this.constructor('CoffeRobot', 'варю каву');
}

function RobotDancer (){
    Robot.call(this);
    this.constructor('RobotDancer', 'просто танцюю');
}

function RobotCoocker (){
    Robot.call(this);
    this.constructor('RobotCoocker', 'просто готую');
}

let robot = new Robot();
robot.work();
let robot2 = new CoffeRobot();
robot2.work();
let robot3 = new RobotDancer();
robot3.work();
let robot4 = new RobotCoocker();
robot4.work();
console.log('------------------')
let ArrayRobot = [robot, robot2, robot3, robot4];
for (let i = 0 ; i<ArrayRobot.length; i++){
    ArrayRobot[i].work();
}

