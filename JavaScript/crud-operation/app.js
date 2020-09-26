
const storedMusic = [
    {
        track: 'Hallucinate',
        singer: 'Dua Lipa',
        genre: 'Dance pop'
    }, {
        track: 'Location',
        singer: 'Young F',
        genre: 'Dance pop'
    }, {
        track: 'Rain on me',
        singer: 'Lady Gaga',
        genre: 'Dance pop'
    }
];



storedMusic.forEach((storedMusic) => addMusicToList(storedMusic));


//Add Music into table
function addMusicToList(storedMusic) {
    const list = document.querySelector('#music-list');

    const row = document.createElement('TR')
    row.innerHTML = `
<td>${storedMusic.track}</td>
<td>${storedMusic.singer}</td>
<td>${storedMusic.genre}</td>
<td><a href='#' class='delete' onclick='removeList(event)'><i class="fas fa-trash-alt"></i></a></td>
`;
    list.appendChild(row)
}


//Add Music
function addMusic(e) {
    //Prevent actual submit
    e.preventDefault();

    const track = document.querySelector('#title').value
    const singer = document.querySelector('#singerName').value
    const genre = document.querySelector('#genre').value

    //validate
    if (track === '' || singer === '' || genre === '') {
        showAlert('Please Fill all Fields', 'danger')
    } else {

        let musicList = { track, singer, genre }
        console.log(musicList)

        storedMusic.push(musicList)
        showAlert('Music Added', 'success')
        clearFields()
        addMusicToList(musicList)
    }

}

//Clear Fields
function clearFields() {
    document.querySelector('#title').value = ''
    document.querySelector('#singerName').value = ''
    document.querySelector('#genre').value = ''
}

//Remove Music List
function removeList(el) {
    debugger
    let list = el.target.parentElement.parentElement.parentElement
    list.remove()
    showAlert('Music removed', 'success')
}

function showAlert(message, className) {
    const div = document.createElement('DIV')
    debugger
    // div.className=`${className}`
    div.setAttribute('class', className)
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.inner-content')
    const form = document.querySelector('#music-form')
    container.insertBefore(div, form)
    //vanish in 3seconds
    setTimeout(() => document.querySelector(`.${className}`).remove(),
        2000);
}



// ****Recipe Card****

let recipeCard = {
    title: 'Mutton Pulao',
    serving: 6,
    ingredients: ['Oil', 'Onion', 'Ginger Garlic paste', 'Mutton', 'Rice', 'Spices', 'Mutton stock', 'Yogurt', 'Tomato']
}

console.log('Recipe Name ***' + recipeCard.title + '***')
console.log('Serving: ' + recipeCard.serving)
console.log('Ingredients of ' + recipeCard.title + ' are:')
recipeCard.ingredients.forEach(function (i) {
    console.log(i)
}
)

//*****Reading List****

let readingList = [
    {
        bookTitle: 'The Alchemist',
        author: 'Paulo Coelho',
        isRead: false
    },
    {
        bookTitle: 'The Silent Patient',
        author: 'Alex Michaelides',
        isRead: true
    },
    {
        bookTitle: 'The Forty Rules Of Love',
        author: 'Elif Shafak',
        isRead: false
    },
    {
        bookTitle: 'Peer-e-Kamil',
        author: 'Umera Ahmed',
        isRead: true
    }
]

readingList.forEach(function (element) {
    console.log(element.bookTitle + ' by ' + element.author)

    if (element.isRead === true) {
        console.log('You Already Read ' + element.bookTitle + ' by ' + element.author)
    } else {
        console.log('You Still need to Read ' + element.bookTitle + ' by ' + element.author)
    }
    console.log('****')
})