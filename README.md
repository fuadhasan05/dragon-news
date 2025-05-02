# Dragon News

Dragon News is a React-based news application built with Vite. It provides a dynamic and responsive interface for displaying categorized news articles, complete with features like author details, ratings, and views.

## Features

- **Dynamic News Categories**: News articles are filtered and displayed based on categories.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly and modern UI.
- **Reusable Components**: Modular components like `NewsCard` and `CategoryNews` for scalability.
- **React Router**: Dynamic routing for seamless navigation between categories.
- **React Icons**: Beautiful icons for ratings, views, and other UI elements.

---

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development environment for React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For dynamic routing.
- **React Icons**: For adding icons to the UI.

---

## Project Structure

```
dragon-news/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── NewsCard.jsx    # Component for displaying individual news
│   │   ├── pages/
│   │   │   ├── CategoryNews.jsx # Component for displaying category-specific news
│   ├── layout/
│   │   ├── HomeLayout.jsx  # Main layout for the app
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
├── README.md               # Project documentation
├── package.json            # Project dependencies and scripts
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dragon-news.git
   ```
