// Array of project objects. To add a new project, just add a new object here!
const projects = [
    {
        name: 'Project 1',
        url: '/01-Project/index.html',
        bgColor: 'bg-blue-600',
        hoverColor: 'hover:bg-blue-700'
    },
    {
        name: 'Project 2',
        url: '/02-Project/index.html',
        bgColor: 'bg-teal-500',
        hoverColor: 'hover:bg-teal-600'
    },
    {
        name: 'Project 3',
        url: '/03-Project/index.html',
        bgColor: 'bg-red-500',
        hoverColor: 'hover:bg-red-600'
    },
];

// Get the UL element from the HTML
const projectList = document.getElementById('project-list');

// Loop through each project in the array
projects.forEach(project => {
    // 1. Create a new list item (<li>)
    const listItem = document.createElement('li');

    // 2. Create a new anchor tag (<a>)
    const link = document.createElement('a');
    link.href = project.url;
    link.target = '_blank'; // Opens link in a new tab
    link.textContent = project.name; // Set the button text

    // 3. Add all the Tailwind CSS classes for styling
    link.className = `block w-64 text-center ${project.bgColor} text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ${project.hoverColor} hover:scale-105`;

    // 4. Put the anchor tag inside the list item, and the list item inside the UL
    listItem.appendChild(link);
    projectList.appendChild(listItem);
});