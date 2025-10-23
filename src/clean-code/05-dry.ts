
class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if((this[key] as string).length <= 0) throw new Error(`${key} is empty`);
                break;
                case 'number':
                    if((this[key] as number) <= 0) throw new Error(`${key} is zero`);
                break;
                default:
                    throw new Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString(){
        //Not Dry
        // if(this.name.length <= 0) throw new Error('The name is required');
        // if(this.price <= 0) throw new Error('The price is zero');
        // if(this.size.length <= 0) throw new Error('The size is required');

        // return `${this.name} (${this.price}), ${this.size}`;
        
        // Dry
        if(!this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(()=>{
    const bluePants = new Product('Blue Large Pants',10,'L');
    console.log(bluePants.toString());
})();