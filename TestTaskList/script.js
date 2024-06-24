document.addEventListener('DOMContentLoaded', function() {
    const categoryForm = document.getElementById('categoryForm');
    const categoryInput = document.getElementById('categoryInput');
    const categoryList = document.getElementById('categoryList');
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');

    let currentCategory = null;

    // Function to retrieve categories from local storage
    function getCategories() {
        return JSON.parse(localStorage.getItem('categories')) || [];
    }

    // Function to save categories to local storage
    function saveCategories(categories) {
        localStorage.setItem('categories', JSON.stringify(categories));
    }

    // Function to retrieve tasks from local storage
    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || {};
    }

    // Function to save tasks to local storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to display categories
    function displayCategories() {
        categoryList.innerHTML = '';
        const categories = getCategories();
        categories.forEach(function(category) {
            const li = document.createElement('li');
            li.className = 'category-item';
            li.textContent = category;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation();
                const updatedCategories = categories.filter(cat => cat !== category);
                saveCategories(updatedCategories);
                deleteCategoryTasks(category);
                displayCategories();
                if (currentCategory === category) {
                    currentCategory = null;
                    taskForm.style.display = 'none';
                }
            });
            li.appendChild(deleteButton);

            li.addEventListener('click', function() {
                if (currentCategory === category) {
                    currentCategory = null;
                    taskForm.style.display = 'none';
                    displayTasks(null);
                } else {
                    currentCategory = category;
                    displayTasks(currentCategory, li);
                    taskForm.style.display = 'flex';
                    li.insertAdjacentElement('afterend', taskForm);
                }
            });

            categoryList.appendChild(li);
        });
    }

    // Function to delete all tasks of a category
    function deleteCategoryTasks(category) {
        const allTasks = getTasks();
        delete allTasks[category];
        saveTasks(allTasks);
    }

    // Function to display tasks
    function displayTasks(category, categoryElement) {
        // Remove existing task list if present
        const existingTaskList = categoryList.querySelector('.task-list');
        if (existingTaskList) {
            existingTaskList.remove();
        }

        if (!category) {
            taskForm.style.display = 'none';
            return;
        }

        const taskList = document.createElement('ul');
        taskList.className = 'task-list';
        const allTasks = getTasks();
        const tasks = allTasks[category] || [];
        tasks.forEach(function(task, index) {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.addEventListener('click', function() {
                tasks.splice(index, 1);
                allTasks[category] = tasks;
                saveTasks(allTasks);
                displayTasks(category, categoryElement);
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });

        // Insert the task form and task list in the correct order
        taskForm.style.display = 'flex';
        categoryElement.insertAdjacentElement('afterend', taskList);
        taskList.insertAdjacentElement('beforebegin', taskForm);
    }

    // Event listener for category form submission
    categoryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const categoryValue = categoryInput.value.trim();
        if (categoryValue !== '') {
            const categories = getCategories();
            if (!categories.includes(categoryValue)) {
                categories.push(categoryValue);
                saveCategories(categories);
                displayCategories();
                categoryInput.value = '';
            }
        }
    });

    // Event listener for task form submission
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskValue = taskInput.value.trim();
        if (taskValue !== '' && currentCategory) {
            const allTasks = getTasks();
            if (!allTasks[currentCategory]) {
                allTasks[currentCategory] = [];
            }
            allTasks[currentCategory].push(taskValue);
            saveTasks(allTasks);
            const categoryElements = categoryList.querySelectorAll('.category-item');
            categoryElements.forEach(function(categoryElement) {
                if (categoryElement.textContent.includes(currentCategory)) {
                    displayTasks(currentCategory, categoryElement);
                }
            });
            taskInput.value = '';
        }
    });

    // Initial display of categories and tasks
    displayCategories();
    displayTasks(null);
});