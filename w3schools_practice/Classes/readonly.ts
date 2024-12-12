class Person1 {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person1 = new Person1("Harshal");
  
  console.log(person1.getName());