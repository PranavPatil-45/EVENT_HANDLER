




# React Paginated Posts App

A simple React application that fetches and displays paginated posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API using Bootstrap for styling.

## 📌 Features

- Fetches posts from a mock REST API (`jsonplaceholder.typicode.com`)
- Pagination using `_page` and `_limit` query parameters
- Displays loading and error states
- Styled using React-Bootstrap
- Reusable and minimal component-based design

## 🚀 Video
https://drive.google.com/file/d/1A0wUO9uvjpVpfZygIbvIxaWfG78ciumC/view?usp=sharing



## 📂 Project Structure


├── public/
├── src/
│   ├── App.js           # Main logic (fetching, pagination, rendering)
│   ├── styles.css       # Custom CSS
│   └── index.js
├── package.json
└── README.md



## ⚙️ Setup Instructions

1. **Clone the repository**
git clone https://github.com/your-username/react-paginated-posts.git
cd react-paginated-posts


2. **Install dependencies**


npm install


3. **Run the application**

npm start


## 🧠 How It Works

* Uses `useState` and `useEffect` hooks.
* The `fetch` call gets 10 posts per page.
* `page` state variable controls the `_page` query parameter.
* Two buttons allow navigating between pages.
* Bootstrap cards display individual posts.

```js
fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
```

## 🔧 Technologies Used

* React
* React Hooks (`useState`, `useEffect`)
* Bootstrap + React-Bootstrap
* JSONPlaceholder API

## ✅ Improvements To Add

* Add a loading spinner instead of simple "Loading.."
* Enhance UI with more card content
* Improve pagination logic (e.g., disable "Next" when no more data)
* Add search or filter functionality

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

