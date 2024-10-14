<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- Navigation Links -->
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    
    <!-- Router View for showing current route components -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // This array will hold the list of products
      products: [],
    };
  },
  methods: {
    // Method to add a new product to the product list
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    
    // Method to edit an existing product in the product list
    editProduct({ index, editedProduct }) {
      this.$set(this.products, index, editedProduct);
    },
  },
};
</script>

<style scoped>
/* Add basic styles for navigation */
nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}
</style>
