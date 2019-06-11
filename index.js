class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let p = 0;
    for (const side of this.sides) {
      p += side;
    }
    return p;
  }
}

class Triangle extends Polygon {
  // looking at the README + tests, I think we can assume there are exactly 3
  // sides, even though we don't actually enforce that
  get isValid() {
    // this is called "destructuring" (not "unpacking") in JavaScript
    const [side1, side2, side3] = this.sides;
    return (side1 + side2) > side3 && (side2 + side3) > side1 && (side3 + side1) > side2;
  }
}

class Square extends Polygon {
  // same as Triangle, assuming exactly 4 sides (although this one won't break
  // if there are a different number entered)
  get isValid() {
    // if all the sides are the same, if we convert to a set it will have only
    // 1 element. potentially not the fastest or clearest solution but ¯\_(ツ)_/¯
    const sidesSet = new Set(this.sides);
    return sidesSet.size == 1;
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
