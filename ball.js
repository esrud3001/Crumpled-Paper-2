class Ball {

    constructor(x,y,r){
  
    var options={
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2

    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world, this.body);
    this.r = r;
    this.image = loadImage("PaperBall.png");
    }

    display(){
  image(this.image, this.body.position.x,this.body.position.y-10, this.r + 10, this.r + 10);

}

    

    
    
    
}