'use strict'

function Robot(){
    this.name = 'Robot';
    this.text = 'просто працюю';

}
Robot.prototype.constructor = function (name, text){
    this.name = name;
    this.text = text;
}
Robot.prototype.work = function (){
    console.log("Я " + this.name + " - я " + this.text + "!");
}
function CoffeRobot(){}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor('CoffeRobot','варю каву');
function RobotDancer(){}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor('RobotDancer','просто танцюю');
function RobotCoocker(){}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor('RobotCoocker','просто готую');

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
