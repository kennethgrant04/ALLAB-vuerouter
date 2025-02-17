<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  padding: 20px;
  text-align: center;
}

nav a {
  color: black;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  padding: 5px 10px;
  border: 2px solid transparent; /* Add border with transparent color */
  border-radius: 6px; 
}

nav a:hover {
  text-decoration: underline;
  color: #2d9eea; 
  border-color: #2d9eea; 
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
