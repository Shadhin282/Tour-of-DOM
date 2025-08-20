// console.log("amake k ki dekha jai.")

// const sections = document.getElementsByTagName("section");
const sections = document.querySelectorAll('section')
// console.log(sections)

for (const section of sections) {
    // section.style.backgroundColor = 'lightblue'
    // section.style.color = 'white'
    // section.style.border = '2px'
    // section.style.borderRadius = '15px'
    // section.style.padding = '20px'
    // section.style.marginBottom = '10px'
    section.classList.add('section-card')
}
