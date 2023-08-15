const protofolioData = [
    { title: "Proyek 1", description: "Deskripsi Proyek 1" },
    { title: "Proyek 2", description: "Deskripsi Proyek 2" },
    { title: "Proyek 3", description: "Deskripsi Proyek 3" }
]

const protofolioContainer = document.getElementById("portofolioContainer")

protofolioData.forEach(project => {
    const projectItem = document.createElement("div")
    projectItem.className = "item"
    projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    `;
    protofolioContainer.appendChild(projectItem);
})

//section for search
const form = document.querySelector('form')
const items = document.querySelectorAll('.item')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const searchTerm = form.search.value.tolowerCase();

    items.forEach(item => {
        const projectTitle = item.querySelector('h2').textContent.tolowerCase();
        const projectDescription = item.querySelector('p').textContent.tolowerCase();

        if(projectTitle.includes(searchTerm)|| projectDescription.includes(searchTerm)){
            item.style.display = "blok";
        }else{
            item.style.display = "none"
        }
    })
})
