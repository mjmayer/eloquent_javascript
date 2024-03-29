class Vec {
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }
    
    plus (vec){
      this.x += vec.x;
      this.y += vec.y;
      return this;
    }
    
    minus (vec){
      this.x -= vec.x;
      this.y -= vec.y;
      return this;
    }
    
    get length() {
      length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y,2));
      return length;
    }
  }
  // console.log(new Vec(1,2));
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);