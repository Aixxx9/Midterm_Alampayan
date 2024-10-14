<!-- src/components/ProductForm.vue -->
<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Product Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="price" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="description"></textarea>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        price: '',
        description: '',
      };
    },
    methods: {
      submitForm() {
        const newProduct = {
          name: this.name,
          price: this.price,
          description: this.description,
        };
        this.$emit('add-product', newProduct);
        this.name = '';
        this.price = '';
        this.description = '';
      },
    },
  };
  </script>
  