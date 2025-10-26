(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        getProductById( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer{
        private masterEmail: string = 'admin@tienda.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admin' ) {
            console.log('Enviando correo a los clientes',template);
        }
    }
    
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer; 

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProductById( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.sendEmail(['kevin@google.com'], 'to-clients');
        }        
    
    }

    class CartBloc {

        private produtsInCart: Object[] = [];

        onAddToCart( productId: number ) {            
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();