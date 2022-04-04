<template>
  <p>Reaction Time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Fastest!';
    } else if (this.score < 400) {
      this.rank = 'Fast!';
    } else {
      this.rank = 'So Slow!';
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4rem;
  color: yellowgreen;
  font-weight: bold;
}
</style>
