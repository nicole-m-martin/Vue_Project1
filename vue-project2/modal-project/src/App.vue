<template>
  <h1>{{ title }}</h1>
  <p>Welcome....</p>
  <teleport to=".modal" v-if="showModal">
    <!-- SLOTS to inject a Template, with an open and closing Component-->
    <Modal theme="sale" @close="toggleModal">
      <!-- Custom Slot Name with v-slot -->
      <template v-slot:links>
        <a href="#">Sign up for sale</a>
        <a href="#">More Info</a>
      </template>
      <h1>Sale on Rollerblade's!</h1>
      <p>Get some blades at half price!</p>
    </Modal>
  </teleport>

  <teleport to=".modal" v-if="showModal2">
    <Modal @close="toggleModal2">
      <template v-slot:links2>
        <a href="#">sale items</a>
        <a href="#">More Info on Skates</a>
      </template>
      <h1>Sale on Rollerskates!</h1>
      <p>Get some skates at half price!</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">open modal (option)</button>
  <button @click="toggleModal2">open 2nd modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app,
.modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #eee;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
