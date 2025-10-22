
class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ){}

    toString(){
        //Not Dry
        if(this.name.length <= 0) throw new Error('The name is required');
        if(this.price <= 0) throw new Error('The price is zero');
        if(this.size.length <= 0) throw new Error('The size is required');

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(()=>{
    const bluePants = new Product('Blue Large Pants',10, 'L');
    console.log(bluePants.toString());
})();