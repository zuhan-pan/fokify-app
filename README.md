# 🍽️ Forkify Recipe Application

Forkify is a powerful web application for searching, viewing, and saving recipes. With a massive database of recipes, it provides users with an easy-to-navigate interface to find and organize their favorite dishes.

🌐 **Live Demo**: [forkify-application-jonas.netlify.app](https://forkify-application-jonas.netlify.app)

## 🚀 Project Overview

This project is a single-page application (SPA) built with JavaScript. It allows users to search for recipes, view details, bookmark their favorite recipes, and add their own recipes. The application is designed with a modular architecture, ensuring scalability and easy maintenance.

### Key Features

- **Recipe Search**: Search from a vast collection of recipes with a simple keyword.
- **Recipe Details**: View detailed recipe information, including ingredients, instructions, and servings.
- **Pagination**: Easily navigate through search results with pagination.
- **Bookmarking**: Save favorite recipes to the bookmarks section.
- **Add Recipe**: Users can add their own recipes, which are stored locally.

## 💻 Tech Stack

- **JavaScript (ES6+)**: Core logic and asynchronous API requests.
- **Parcel**: Module bundler for handling assets and managing dependencies.
- **HTML & SCSS**: For structuring and styling the application.

## 🛠️ Implementation Details

### Modular Structure

- **Model (model.js)**: Contains the application state (recipes, bookmarks, etc.) and handles data fetching and manipulation.
- **View (recipeView.js, bookmarksView.js, etc.)**: Manages DOM elements and rendering for different sections.
- **Controller (controller.js)**: Acts as the central hub, coordinating between the model and view modules.

### Async/Await

The application leverages asynchronous JavaScript (async/await) for fetching data from an external API, ensuring smooth user interactions without blocking the main thread.

### Data Flow

The app follows a unidirectional data flow, ensuring clarity and control over state changes. See the architecture diagram for reference on data handling and function calls.

### Images

![Architecture Diagram](forkify-architecture-recipe-loading.png)
![Flowchart Part 1](forkify-flowchart-part-1.png)
![Flowchart Part 2](forkify-flowchart-part-2.png)
![Flowchart Part 3](forkify-flowchart-part-3.png)

## 🙏 Acknowledgments

Special thanks to [Jonas Schmedtmann](https://codingheroes.io/) for the inspiration and guidance provided through his tutorial series. This project is based on his concepts but has been customized and enhanced.
