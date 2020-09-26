
// *****Videos Data Task******

let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
];

//Question no1.
// Add at least 10 more videos to the above array and before writing the following programs in JS.

let videosNewArray = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "JavaScript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "JavaScript tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-25-2019"),
        tags: "Programming, webDevelopment, JavaScript, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "React tutorial",
        lengthInMinutes: 12,
        category: "Education",
        uploadDate: new Date("08-03-2019"),
        tags: "Programming, web Development",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use For in Loop - tutorial by Tech Karo",
        lengthInMinutes: 2,
        category: "Education",
        uploadDate: new Date("11-6-2018"),
        tags: "JavaScript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "Self Awareness - tutorial by Tech Karo",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("7-10-2018"),
        tags: "JavaScript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "How to become a Web Development - tutorial by Tech Karo",
        lengthInMinutes: 2,
        category: "Education",
        uploadDate: new Date("11-10-2019"),
        tags: "JavaScript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "How to use Arrays - tutorial by Tech Karo",
        lengthInMinutes: 5,
        category: "Education",
        uploadDate: new Date("11-9-2018"),
        tags: "JavaScript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "How to use Loops - tutorial by Tech Karo",
        lengthInMinutes: 4,
        category: "Education",
        uploadDate: new Date("11-12-2018"),
        tags: "JavaScript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },

]

// Question no.2
// Print each video in this format:

// Title: Photoshop tutorial
// Length: 70 minutes
// Category: Education
// Views: 4,700
// Uploaded On: 22-July-2019
// Rating:

videosNewArray.forEach(function(items){
    console.log(`
    Title: ${items.title}
    Length: ${items.lengthInMinutes}
    Category: ${items.category}
    View: ${items.viewCount}
    Uploaded: ${items.uploadDate.getDate()}-${items.uploadDate.getMonth()+1}-${items.uploadDate.getFullYear()}
    Rating: ${items.rating}
    `)
})

//Question no.3
//Print titles of all short ( less than 3 minutes ) videos.

videosNewArray.filter(function(items){
    if(items.lengthInMinutes < 3){
        console.log(`
        Titles of Short Videos: 
        ${items.title}
        `)
    }
})

//Question no.4
//Print titles of all long ( greater than 20 minutes ) videos.

videosNewArray.filter(function(items){
    if(items.lengthInMinutes > 20 ){
        console.log(`
        Titles of Long Videos: 
        ${items.title}
        `)
    }
})

//Question n0.5
//Print titles of all medium length videos.

videosNewArray.filter(function(items){
    if(items.lengthInMinutes >= 3 && items.lengthInMinutes <= 20 ){
        console.log(`
        Titles of Medium Videos: 
        ${items.title}
        `)
    }
})

//Question no.6
//Print title of the longest video
let longestVideoArray =[]
videosNewArray.forEach(function(items){
   longestVideoArray.push(items.lengthInMinutes)
})
let longestVideo = Math.max (...longestVideoArray)
videosNewArray.forEach(function(item){
    if(item.lengthInMinutes=== longestVideo){
        console.log(`
        Titles of Longest Videos: 
        ${item.title}
        `)
    }
})

//Question no.7
//Print titles of all "Educational" videos
videosNewArray.filter(function(item){
    if(item.category=='Educational'){
        console.log(`
        Series of Educational Videos: 
        ${item.title}
        `)
    }
})

//Question no.8
//Print titles of all videos with tag "Javascript"

videosNewArray.forEach((item) => {
    item.tags.includes("JavaScript") ? console.log(`Title: ${item.title}`) : "" 
  });
  

//Question no.9
//Print titles of all videos with tag "HD Features"

videosNewArray.forEach((item) => {
    item.features.includes("HD") ? console.log(`Title: ${item.title}`) : "" 
  });

//Question no.10
//Print titles of all videos uploaded today

let currentDate = new Date()
videosNewArray.forEach(function(item){
    if(item.uploadDate == currentDate){
        console.log(`Today Videos Uploadesd are : ${item.title}`)
    }
})
//Question no.11
// Print titles of all videos uploaded this Week

videosNewArray.forEach(function(item){
    if(item.uploadDate.getDate()=== new Date().getDay()){
        console.log(`Title: ${item.title}`)
    }
})


//Question no.12
// Print titles of all videos uploaded this month


let today = new Date();

videosNewArray.forEach((video) => {
  video.uploadDate.getMonth() == today.getMonth() &&
  video.uploadDate.getFullYear() == today.getFullYear()
    ? console.log(`Title:  ${video.title}`)
    :""
})


//Question no.13
// Print titles of all videos uploaded this year

videosNewArray.forEach((video) => {
    video.uploadDate.getFullYear() == today.getFullYear()
      ? console.log(`Title: ${video.title}`)
      : "";
  });
  
  
//Question no.14
//Sort the array in ascending order of number of views and print the titles
videosNewArray.sort(function(a,b){
   return parseFloat(a.viewCount) - parseFloat(b.viewCount)
})
videosNewArray.forEach(function(video){
    console.log(`Title: ${video.title}`)
})

//Question no.15
//Sort the array in ascending order of rating and print the titles

videosNewArray.sort((a,b)=> parseFloat(a.rating)- parseFloat(b.rating))

videosNewArray.forEach((item)=>{
    console.log(`Title Of : ${item.title}`)
})