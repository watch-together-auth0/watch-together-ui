<template>
  <form @submit.prevent="search" class="full-width">
    <q-input
      ref="qInput"
      outlined
      square
      dense
      bottom-slots
      v-model="searchStr"
      label="Search for videos"
      >
      <template v-slot:after>
        <q-btn v-if="searchStr !== ''" icon="close" round dense flat  @click="searchStr = ''" />
        <q-btn v-else round dense flat icon="fa fa-search" />
      </template>
    </q-input>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchStr: this.$route.query.q || '',
    };
  },
  mounted() {
    if (this.$route.query.q) {
      this.$refs.qInput.focus();
    }
  },
  methods: {
    search() {
      if (this.searchStr === '') { return; }

      this.$router.push({ name: 'search', query: { q: this.searchStr } });
    },
  },
};
</script>

<style>

</style>
