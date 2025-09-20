let skillsCollection = [
    {
        img: "assets/htmlcss.jpeg",
        title: "HTML & CSS"
    },
     {
        img: "assets/JS.jpeg",
        title: "JAVASCRIPT"
    }, {
        img: "assets/bootstrap.jpeg",
        title: "BOOTSTRAP"
    }, {
        img: "assets/csharp.png",
        title: "CSHARP"
    }, {
        img: "assets/dotnet.png",
        title: ".NET"
    }, {
        img: "assets/linq.jpeg",
        title: "LINQ"
    }, {
        img: "assets/postgres.png",
        title: "POSTGRES"
    }, {
        img: "assets/vue.png",
        title: "VUE JS"
    },
    
]

const skills = document.querySelector(".skills");

skillsCollection.forEach(skill => {
    skills.innerHTML += ` 
             <div class="skill col-lg-3">
               <div class="skillContainer">
                <div class="image"> <img src="${skill.img}" alt="image"></div>
                  <p class="mt-5">${skill.title}</p>
               </div>
            </div>`
})