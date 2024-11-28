var flowers = {
    'lilac' :{
        'flower1':{
            'img':'pictures/products/lilac-flower.jpg',
            'name':'Twilight Blossom',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$29.90'},

        'flower2':{
            'img':'pictures/products/lily-sunflower.jpeg',
            'name':'Soft Lavender Glow',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$69.00'},

        'flower3':{
            'img':'pictures/products/lilac-flower.jpg',
            'name':'Lilac Meadow Magic',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$34.99'},

        'flower4':{
            'img':'pictures/products/daisy.jpeg',
            'name':'Hearts in Bloom',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$89.99'},
    },

    'roses' :{
        'flower1':{
            'img':'pictures/products/roses.jpeg',
            'name':'Petal Dreams',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$90.90'},

        'flower2':{
            'img':'pictures/products/lilac-flower.jpg',
            'name':'Sweet Blooming',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$19.90'},

        'flower3':{
            'img':'pictures/products/sunflower.jpeg',
            'name':'Golden Bloom',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$69.90'},

        'flower4':{
            'img':'pictures/products/daisy.jpeg',
            'name':'Dewy Dawn Roses',
            'description': 'Enchant your loved ones by this dazzling arrangment of flowers',
            'price': '$79.90'},
    },

}


function showproducts(){
    const container = document.querySelector('.cardbox')
    var html = ``;
    Object.entries(flowers).forEach(([type, details]) => {
        Object.entries(details).forEach(([flower,content]) =>{
            html += `<div class="card">
                        <img src="${content['img']}" alt="picture">
                        <div class="text-box">
                            <h3><b>${content['name']}</b></h3>
                            <p>${content['description']}</p>
                            <h6 class="price">${content['price']}</h6>
                        </div>
                    </div>`;
    });
})
    container.innerHTML = html
};

function showcategories(){
    
}

showproducts();