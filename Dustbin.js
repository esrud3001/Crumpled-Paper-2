class Dustbin{

    constructor(x,y){
    
    this.box1=Bodies.rectangle(x,y,200,20,{isStatic:true});
    World.add(world, this.box1);
    
    this.box2=Bodies.rectangle(x-100,y-90,20,200,{isStatic:true});
    World.add(world, this.box2);

    this.box3=Bodies.rectangle(x+100,y-90,20,200,{isStatic:true});
    World.add(world, this.box3); 

    this.image = loadImage("dustbingreen.png");

    }

    display(){
        rectMode(CENTER);
        fill("green");
        image(this.image, this.box1.position.x-100, this.box1.position.y-215,200,225);
       
    }



}