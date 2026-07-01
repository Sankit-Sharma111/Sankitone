import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Landing Page",
    description: "Build a simple landing page with Hero, Features, and CTA sections.",
    initialHtml: `<header>
  <h1>My Awesome App</h1>
</header>
<main>
  <section class="hero">
    <h2>Welcome to the future</h2>
    <button>Get Started</button>
  </section>
</main>`,
    initialCss: `body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: #333;
  color: white;
  padding: 1rem;
}
.hero {
  text-align: center;
  padding: 50px 20px;
  background: #f4f4f4;
}`
  },
  {
    id: "p2",
    title: "About Me Page",
    description: "A personal portfolio page with profile image and skills.",
    initialHtml: `<div class="profile-card">
  <img src="https://via.placeholder.com/150" alt="Profile" />
  <h2>John Doe</h2>
  <p>Web Developer</p>
</div>`,
    initialCss: `.profile-card {
  width: 300px;
  margin: 50px auto;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.profile-card img {
  border-radius: 50%;
}`
  },
  {
    id: "p3",
    title: "Product Card",
    description: "An e-commerce product card with image and buy button.",
    initialHtml: `<div class="product">
  <img src="https://via.placeholder.com/200" alt="Product" />
  <h3>Cool Sneakers</h3>
  <p>$99.99</p>
  <button>Add to Cart</button>
</div>`,
    initialCss: `.product {
  width: 250px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
}
.product img {
  max-width: 100%;
}
.product button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}`
  },
  {
    id: "p4",
    title: "Login Form",
    description: "A clean and modern login form.",
    initialHtml: `<form class="login-form">
  <h2>Login</h2>
  <input type="text" placeholder="Username" />
  <input type="password" placeholder="Password" />
  <button type="submit">Sign In</button>
</form>`,
    initialCss: `.login-form {
  max-width: 300px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.login-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-form button {
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
}`
  },
  {
    id: "p5",
    title: "Navigation Menu",
    description: "A responsive horizontal navigation menu.",
    initialHtml: `<nav class="navbar">
  <div class="logo">Brand</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,
    initialCss: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: white;
  padding: 10px 20px;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
.nav-links a {
  color: white;
  text-decoration: none;
}`
  }
];
