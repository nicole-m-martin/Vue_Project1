<template>
  <!-- @click.self is a click event modifier  -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <h2>{{ text }}</h2>
      <p>modal content</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
/* h1,
h2 {
  color: black;
} */

.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>
