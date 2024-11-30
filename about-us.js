function next(container,scrolldist){
    container.scrollBy({left: scrolldist, behavior: "smooth"})
}

function back(container,scrolldist){
    container.scrollBy({left: scrolldist, behavior: "smooth"})
}

//Buttons to move the reviews around
document.querySelector('#right-button').addEventListener('click', function(){
    const container = document.querySelector('.review-box')
    next(container,200);
})

document.querySelector('#left-button').addEventListener('click', function(){
    const containers = document.querySelector('.review-box')
    back(containers,-200);
})

//########################################################
var dict_stars ={
    '1star':'★',
    '2star':'★★',
    '3star':'★★★',
    '4star':'★★★★',
    '5star':'★★★★★',
}

//get user reviews and saves them 
var dict_rating =JSON.parse(localStorage.getItem('dict_rating')) || {
    'Alicers_131' : {
        'Rating': '4star',
        'Comment':'Very good. Fresh and quality-ensured. Would buy from here from now on'
    },
    'Bob_Man' : {
        'Rating': '5star',
        'Comment':'Fresh flowers are nice and amazing!'
    },
    'Flowering':{
        'Rating': '5star',
        'Comment':'So amazing!'
    },
    'CSS_is-cool10110':{
        'Rating': '4star',
        'Comment':'Flowers are as cool as CSS! Really worth the price!'
    },
    'alt-acc123-23':{
        'Rating': '5star',
        'Comment':'Flowers are as cool'
    },
    'CS-Clover0':{
        'Rating': '5star',
        'Comment':'Really worth the price!'
    },
    'html_wild-cool':{
        'Rating': '4star',
        'Comment':'These flowers really bloomed a smile on their face! Thank you for this life-saving gift!'
    },
}

//Shows the reviews
function showreviews(){
    
    const container = document.querySelector('.review-box')
    var html = ``
    //Gets each variable in the dictionary and add another card
    Object.entries(dict_rating).forEach(([username, details]) => {
        const stars = dict_stars[details['Rating']]
        html += `<div class="review">
                        <div class="review-header">
                            <img src="pictures/profile.png" alt="user">
                            <h4>${username}</h4>
                        </div>
                        <h3>${stars}</h3>
                        <blockquote>
                            <p>${details['Comment']}</p>
                        </blockquote>
                    </div>`
    });
    html += `<div class="review" >
                <div class="review-add">
                    <button type="button" onclick=GetReview()><img src="pictures/about-us/add.png" alt="add review"></button>
                </div>
            </div>`
    container.innerHTML = html;
}
showreviews()

//Review form
function GetReview(){
    const container = document.querySelector('.review-box')
    const last_child = container.lastElementChild;  //Always gets last child as add review is always last

    //Displays the review form
    var html_form =`<form class="review-form">
                            <label for="username">Username:</label>
                            <input type="text" id="username" placeholder="Enter username" required>
                        
                            <label for="username">Rating:</label>
                            <select id="rating">
                                <option value="1star">1</option>
                                <option value="2star">2</option>
                                <option value="3star">3</option>
                                <option value="4star">4</option>
                                <option value="5star">5</option>
                            </select>

                            <label for="text-review">Write Review:</label>
                            <textarea id="text-review" rows=7 placeholder="Enter comments"></textarea>
                            <br>
                            <button type="submit">Submit</button>
                        </form>`

    last_child.innerHTML = html_form

    const form = document.querySelector('.review-form')
    form.addEventListener('submit', function(y) {
        y.preventDefault();
        var username = document.querySelector('#username').value;
        var rating = document.querySelector('#rating').value;
        var textreview = document.querySelector('#text-review').value;

        dict_rating[username] = {
            'Rating': rating,
            'Comment': textreview,
        }
        showreviews();
        localStorage.setItem('dict_rating',JSON.stringify(dict_rating)); //Adds the new review into the dictionary to display later on (if user leaves page)
    })
}