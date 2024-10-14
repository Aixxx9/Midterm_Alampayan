<!-- src/pages/ProductsPage.vue -->
<template>
    <div>
      <ProductForm @add-product="addProduct" />
      <ProductList :products="products" @edit-product="editProduct" />
    </div>
  </template>
  
  <script>
  import ProductForm from '@/components/ProductForm.vue';
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    methods: {
      addProduct(product) {
        this.products.push(product);
      },
      editProduct({ index, editedProduct }) {
        this.$set(this.products, index, editedProduct);
      },
    },
    components: {
      ProductForm,
      ProductList,
    },
  };
  </script>
  