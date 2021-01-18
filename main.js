//https://www.youtube.com/watch?v=B20Getj_Zk4&list=PLD9SRxG6ST3HignjcXUX6w8RcT0_b5ihV
//1 In the html file there is a class called add-cart .This is to target all of the add to cart 
//1 add-cart is the button on the product
let carts = document.querySelectorAll('.add-cart');
//4 adding our variables. this is goning to be an array.with objects inside
//4 this is a way to track how many times this item on the cart
//4 they all have 0 inCart means no thing in the cart.
let products = [{
        name: 'Phantom',
        tag: 'Phantom shoes',
        price: 139,
        inCart: 0,
        image: 'Phantom.jpg'
    },

    {
        name: 'InFlight',
        tag: 'InFlight',
        price: 110,
        inCart: 0,
        image: 'InFlight.jpg'
    },
    {
        name: 'N-Black',
        tag: 'N-Black',
        price: 105,
        inCart: 0,
        image: 'N-Black.jpg'
    },
    {
        name: 'M-Vapor',
        tag: 'M-Vapor',
        price: 125,
        inCart: 0,
        image: 'M-Vapor.jpg'
    },
    {
        name: 'aj',
        tag: 'aj',
        price: 50,
        inCart: 0,
        image: 'aj.jpg'
    },

    {
        name: 'Liverpool',
        tag: 'Liverpool',
        price: 70,
        inCart: 0,
        image: 'Liverpool.jpg'
    },
    {
        name: 'Man-C',
        tag: 'Man-C',
        price: 30,
        inCart: 0,
        image: 'Man-C.jpg'
    },
    {
        name: 'Italy',
        tag: 'Italy',
        price: 35,
        inCart: 0,
        image: 'Italy.jpg'
    },

    {
        name: 'N-Match',
        tag: 'N-Match',
        price: 25,
        inCart: 0,
        image: 'N-Match.jpg'
    },

    {
        name: 'Match20',
        tag: 'Match20',
        price: 45,
        inCart: 0,
        image: 'Match20.jpg'
    },
    {
        name: 'M-Goal',
        tag: 'M-Goal',
        price: 50,
        inCart: 0,
        image: 'M-Goal.jpg'
    },
    {
        name: 'Tiro',
        tag: 'Tiro',
        price: 50,
        inCart: 0,
        image: 'Tiro.jpg'
    },

    {
        name: 'N-CR7',
        tag: 'N-CR7',
        price: 50,
        inCart: 0,
        image: 'N-CR7.jpg'
    },

    {
        name: 'G-Youth',
        tag: 'G-Youth',
        price: 40,
        inCart: 0,
        image: 'G-Youth.jpg'
    },
    {
        name: 'B-Shin',
        tag: 'B-Shin',
        price: 20,
        inCart: 0,
        image: 'B-Shin.jpg'
    },
    {
        name: 'L-Shin',
        tag: 'L-Shin',
        price: 20,
        inCart: 0,
        image: 'L-Shin.jpg'
    },

    {
        name: 'Euro20',
        tag: 'Euro20',
        price: 50,
        inCart: 0,
        image: 'Euro20.jpg'
    },

    {
        name: 'P-League',
        tag: 'P-League',
        price: 30,
        inCart: 0,
        image: 'P-League.jpg'
    },
    {
        name: 'M-Delta',
        tag: 'M-Delta',
        price: 25,
        inCart: 0,
        image: 'M-Delta.jpg'
    },
    {
        name: 'Strike',
        tag: 'Strike',
        price: 35,
        inCart: 0,
        image: 'Strike.jpg'
    }
];
//2 Adding event listneer, whenever you click on items you want to do something 
//2 becasue we have a lot of them when we grab let carts. We can do a for loop. 
//2 This is a simple for loop to count from 0 to cart.length.The cart.length is the number of products you have.
for (let i = 0; i < carts.length; i++) {
    //2.1 i want to grab my carts[i] this is going to change from 0 to 1,2,3..
    //2.1 i can grab all my cart based on this carts[i]
    //2.1 we add event listner which is a click, when ever you want to do something you click on the buttons
    //2.1 console.log("added to cart");
    //2.1 when you click on the add button it will add the numbe of items.
    carts[i].addEventListener('click', () => {
        //3.1 products is the one on top "let products". Each one of the product will have index.
        //3.1 whenever you click on cartnumber function. you can grab product in the cartnumber function 
        //3.1 console.log("The product clicked is", products);  This will show the product clicked with name,tag..
        cartNumbers(products[i]);
        //9 when ever you go an loop through my add to cart buttons.
        //9 passing the value of the product. when you click on the item you get access to the product properties 
        totalCost(products[i]);
    })

}
//6 set the number in the local storage
//6 this function is never going to run until we call it 
//6 this function is going to check the local storage to get an item of cartnumbers if it exist 
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    //6.1 if there are some productnumber from the local storage 
    if (productNumbers) {
        //6.2 just set my documnet.squerselector cart span textcontent to be euqla  to the number of product in my local sotrage
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
//3 create a function to know how many items you add to the cart
function cartNumbers(product) {
    //3.2 checking on the console. console.log("the product clicked is", product);. it will show thee name, tag, pric ..
    //3.2 this is how we going to save all the products that we are adding in the local storage, even if you refresh they going to be remmbered 
    //3.2 the items is called cartnumbers. this will show numbers .e.g 1 in local storage
    //3.2 first step when you refresh the local storage you try to get something in there. you get nothing 
    //3.2 let productnumber and producutnumbers is not a number.
    //3.2 the second time you click on the product button. you will get the number from localstorage
    //3.2 you will get number 1 as string. 
    //3.2 console.log(productNumbers); will show numbers
    let productNumbers = localStorage.getItem('cartNumbers');
    //3.3 console.log(typeof productNumbers); when we click on the item it will show string. 
    //3.3 parse is to change from string to int. from the productnumbers.
    productNumbers = parseInt(productNumbers);
    //3.3 when you add the code above and run the console it will show none.
    //5 if there are some product numbers, this means we are ready.we have added something to the cart
    //5 second step if product number exist is which not a number means its false
    //5 this means else is going to run.
    if (productNumbers) {
        //5.1 this will store the item in local storage when you click on the add button
        //5.1 you set the cart number what ever was there before
        //5.1 if there is  product in our local storage  +1 add 1 to make it 2
        localStorage.setItem('cartNumbers', productNumbers + 1);
        //5.3 if this is the first item, select cart span from the html file in the navigation bar there is li with class of cart in side there is span with number 0.
        //5.3 we are getting our number from our local storage and we add 1. 
        //5.3 this will get rid of the number in the local storage and add on the button in the cart
        document.querySelector('.cart span').textContent = productNumbers + 1;
        //5.2 if there is no product 
    } else {
        //5.2 we going to set the item of cartnumbers to be value of 1 
        localStorage.setItem('cartNumbers', 1);
        //5.2 in the navigation bar we have span of 0. thats what you grabing in there
        //5.2  and i want to access the textcontent if this is the first time this going to be = 1.
        //5.2  if not we set the product numbers to grab what ever in productnumbers in our local storage and we adding 1
        document.querySelector('.cart span').textContent = 1;
    }
    //7 this is to grab the product in the cartnumbers (product) function
    setItems(product);
}
//8 this will show in the console the product is clicked
//8 you passing the product in cartnumber(product[i]) in the if statment
//8 you grab it if its in this function. then you pass it in setItems(product);  function
function setItems(product) {
    //8 console.log("inside of set Items function");
    //8 console.log("my prodcut function is", product);
    //8 this will print inside of my set item function, you will see my product is with the name of the product you clicked on

    //8.3 when ever we click on the set item function. this will check if it exist already some  items or not
    //8.3 the item you want to get product incart in local sotrage to check if it exist and see if something in our local storage
    //8.3 if we are trying to get something from our local storage we type this console.log("My cartitems are", cartitems);
    //8.3 this will print in console my cart item are with the name,price.. of the item
    //8.3 this is in a json foramt
    let cartItems = localStorage.getItem('productsInCart');
    //8.4 this is what to pass in from json into javascript object
    //8.4 we are updating this json
    cartItems = JSON.parse(cartItems);
    //8.5 if cart item is equal to null this means something is already in our cart/localstorage
    //8.5 then we going to do a check
    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            //8.7 this is to update my cart item what ever in my local sotrage 
            cartItems = {
                //8.7 grab what ever from my cart items before and then using the rest operator from js
                ...cartItems,
                //8.7 and then add this new product 
                [product.tag]: product
            }
        }
        //8.7 this is to incrase 1 is already in there
        cartItems[product.tag].inCart += 1;
    } else {
        //8.1 this is the first time you going to click 
        product.inCart = 1;
        cartItems = {
            //8.6 setting the product in cart to be 1
            [product.tag]: product
        }
    }
    //8.2 we dont want to pass javascript object. we use JSON.stringify to pass as json object on local sotrage.  
    //8.2 it will show the name, price ... with incart 1.
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
//9 this is to calculate the total
function totalCost(product) {
    //9.1 console.log("The product price is", product.price);
    //9.1 this will show the product price
    //9.1 this will show the price of the product in the local stprage for only 1 product
    //9.1 this will update the total of the product 
    let cartCost = localStorage.getItem('totalCost');
    //10.3 this will change the type to int 
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    //10 if the cart cost is not null this means something is exites in the local sotrage
    if (cartCost != null) {
        //9.4 updat the cart cost to be equal to a parseint of the cart cost 
        //9.4 parseint is to converit string to a number
        cartCost = parseInt(cartCost);
        //9.2  this will give the cost from the cart cost plus this new product price we are clicking on
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        //9.3 the item you want to set called totalcost you put inside is product price  
        localStorage.setItem("totalCost", product.price);
    }
}
//11 this function is going to check if there is something in the local storage
//11 to check if there are some products  
//11 this function is going to run whenever we load the page for the first time, i want this function to run straght away
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    //11.1 when we grab some objects from the local sotrage they come as json
    //11.1 we want to convert from json to number using json.parse
    cartItems = JSON.parse(cartItems)
        //11.1 this is going to show the items in the local storage 
        //11.1 console.log(cartItems);
        //11.3 if this element productcintainer on the page, so this function is only going to run for this page
    let productContainer = document.querySelector(".products");

    let cartCost = localStorage.getItem('totalCost');
    //11.2 checking if cart item is exist or not
    //11.2 if you want this to run add these 2
    //11.2 console.log(cartItems);
    //11.2 this will check if there is product container and run if this product. container lement on the page 
    if (cartItems && productContainer) {
        //11.4 when we load the page we want the page to be empty if there is something there already 
        productContainer.innerHTML = '';
        //11.4 you want to check the values in my cart items
        Object.values(cartItems).map(item => {
            //11.4 the first time is going to run we have nothing productContainer.innerHTML = '';. 
            //11.4 the next time is going to add somthing productContainer.innerHTML += if you have multiple products you use += instead of override
            //11.4 back ticks is away we inject some variables inside with strings 
            //11.5 ion icon close circle in cart page with image with source of images/$ {item.price}.jpg
            //11.5 ion icon for increase and decrease 
            //11.5 total for two items will multiply the price .e.g 10*2=£20
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./images/${item.image}">
            <span>${item.name}</span>
            </div>
            <div class="price">£${item.price},00</div>
            <div class="quantity">
            <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon class="increase " name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            £${item.inCart * item.price},00
            </div>
            `
        });
        //11.6 this is for the total of the items.
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        </div>
        <h4 class="basketTotalTitle">
            Basket Total
        </h4>
        <h3 class="basketTotal">
        £${cartCost},00
        </h3>
        `;
    }
    //this is for chaning the background colour 
    const colors = ["green", "red", "blue", "lightyellow"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener("click", function() {
        const randomNumber = getRandomNumber();
        // console.log(randomNumber);

        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }
    //the end
}
//6 This is to run the onLoad function 
//6 Whenever you load the page for the first time. This is going to run and going to check it
onLoadCartNumbers();
//This will run when ever you start the page
displayCart();