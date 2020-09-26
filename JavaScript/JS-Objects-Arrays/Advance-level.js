// *****Recipe Card********

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let recipeCard = {
    title: 'Mutton Pulao',
    serving:6,
    ingredients:['Oil','Onion','Ginger Garlic paste','Mutton','Rice','Spices','Mutton stock','Yogurt','Tomato']
}

console.log('Recipe Name ***'+ recipeCard.title+'***')
console.log('Serving: '+ recipeCard.serving)
console.log('Ingredients of '+recipeCard.title+' are:')
recipeCard.ingredients.forEach(function(i){
console.log(i)
}
)

// ------------------------------------------------------------
// *******The Reading List*******


let readingList =[
    {
        bookTitle:'The Alchemist',
        author:'Paulo Coelho',
        isRead : false
    },
    {
        bookTitle:'The Silent Patient',
        author:'Alex Michaelides',
        isRead : true
    },
    {
        bookTitle:'The Forty Rules Of Love',
        author:'Elif Shafak',
        isRead : false
    },
    {
        bookTitle:'Peer-e-Kamil',
        author:'Umera Ahmed',
        isRead : true
    }
]

readingList.forEach(function(element){
    console.log(element.bookTitle + ' by ' + element.author )
   
    if(element.isRead === true){
        console.log('You Already Read '+ element.bookTitle+' by '+element.author)
    }else{
        console.log('You Still need to Read '+ element.bookTitle+' by '+element.author)
    }
     console.log('****')
})