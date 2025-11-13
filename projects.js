let projectsCollection = [
    {
        video: "https://www.youtube.com/embed/MRIzz7zEONg",
        title: "Todo app",
        technology: "Dotnet Entity Framework Core",
        description: "Todo app with Entity Framework Core and MVC Architecture"
    },
    {
        video: "https://www.youtube.com/embed/63Oxug9R-dw",
        title: "Landing Page with Animation",
        technology: "GSAP, HTML, CSS , Javascript",
        description: "Landing Page with GSAP Animation"
    },




]

const projectsContainer = document.querySelector(".projectsContainer");

projectsCollection.forEach(project => {
    projectsContainer.innerHTML += ` 
              <div class="project my-4">
                 <div class="project1"><div class="video-container">
                    <iframe 
                      width="100%" 
                       height="400" 
                       src="${project.video}" 
                        title="Project Demo" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen 
                        loading="lazy">
                    </iframe>
                    </div>
                    </div>
                    <p>Title : Todo app</p>
                    <p>Technology Used :  ${project.title}</p>
                    <p>Description : ${project.description} </p>
                </div>`
})