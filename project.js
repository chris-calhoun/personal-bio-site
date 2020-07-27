console.log("Testing")

const projects = [{
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Test Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}]


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const createProjectCards = () => {
    let domString = "";
    for (let i = 0; i < projects.length; i++) {
        if (`${projects[i].available}` === 'true') {
            domString += `<div class="projectCard">`;
            domString += `  <div class="project-title"><h2>${projects[i].title}</h2></div>`;
            domString += `  <div class="project-screenshot"><img src = "${projects[i].screenshot}" alt = "Image of ${projects[i].title} project."></div>`;
            domString += `  <div class="project-description"><h3>${projects[i].description}</h3></div>`;
            domString += `  <div class="project-technolgiesUsed"><h3>${projects[i].technologiesUsed}</h3></div>`;
            domString += `  <div class="project-availability"><h3>${projects[i].available}</h3></div>`;
            domString += `  <div class="project-url"><h3>${projects[i].url}</h3></div>`;
            domString += `  <div class="project-githubUrl"><h3>${projects[i].githubUrl}</h3></div>`;
            domString += `</div>`;
        }
    }
    printToDom("projectsPage", domString);
};

createProjectCards();