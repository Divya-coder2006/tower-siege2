
class Box{
constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':14.0,
        'density':0.0001
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //  this.image = loadImage("sprites/base.png");
    
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);
  
    }
    display(){
    
    
    if(this.body.speed<5 ){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(this.color)
        rect( 0, 0, this.width, this.height);
        pop();
    }
        else {
         World.remove(world,this.body);}
    }
     
}
    

    