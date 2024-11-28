
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

    'plant' : {
        'cactus' :{
            'plant1':{
                'img':'pictures/products/cactus.jpeg',
                'name':'Cactus',
                'description': 'Just a normal cactus',
                'price': '$9.90'},

            'plant2':{
                'img':'pictures/products/cactus.jpeg',
                'name':'Soft Lavender Glow',
                'description': 'Another normal cactus',
                'price': '$5.00'},
        },

        'plants' :{
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
                'name':'BIgger indoor fern',
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
showproducts('plants', 'plant');