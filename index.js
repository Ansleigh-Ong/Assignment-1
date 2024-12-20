
var products ={
    'flowers' : {
            'lilac' :{
                'flower1':{
                    'img':'pictures/products/lilac-flower.jpg',
                    'name':'Twilight Blossom',
                    'description': 'Enchant your loved ones with this dazzling arrangment of flowers. Made with 3 different types of flowers, from lilac to lilies. It is sure to make whomever you give this to smile.',
                    'price': '$29.90'},

                'flower2':{
                    'img':'pictures/products/lily-sunflower.jpeg',
                    'name':'Soft Lavender Glow',
                    'description': 'Soft flowers for solid aesthetic vibes. With small and freshed-scented flowers, it is guaranteed to make your room aesthetic glow.',
                    'price': '$69.00'},

                'flower3':{
                    'img':'pictures/products/lilac-flower.jpg',
                    'name':'Lilac Meadow Magic',
                    'description': 'Arrangment of flowers made for you. Freshly picked from the flower fields, this bouquet is sure to make you feel like your on holiday!',
                    'price': '$34.99'},

                'flower4':{
                    'img':'pictures/products/daisy.jpeg',
                    'name':'Hearts in Bloom',
                    'description': 'Flowers to brighten their smile. Made with sunflowers and other flowers, this makes a perfect gift!',
                    'price': '$89.99'},
            },

            'roses' :{
                'flower1':{
                    'img':'pictures/products/roses.jpeg',
                    'name':'Petal Dreams',
                    'description': 'Modern arrangment of flowers for flowery vibes. Perfect for a pleasant gift to you endear ones.',
                    'price': '$90.90'},

                'flower2':{
                    'img':'pictures/products/lilac-flower.jpg',
                    'name':'Sweet Blooming',
                    'description': 'Enchant your loved ones by this dazzling arrangment of flowers. These flowers are delivered just as they are blooming, making the gift process even more special!',
                    'price': '$19.90'},

                'flower3':{
                    'img':'pictures/products/sunflower.jpeg',
                    'name':'Golden Bloom',
                    'description': 'Bloom smiles as gold as these flowers. Gathered from the fields of sunflowers and daisies, these flowers represent the bright outlook on the future. Perfect for those whom you want to spend your time with.',
                    'price': '$69.90'},

                'flower4':{
                    'img':'pictures/products/daisy.jpeg',
                    'name':'Dewy Dawn Roses',
                    'description': 'Enchanting flowers to attract them. Featuring all types of roses, this gift is made for those you truely love! This bouquet is specially made all year round for you to give to that special someone!',
                    'price': '$79.90'},
            },

    },

    'plants' : {
        'cactus' :{
            'plant1':{
                'img':'pictures/products/cactus.jpeg',
                'name':'Cactus',
                'description': 'Just a normal cactus. This little prickly guy may be small but it sure can last. Without needing to be watered daily, this plant can be perfect for those who do not want daily commitments.',
                'price': '$9.90'},

            'plant2':{
                'img':'pictures/products/cactus.jpeg',
                'name':'Small cactus',
                'description': 'Another normal cactus. Bunches of cactus grows from it, creating a small cactus field!',
                'price': '$5.00'},
        },

        'indoor plants' :{
            'plant1':{
                'img':'pictures/products/fern.jpeg',
                'name':'Indoor fern',
                'description': 'Plant for indoor purposes. It can be used for adding to your room aesthetics or just to show off you nature spirit.',
                'price': '$90.90'},

            'plant2':{
                'img':'pictures/products/bamboo.jpeg',
                'name':'Good luck bamboo',
                'description': 'For good luck and good environment. For those that believe in fortune, this bamboo represents being strong in faces of adversity, giving you good spirit and luck.',
                'price': '$19.90'},

            'plant3':{
                'img':'pictures/products/plantfern.jpeg',
                'name':'Bigger indoor fern',
                'description': 'For bigger space and bigger happiness. This plant is huge, recommending large spaces for it to grow. This pot of plant is sure to bring the nature to you.',
                'price': '$39.90'},

            'plant4':{
                'img':'pictures/products/fern.jpeg',
                'name':'Fern box',
                'description': 'Box of ferns to grow your spirits. These plants spread really quickly, growing sprouts like nothing you have seen before! You can have your little garden in no time!',
                'price': '$15.90'},
        },

}

}


