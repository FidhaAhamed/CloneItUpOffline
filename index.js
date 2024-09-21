const sidebarIcons = [
    { src: 'Assets/icon1.png', hover: 'Assets/icon1h.png' },
    { src: 'Assets/icon2.png', hover: 'Assets/icon2h.png' },
    { src: 'Assets/icon3.png', hover: 'Assets/icon3h.png' },
    { src: 'Assets/icon4.png', hover: 'Assets/icon4h.png' },
    { src: 'Assets/icon5.png', hover: 'Assets/icon5h.png' },
    { src: 'Assets/icon6.png', hover: 'Assets/icon6h.png' },
];

const tabs = ['All', 'Advertising', 'Design', 'Marketing', 'Illustration', 'Brand'];

const courses = [
    {
        imageClass: 'html',
        imageSrc: 'Assets/HTML.png',
        title: 'HTML for Beginners',
        description: 'Learning HTML for developing modern interactive web applications.',
        tags: ['HTML', 'Web'],
        rating: '★ 4.5'
    },
    {
        imageClass: 'css',
        imageSrc: 'Assets/CSS.png',
        title: 'CSS for Mobile',
        description: 'You\'ll learn about CSS, layouts, wrappers, creating a sticky navbar, and more.',
        tags: ['Engineering', 'Testing'],
        rating: '★ 4.3'
    },
    {
        imageClass: 'js',
        imageSrc: 'Assets/JS.png',
        title: 'JavaScript',
        description: 'This course provides a comprehensive introduction to the JavaScript programming language.',
        tags: ['JavaScript', 'Development'],
        rating: '★ 4.7'
    }
];

const mentors = [
    {
        name: 'John Doe',
        designation: 'Senior Developer',
        experience: '5 years',
        imageSrc: 'Assets/mentor1.png'
    },
    {
        name: 'Jane Smith',
        designation: 'UI/UX Designer',
        experience: '4 years',
        imageSrc: 'Assets/mentor2.png'
    },
    {
        name: 'Emily Johnson',
        designation: 'Project Manager',
        experience: '6 years',
        imageSrc: 'Assets/mentor3.png'
    },
    // Add more mentors as needed
];

// Function to generate sidebar icons
function generateSidebarIcons() {
    const sidebar = document.getElementById('sidebar');
    const logout = document.querySelector('.logout');
    sidebarIcons.forEach(icon => {
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon');

        const img = document.createElement('img');
        img.src = icon.src;
        img.alt = 'Icon';

        iconDiv.appendChild(img);
        
        // Change the icon on hover
        iconDiv.addEventListener('mouseenter', () => {
            img.src = icon.hover;
        });

        iconDiv.addEventListener('mouseleave', () => {
            img.src = icon.src;
        });

        sidebar.insertBefore(iconDiv, logout);
    });
}

// Function to generate tabs
function generateTabs() {
    const tabsList = document.getElementById('tabs');
    tabs.forEach(tab => {
        const li = document.createElement('li');
        li.textContent = tab;
        // Add event listener for tab click (optional)
        li.addEventListener('click', () => {
            alert(`You clicked on ${tab}`);
        });
        tabsList.appendChild(li);
    });
}

// Function to generate courses
function generateCourses() {
    const coursesDiv = document.getElementById('courses');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Course Image
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('course-image');
        const img = document.createElement('img');
        img.src = course.imageSrc;
        img.alt = course.title;
        imageDiv.appendChild(img);

        // Course Info
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('course-info');

        // Title and Rating
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.alignItems = 'center';

        const title = document.createElement('h3');
        title.textContent = course.title;
        titleContainer.appendChild(title);

        const rating = document.createElement('span');
        rating.classList.add('star-rating');
        rating.textContent = course.rating;
        titleContainer.appendChild(rating);

        infoDiv.appendChild(titleContainer);

        // Description
        const description = document.createElement('p');
        description.textContent = course.description;
        infoDiv.appendChild(description);

        // Tags
        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('tags');
        course.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });
        infoDiv.appendChild(tagsDiv);

        // Course Footer (Tags and Button)
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('course-footer');

        // Tags (Reusing the existing tagsDiv)
        footerDiv.appendChild(tagsDiv);

        // Arrow Button
        const button = document.createElement('button');
        button.setAttribute('aria-label', 'View Course');
        button.textContent = '→';
        footerDiv.appendChild(button);

        infoDiv.appendChild(footerDiv);

        // Assemble Course Card
        courseCard.appendChild(imageDiv);
        courseCard.appendChild(infoDiv);

        coursesDiv.appendChild(courseCard);
    });
}

// Function to generate mentor cards
function generateMentors() {
    const mentorsList = document.getElementById('mentors-list');

    mentors.forEach(mentor => {
        // Create mentor card container
        const mentorDiv = document.createElement('div');
        mentorDiv.classList.add('mentor');

        // Mentor Image
        const img = document.createElement('img');
        img.src = mentor.imageSrc;
        img.alt = `${mentor.name} Avatar`;

        // Mentor Details
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('mentor-details');

        const nameP = document.createElement('p');
        nameP.textContent = mentor.name;
        nameP.style.fontWeight = 'bold'; // Optional: Make the name bold

        const designationP = document.createElement('p');
        designationP.textContent = mentor.designation;

        const experienceP = document.createElement('p');
        experienceP.textContent = mentor.experience;

        // Append details to detailsDiv
        detailsDiv.appendChild(nameP);
        detailsDiv.appendChild(designationP);
        detailsDiv.appendChild(experienceP);

        // Assemble mentor card
        mentorDiv.appendChild(img);
        mentorDiv.appendChild(detailsDiv);

        // Append mentor card to mentors list
        mentorsList.appendChild(mentorDiv);
    });
}

// Execute functions on page load
document.addEventListener('DOMContentLoaded', () => {
    generateSidebarIcons();
    generateTabs();
    generateCourses();
    generateMentors(); // Generate mentors
});
