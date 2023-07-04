class ProductManager {
    constructor() {
        this.products = []
    }


    static id = 0

    addProduct(title, description, price, image, code, stock) {

        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} del producto está repetido`);
                break;

            }
        }


        const newProduct = {
                title, 
                description, 
                price, 
                image, 
                code, 
                stock, 
        }

        if (!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({ 
                ...newProduct,
                id: ProductManager.id 
            });
        } else {
            console.log("Todos los campos son requeridos")
        }
    }

    getProduct() {
        return this.products;
    }

found (id){
    return this.products.find((product) => product.id === id)
}

    getProductById(id) {
        !this.found(id) ? console.log("Not found") : console.log(this.found(id));
        }
    }


//Primer llamada = devuelve arreglo vacio
const products = new ProductManager();

//Agregamos productos
products.addProduct('titulo 1', 'descripcion 1', '10000', "imagen 1 ", 'abc123', 5)
products.addProduct('titulo 2', 'descripcion 2', '10000', "imagen 2 ", 'abc124', 6)

//Segunda llamada = arreglo con producto que creamos
console.log(products.getProduct());

//Validacion de "code" repetido
products.addProduct('titulo 3', 'descripcion 3', '10000', "imagen 3 ", 'abc124',7)

//Validacion de campo incompleto
products.addProduct('titulo 4', 'descripcion 4', '10000', "imagen 4 ", 'abc125')

//Buscamos el producto por ID no encontrado ("Not found")
console.log(products.getProductById(5))
