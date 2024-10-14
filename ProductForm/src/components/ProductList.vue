<!-- src/components/ProductList.vue -->
<template>
    <div>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <div v-if="editingIndex === index">
            <input v-model="editedProduct.name" placeholder="Product Name" />
            <input v-model="editedProduct.price" placeholder="Price" type="number" />
            <textarea v-model="editedProduct.description" placeholder="Description"></textarea>
            <button @click="saveProduct(index)">Save</button>
          </div>
          <div v-else>
            <strong>{{ product.name }}</strong> - ${{ product.price }}
            <p>{{ product.description }}</p>
            <button @click="editProduct(index)">Edit</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    data() {
      return {
        editingIndex: null,
        editedProduct: {
          name: '',
          price: '',
          description: '',
        },
      };
    },
    methods: {
      editProduct(index) {
        this.editingIndex = index;
        this.editedProduct = { ...this.products[index] };
      },
      saveProduct(index) {
        this.$emit('edit-product', { index, editedProduct: this.editedProduct });
        this.editingIndex = null;
      },
    },
  };
  </script>
  