# React Blog App

## Overview

This is a simple single-page React application that displays a list of blog posts and allows users to view each post in detail. The project uses `react-router` for navigation and includes a modern, responsive design.

## Features

- Displays a list of blog posts
- Clickable links to view blog details
- Responsive design with modern styling
- Uses `react-router` for seamless navigation

---

## Installation & Usage

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Download: https://nodejs.org/)
- **Git** (Download: https://git-scm.com/)

### Steps to Run the Project

1. **Clone the Repository**

```bash
git clone git@github.com:RabbitDaCoder59/ACA_blogPage.git
cd react-blog-app
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`.

---

## Git Basics (Beginner-Friendly Tutorial)

Git is a version control system that helps you track changes in your code.

### How to Start Using Git in a New Project

1. **Initialize a New Git Repository:**

   ```bash
   git init
   ```

   This creates a `.git` folder in your project directory.

2. **Connect Your Local Repository to GitHub:**

   - Create a new repository on GitHub (without initializing README, .gitignore, or a license).
   - Copy the repository URL.
   - Run the following command in your terminal:
     ```bash
     git remote add origin <repository-url>
     ```

3. **Check the Status of Your Files:**

   ```bash
   git status
   ```

4. **Add All Changes to Staging:**

   ```bash
   git add .
   ```

5. **Commit Your Changes:**

   ```bash
   git commit -m "Initial commit"
   ```

6. **Push Your Code to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Common Git Commands

1. **Clone a Repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Check the Status of Your Files:**
   ```bash
   git status
   ```
3. **Add Changes to Staging:**
   ```bash
   git add .
   ```
4. **Commit Your Changes:**
   ```bash
   git commit -m "Your commit message"
   ```
5. **Push Changes to GitHub:**
   ```bash
   git push origin main
   ```
6. **Pull Latest Changes from GitHub:**
   ```bash
   git pull origin main
   ```

---

## JavaScript Basics (Beginner-Friendly Explanation)

JavaScript is a programming language used for building dynamic web applications. Below are key concepts to understand before learning React:

### 1. Variables & Data Types

```js
let name = "John"; // String
const age = 25; // Number
let isStudent = true; // Boolean
```

### 2. Functions

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

### 3. Arrays & Objects

```js
const fruits = ["Apple", "Banana", "Cherry"];
const user = { name: "John", age: 30 };
console.log(user.name); // Output: John
```

### 4. ES6 Features

- **Arrow Functions:**

```js
const add = (a, b) => a + b;
console.log(add(5, 3));
```

- **Destructuring:**

```js
const person = { name: "Alice", age: 22 };
const { name, age } = person;
console.log(name); // Output: Alice
```

### 5. React Basics

- **Components:** Reusable pieces of UI.
- **Props:** Passing data between components.
- **State:** Managing dynamic content in a component.
- **Hooks (e.g., useState, useEffect):** Handling side effects and state in functional components.

---

## Contributing

Feel free to fork this repository and contribute to the project!

---

## License

This project is licensed under the ACA License.
