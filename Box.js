class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.body.friction=0.4;
    //this.body.density=0.5;
    //this.body.restitution=0.9;
    this.image = loadImage("sprites/wood1.png");
  }

};
