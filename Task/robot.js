'use strict'

class Robot {
    work() {
        console.log('Я Robot – я просто працюю');
    }
}

class CoffeRobot extends Robot {
    work() {
        console.log('Я CoffeRobot – я варю каву');
    }
}

class RobotDancer extends Robot {
    work() {
        console.log('Я RobotDancer – я просто танцюю');
    }
}

class RobotCoocker extends Robot {
    work() {
        console.log('Я RobotCoocker – я просто готую');
    }
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

