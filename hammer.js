class hammer{
    constructor(x,y,width,height) {
      var options = {
         'density': 2,
         'friction': 1,
         'restitution': 0.5,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };