let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.circle');
let text = document.getElementById('text');

const pieces = ["Keep Learning and Stay Updated: Web development is a rapidly evolving field with new technologies, frameworks, and best practices emerging regularly. Make sure to stay updated with the latest trends, tools, and techniques through online resources, tutorials, forums, and communities. Continuously learning will help you stay relevant and improve your skills.",
    "Practice Responsive Design: With the increasing use of mobile devices, it's essential to create websites that are responsive and adapt to different screen sizes.Practice responsive design principles from the start, ensuring your websites are visually appealing and functional across various devices.Use CSS media queries, flexible layouts, and responsive frameworks like Bootstrap to optimize your designs.",
    "Focus on Performance: Website performance is crucial for providing a smooth user experience and improving search engine rankings. Optimize your code by minimizing file sizes, reducing HTTP requests, and leveraging caching techniques. Pay attention to image optimization, code minification, and using content delivery networks (CDNs) for faster loading times.",
    "Test and Debug Regularly: Bugs and issues can arise during the development process. It's crucial to test your website thoroughly on different browsers, devices, and operating systems. Use debugging tools and techniques to identify and fix any errors or inconsistencies. Cross-browser testing, unit testing, and user testing will help ensure your website functions correctly and delivers a seamless experience."]

let currentActive = 1;

text.innerHTML = pieces[currentActive - 1];

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length)
        currentActive = circles.length

    update();
})


prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1)
        currentActive = 1

    update();
})



const update = () => {
    // add or remove active class from circles
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        }
    })


    // to control width of progress line
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';


    // to add or remove disabled
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    // update text 
    text.innerHTML = pieces[currentActive - 1];
}