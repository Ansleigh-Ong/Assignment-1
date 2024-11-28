var flowers = {
    'lilac' :{
        'img':'pictures/products/lilac-flower.jpg',
        'name':'Twilight Blossom',
        'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
        'price': '$29.90'
    },

    'roses' :{
        'img':'pictures/products/roses.jpeg',
        'name':'Twilight Blossom',
        'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
        'price': '$29.90'
    },

    'sunflower' :{
        'img':'pictures/products/lily-sunflower.jpeg',
        'name':'Twilight Blossom',
        'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
        'price': '$29.90'
    },
}


function showproducts(){
    const container = document.querySelector('.cardbox')
    var html = ``;
    Object.entries(flowers).forEach(([type, details]) => {
        html += `<div class="card">
                    <img src="${details['img']}" alt="picture">
                    <div class="text-box">
                        <h3><b>${type}</b></h3>
                        <p>${details['description']}</p>
                        <p class="price">${details['price']}</p>
                    </div>
                </div>`
    })
    container.innerHTML = html
};

showproducts();