class Triangle implements Shape {
  public constructor(
    protected readonly base: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const myTri = new Triangle(10, 20);
console.log(myTri.getArea()); // Output: 100
