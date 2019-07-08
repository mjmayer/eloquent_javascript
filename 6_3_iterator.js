class Group {
    constructor() {
      this.member = [];
    }
    has(x) {
      let hasItem = this.member.includes(x);
      return hasItem;
    }
    delete(value) {
      this.member = this.member.filter( v => v !== value);
    }
    add(value) {
      if (!this.has(value)) {
        this.member.push(value);
      }
    }
    static from(collection) {
      let group = new Group;
      for (let c of collection) {
        group.add(c);
      }
      return group;
    }
    [Symbol.iterator]() {
      return new GroupIterator(this.member);
    }
  }
  
  class GroupIterator {
    constructor(member) {
      this.member = member;
      this.position = 0;
    }
    updatePosition(position){
      this.position = position;
    }
    next(){
      let nextPosition = this.position++
      if (nextPosition < this.member.length){
        let updatePosition = nextPosition;
        return { value: this.member[nextPosition]};
      }
      else {
        return {value: undefined, done: true };
      }
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c