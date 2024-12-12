class Collage {
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
        
  const collage = new Collage("sumit");
  
  console.log(collage.getName());