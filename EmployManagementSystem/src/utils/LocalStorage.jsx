
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@gmail.com",
    password: "123",

    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-08-16",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the alignment issue in the navigation bar.",
        taskDate: "2026-08-17",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build the main employee dashboard UI.",
        taskDate: "2026-08-14",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee API with the frontend application.",
        taskDate: "2026-08-13",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Add profile editing functionality for employees.",
        taskDate: "2026-08-18",
        category: "Frontend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Aditya",
    email: "employee2@gmail.com",
    password: "123",

    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Registration Form",
        taskDescription: "Create a registration form with validation.",
        taskDate: "2026-08-16",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Database",
        taskDescription: "Create the required database tables for employees.",
        taskDate: "2026-08-12",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Form Validation",
        taskDescription: "Add email and password validation to the form.",
        taskDate: "2026-08-17",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest version of the application.",
        taskDate: "2026-08-10",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document all available API endpoints.",
        taskDate: "2026-08-19",
        category: "Documentation"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@gmail.com",
    password: "123",

    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Card",
        taskDescription: "Design reusable employee cards for the dashboard.",
        taskDate: "2026-08-16",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Error",
        taskDescription: "Resolve the login authentication issue.",
        taskDate: "2026-08-13",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Task Component",
        taskDescription: "Build a reusable task component for employee tasks.",
        taskDate: "2026-08-17",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Website",
        taskDescription: "Improve the performance of the website.",
        taskDate: "2026-08-11",
        category: "Performance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark mode functionality in the application.",
        taskDate: "2026-08-20",
        category: "Frontend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Vivek",
    email: "employee4@gmail.com",
    password: "123",

    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design and develop the company landing page.",
        taskDate: "2026-08-16",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Update outdated npm packages in the project.",
        taskDate: "2026-08-14",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to the employee dashboard.",
        taskDate: "2026-08-18",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Responsive Design",
        taskDescription: "Fix mobile and tablet layout issues.",
        taskDate: "2026-08-12",
        category: "CSS"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Settings Page",
        taskDescription: "Build the application settings page.",
        taskDate: "2026-08-21",
        category: "Frontend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@gmail.com",
    password: "123",

    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Implement login and logout functionality.",
        taskDate: "2026-08-16",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Database Schema",
        taskDescription: "Design the database schema for the project.",
        taskDate: "2026-08-13",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Logout Feature",
        taskDescription: "Add logout functionality for employees.",
        taskDate: "2026-08-17",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test API",
        taskDescription: "Test all API endpoints and fix failed requests.",
        taskDate: "2026-08-11",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Create an employee performance report section.",
        taskDate: "2026-08-22",
        category: "Reports"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return {employees,admin}
}