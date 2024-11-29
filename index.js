
var products ={
    'flowers' : {
            'lilac' :{
                'flower1':{
                    'img':'pictures/products/lilac-flower.jpg',
                    'name':'Twilight Blossom',
                    'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
                    'price': '$29.90'},

                'flower2':{
                    'img':'pictures/products/lily-sunflower.jpeg',
                    'name':'Soft Lavender Glow',
                    'description': 'Soft flowers for solid aesthetic vibes',
                    'price': '$69.00'},

                'flower3':{
                    'img':'pictures/products/lilac-flower.jpg',
                    'name':'Lilac Meadow Magic',
                    'description': 'Arrangment of flowers',
                    'price': '$34.99'},

                'flower4':{
                    'img':'pictures/products/daisy.jpeg',
                    'name':'Hearts in Bloom',
                    'description': 'Flowers to brighten their smile',
                    'price': '$89.99'},
            },

            'roses' :{
                'flower1':{
                    'img':'pictures/products/roses.jpeg',
                    'name':'Petal Dreams',
                    'description': 'Modern arrangment of flowers for flowery vibes',
                    'price': '$90.90'},

                'flower2':{
                    'img':'pictures/products/lilac-flower.jpg',
                    'name':'Sweet Blooming',
                    'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
                    'price': '$19.90'},

                'flower3':{
                    'img':'pictures/products/sunflower.jpeg',
                    'name':'Golden Bloom',
                    'description': 'Bloom smiles as gold as these flowers',
                    'price': '$69.90'},

                'flower4':{
                    'img':'pictures/products/daisy.jpeg',
                    'name':'Dewy Dawn Roses',
                    'description': 'Enchanting flowers to attract them',
                    'price': '$79.90'},
            },

    },

    'plants' : {
        'cactus' :{
            'plant1':{
                'img':'pictures/products/cactus.jpeg',
                'name':'Cactus',
                'description': 'Just a normal cactus',
                'price': '$9.90'},

            'plant2':{
                'img':'pictures/products/cactus.jpeg',
                'name':'Small cactus',
                'description': 'Another normal cactus',
                'price': '$5.00'},
        },

        'indoor plants' :{
            'plant1':{
                'img':'pictures/products/fern.jpeg',
                'name':'Indoor fern',
                'description': 'Plant for indoor purposes',
                'price': '$90.90'},

            'plant2':{
                'img':'pictures/products/bamboo.jpeg',
                'name':'Good luck bamboo',
                'description': 'For good luck and good environment',
                'price': '$19.90'},

            'plant3':{
                'img':'pictures/products/plantfern.jpeg',
                'name':'Bigger indoor fern',
                'description': 'For bigger space andd bigger happiness',
                'price': '$29.90'},

            'plant4':{
                'img':'pictures/products/fern.jpeg',
                'name':'Fern box',
                'description': 'Box of ferns to grow',
                'price': '$15.90'},
        },

}

}

function showproducts(id, filter = null){
    const container = document.querySelector(`#${id} .cardbox`)
    var html = ``;
    Object.entries(products).forEach(([category,details]) =>{

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
showproducts('flowers','flowers');
showproducts('plants', 'plants');


document.getElementById('searching').addEventListener('input', function(){
    searchinput();
})

document.getElementById('search-form').addEventListener('submit', function(){
    event.preventDefault()
    searchinput();
})



function searchinput(){
    const input = document.getElementById('searching').value.toLowerCase();
    const box = document.getElementById('searchbox')
    box.classList.remove('invisible')
    const containers = document.querySelector('.searchbox')
    var html = ``

    if (input===''){
        box.classList.add('invisible')
        return;
    }

    let found=false

    for (let category in products){
        for (let subcategory in products[category]){
            for (let product in products[category][subcategory]){
                var productfound = products[category][subcategory][product]



                if (productfound.name.toLowerCase().includes(input)|| 
                    subcategory.toLowerCase().includes(input)|| 
                    category.toLowerCase().includes(input)){

                        found=true

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
    }

    containers.innerHTML = html
}

let cardcontainers = document.querySelectorAll('.cardbox')

cardcontainers.forEach((container) =>{

    let cards = container.querySelectorAll('.card')

    cards.forEach((card) => {
        card.addEventListener('click', function(){
            var name = card.querySelector('h3').innerText
            var description = card.querySelector('p').innerText
            var img = card.querySelector('img').src
            var price = card.querySelector('h6').innerText
            

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
                        <p id='pop'>Page closes in 10 seconds. Redirecting you now</p>
                    </div>`

            box.innerHTML = html
            document.querySelector('.selected-product').style.display = 'block';
            document.querySelector('.main-body').style.display = 'none';

            document.querySelector('#cancel').addEventListener('click', function() {
                document.querySelector('.selected-product').style.display = 'none';
                document.querySelector('.main-body').style.display = 'block';
            })
            
            document.querySelector('#order').addEventListener('click', function() {
                document.querySelector('#order').innerText = 'Order Placed!'
                document.getElementById('pop').style.display = 'block'

                setTimeout(function(){
                    location.reload()
                },10000)
            })
        })
    })
})
