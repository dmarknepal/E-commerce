class Product{
    constructor() {
        this.productName ;
        this.Price;
        this.productId;
        this.Desc;
    }

}

class Stack {


    constructor(){

        this.items = [];
    }

   size(){
        return this.items.length;
   }
    push(element){
        this.items.push(element);
    }

    remove(id){

        for(let i=0;i<this.size();i++){

            let obj =  JSON.parse(this.items[i]);

            if(obj.productId === id ){
                this.items.splice(i,1);
            }

        }


    }


    // pop function
    pop()
    {

        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek function
    peek()
    {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // isEmpty function

isEmpty(){


}


}





function addToCart() {


    let prdouct1 = new Product();
        prdouct1.Name = document.getElementById('Name').innerText;
        // prdouct1.productId = j ;
    prdouct1.Price =  document.getElementById('Price').innerText;
        prdouct1.Desc =  document.getElementById('Desc').innerText;


        let stack = new Stack();
        let cart = window.localStorage.getItem('cart');

        if (cart == null || cart == undefined) {
            stack.push(JSON.stringify(prdouct1));

            window.localStorage.setItem('cart', stack.items);
        }
        else {
            //console.log(.productName);
            cart.replace('"{', '{');
            cart.replace('}"', '}');
            cart = "[" + cart + "]";

            var obj = JSON.parse(cart);
            // stack.push(JSON.stringify(obj));
            for (var i = 0; i < obj.length; i++) {
                stack.push(JSON.stringify(obj[i]));




            }
            stack.push(JSON.stringify(prdouct1));

            window.localStorage.setItem('cart', stack.items);
        }

        console.log(stack.items)

        document.getElementById('cartValue').innerHTML = stack.size();






}



function removeFromCart(id) {

    let stack = new Stack();
    let cart=window.localStorage.getItem('cart');



    cart.replace('"{','{');
    cart.replace('}"','}');
    cart="["+cart+"]";

    var obj=JSON.parse(cart);
    // stack.push(JSON.stringify(obj));
    for( var i=0;i<obj.length;i++){
        stack.push(JSON.stringify(obj[i]));


    }

    stack.remove(id);
    console.log(stack.items);

    window.localStorage.setItem('cart',stack.items);

    document.getElementById('cartValue').innerHTML=stack.size();

}



function addItemToCart () {

    let stack = new Stack();
    let cart=window.localStorage.getItem('cart');

    

    cart.replace('"{','{');
    cart.replace('}"','}');
    cart="["+cart+"]";

    let obj=JSON.parse(cart);

    for( let i=0;i<obj.length;i++){
        stack.push(JSON.stringify(obj[i]));


    }





    let cartContent = '<li class="product-item">\n' +
        '                                                    <a class="product-item-photo" href="#" title="The Name Product">\n' +
        '                                                        <img class="product-image-photo" src="images/media/index1/minicart.jpg" alt="The Name Product">\n' +
        '                                                    </a>\n' +
        '                                                    <div class="product-item-details">\n' +
        '                                                        <strong class="product-item-name">\n' +
        '                                                            <a href="#">Apple </a>\n' +
        '                                                        </strong>\n' +
        '                                                        <div class="product-item-qty">\n' +
        '                                                            <input class="cart-qty-input" type="number" value="2">\n' +
        '                                                        </div>\n' +
        '                                                        <div class="product-item-price">\n' +
        '                                                            <span class="price"> 12</span>\n' +
        '                                                        </div>\n' +
        '\n' +
        '                                                            <button type="button" class="close" aria-label="Close">\n' +
        '                                                                <span aria-hidden="true">&times;</span>\n' +
        '                                                            </button>\n' +
        '\n' +
        '\n' +
        '                                                            </a>\n' +
        '\n' +
        '                                                    </div>\n' +
        '                                                </li>';



    console.log(stack.items);

    window.localStorage.setItem('cart',stack.items);

    document.getElementById('cartValue').innerHTML=stack.size();

}


function addedToWishList() {
    alert("added to cart");

}



