//Adds all of the items to their specifc section
function showproducts(id, filter = null){
    const container = document.querySelector(`#${id} .cardbox`)
    var html = ``;
    Object.entries(products).forEach(([category,details]) =>{
        //Checks if filter matches the categories to get the plants
        if (!filter || category=== filter){
            Object.entries(details).forEach(([type, subdetails]) => {
                Object.entries(subdetails).forEach(([flower,content]) =>{
                    html += `<div class="card">
                                <img src="${content['img']}" alt="picture">
                                <div class="text-box">
                                    <h3><b>${content['name']}</b></h3>
                                    <p>${content['description']}</p>
                                    <h6 class="price">${content['price']}</h6>
                                </div>
                            </div>`
            });
        });
    }
});
    container.innerHTML = html
};

showproducts('all');
showproducts('flowers','flowers'); //Call the function
showproducts('plants', 'plants');



document.getElementById('searching').addEventListener('input', function(){
    searchinput();
})

document.getElementById('search-form').addEventListener('submit', function(event){
    event.preventDefault()
    searchinput();
})
//Calls if user submits respond

function searchinput(){
    const input = document.getElementById('searching').value.toLowerCase();
    const box = document.getElementById('searchbox')
    box.classList.remove('invisible') //toggles box to display related products
    const containers = box.querySelector('.cardbox')
    var html = ``

    if (input===''){
        box.classList.add('invisible')
        return;
    }

    let found=false
    //Runs through all variables in the whole dictionary
    for (let category in products){
        for (let subcategory in products[category]){
            for (let product in products[category][subcategory]){
                var productfound = products[category][subcategory][product]

                if (productfound.name.toLowerCase().includes(input)||
                    productfound.description.toLowerCase().includes(input)|| 
                    subcategory.toLowerCase().includes(input)|| 
                    category.toLowerCase().includes(input)){

                        found=true
                        //Adds related products as cards to the box
                        html += `<div class="card">
                                <img src="${productfound.img}" alt="picture">
                                <div class="text-box">
                                    <h3><b>${productfound.name}</b></h3>
                                    <p>${productfound.description}</p>
                                    <h6 class="price">${productfound.price}</h6>
                                </div>
                            </div>`
                    }
            }
        }
    }
    if (!found){
        html = `<h2>No products found </p>`
    } //If there is no products

    containers.innerHTML = html
}

//Function for when card is clicked
let cardcontainers = document.querySelectorAll('.cardbox')

cardcontainers.forEach((container) =>{

    container.addEventListener('click', function(event){
        var card = event.target.closest('.card')
        if (!card){
            return;
        }//Runs through every card to add event listener
    
            var name = card.querySelector('h3').innerText
            var description = card.querySelector('p').innerText
            var img = card.querySelector('img').src
            var price = card.querySelector('h6').innerText
            //Get all product variables

            const box = document.querySelector('.productbox')
            var html =``

            html = `<div class="product-img">
                        <img src="${img}" alt="picture">
                    </div>
                    <div class="producttext">
                        <h3><b>${name}</b></h3>
                        <h6 class="price">${price}</h6>
                        <p>${description}</p>
                        <div class="product-button">
                            <button id="cancel" type="submit" class="cancel">Cancel</button>
                            <button id="order" type="submit" class="order">Order</button>
                        </div>
                        <p id='pop'>Page closes in 5 seconds. Redirecting you now</p>
                        <p id='error'>You cannot buy whilst not logged in!</p>
                    </div>`

            box.innerHTML = html
            document.querySelector('.selected-product').style.display = 'block';
            document.querySelector('.main-body').style.display = 'none';
            //Show one giant card and toggle all the other smaller cards invisible

            //Inside specific card
            document.querySelector('#cancel').addEventListener('click', function() {
                document.querySelector('.selected-product').style.display = 'none';
                document.querySelector('.main-body').style.display = 'block';
            }) //Toggle giant card off if cancel button is clicked
            
            //If user wants to buy
            document.querySelector('#order').addEventListener('click', function() {
                var login = localStorage.getItem('login') //Check user logged in or not

                if (login === 'false'){
                    document.getElementById('error').style.display = 'block' //gets error if not log in
                }
                else{
                    document.querySelector('#order').innerText = 'Order Placed!'
                    document.getElementById('pop').style.display = 'block'
                    //Change button text to order places and will reload the page after 5 seconds
                    setTimeout(function(){
                        location.reload()
                    },5000)
                }
            })
        })
    })

