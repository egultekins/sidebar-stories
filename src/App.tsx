
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from './ContentPage'
import Layout from './Layout';



const pages = [
  {path: '/', title: " WHAT IS Next.js ", content:" Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG). It simplifies the development of modern web applications by offering built-in routing, API handling, and performance optimizations such as automatic code splitting. Next.js is widely used for building fast, scalable, and SEO-friendly applications."},
  {path: '/react', title: " WHAT IS React", content: "React is a JavaScript library for building user interfaces, developed by Facebook. It follows a component-based architecture, allowing developers to create reusable UI elements. React uses a virtual DOM for efficient updates, making applications fast and responsive. It is widely adopted for building both web and mobile applications. "},
  {path: '/vite', title: "WHAT IS Vite", content: "Vite is a modern front-end build tool that provides a fast development environment. It leverages native ES modules and Hot Module Replacement (HMR) to speed up development. Unlike traditional bundlers, Vite compiles and serves modules on demand, making it significantly faster, especially for large projects."},
  {path: '/typescript', title: "WHAT IS Typescript", content: "TypeScript is a strongly typed superset of JavaScript that enhances code quality by introducing static type checking. It helps developers catch errors early, improve maintainability, and boost productivity. TypeScript is widely used in modern web development, especially with frameworks like React and Next.js."},
  {path: '/tailwind', title: "WHAT IS Tailwind CSS?", content: "Tailwind CSS is a utility-first CSS framework that allows developers to create responsive and highly customizable designs with minimal effort. It provides a set of predefined utility classes that help in rapid UI development while maintaining consistency. Tailwind is widely used in modern front-end development for its flexibility and efficiency."},

];


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={<Content title={page.title} content={page.content} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 
