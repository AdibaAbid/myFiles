const employees = [
  {
    name: "Ben",
    title: "Software developer",
    institute: "Harvard University",
    email: "ben@gmail.com",
    image: "./ben.jpg",
    socialMedia: [
      {
        dribble: {
          url: "https://dribbble.com",
          cssClasses: "fa fa-dribbble",
        },
        twitter: {
          url: "https://twitter.com",
          cssClasses: "fa fa-twitter",
        },
        linkedIn: {
          url: "https://www.linkedin.com",
          cssClasses: "fa fa-linkedin",
        },
        facebook: {
          url: "https://www.facebook.com",
          cssClasses: "fa fa-facebook",
        },
      },
    ],
  }, 
  {
    name: "Benjabin",
    title: "Software developer",
    institute: "Harvard University",
    email: "ben@gmail.com",
    image: "./john.jpg",
    socialMedia: [
      {
        dribble: {
          url: "",
          cssClasses: "",
        },
        twitter: {
          url: "",
          cssClasses: "",
        },
        linkedIn: {
          url: "",
          cssClasses: "",
        },
        facebook: {
          url: "",
          cssClasses: "",
        },
      },
    ],
  },
  {
    name: "Seemah",
    title: "Software developer",
    institute: "Harvard University",
    email: "ben@gmail.com",
    image: "./seema.jpeg",
    socialMedia: [
      {
        dribble: {
          url: "",
          cssClasses: "",
        },
        twitter: {
          url: "",
          cssClasses: "",
        },
        linkedIn: {
          url: "",
          cssClasses: "",
        },
        facebook: {
          url: "",
          cssClasses: "",
        },
      },
    ],
  },
  {
    name: "Hannah",
    title: "Mobile developer",
    institute: "Harvard University",
    email: "hannah@gmail.com",
    image: "./hanah.jpeg",
    socialMedia: [
      {
        dribble: {
          url: "",
          cssClasses: "",
        },
        twitter: {
          url: "",
          cssClasses: "",
        },
        linkedIn: {
          url: "",
          cssClasses: "",
        },
        facebook: {
          url: "",
          cssClasses: "",
        },
      },
    ],
  },
];

document.body.innerHTML = employees.map(function(employee){
  return `<div class="card">
  <img src=${employee.image} alt=${employee.name} style="width: 100%;" />
  <h1>${employee.name}</h1>
  <p class="title">${employee.title}</p>
  <p>${employee.institute}</p>
${SocialMediaa()}
  <p><a href = ${employee.email}><button>Contact</button></a></p>
</div>`
}).join('');


function SocialMediaa(){
  const array = employees.socialMedia
  array.map(function(item){
// 

  //  return`<a href=${i.url}><i class=${item.dribble.cssClasses}></i></a> `
    console.log(item)
  })
}

  // <a href="#"><i class="fa fa-dribbble"></i></a>
  // <a href="#"><i class="fa fa-twitter"></i></a>
  // <a href="#"><i class="fa fa-linkedin"></i></a>
  // <a href="#"><i class="fa fa-facebook"></i></a>