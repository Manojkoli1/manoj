let projectsCollection = [
    {
        video: "assets/todoEF.mp4",
        title: "Todo app",
        technology: "Dotnet Entity Framework Core",
        description: "Todo app with Entity Framework Core and MVC Architecture"
    },
    {
        video: "assets/Rejoice.mp4",
        title: "Landing Page with Animation",
        technology: "GSAP, HTML, CSS , Javascript",
        description: "Landing Page with GSAP Animation"
    },
     
    
    
   
]

const projectsContainer = document.querySelector(".projectsContainer");

projectsCollection.forEach(project => {
    projectsContainer.innerHTML += ` 
              <div class="project my-4">
                   <div class="project1"> </div>
                    <p>Title : Todo app</p>
                    <p>Technology Used :  ${project.title}</p>
                    <p>Description : ${project.description} </p>
                </div>`
})