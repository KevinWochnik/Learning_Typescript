class Product {
    title: string;
    price: number;
    private isListed: boolean;
   
    constructor(name: string, pr: number) {
      this.title = name;
      this.price = pr;
      this.isListed = true;
    }
  }

  class Product2 {
    private isListed: boolean
    constructor(title:string, price:number){
        this.isListed = true
    }
  }

