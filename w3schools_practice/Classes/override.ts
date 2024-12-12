interface Shape {
  getArea: () => number;
}

class Ellipse implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Ellipse[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Ellipse {
  public constructor(width: number) {
    super(width, width);
  }

  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const mySq = new Square(20);

console.log(mySq.toString());
