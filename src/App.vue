<template>
  <div id="app">
    <MainScheme
      :table = "TABLE"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
//import MetaData from '@/components/MetaData.vue'
import MainScheme from '@/components/MainScheme.vue'
//mport AbOb from '@/components/AbOb.vue'

export default {
  name: 'App',
  components: {
    MainScheme
  },
  data: () => {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'TABLE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_TABLE_FROM_API'
    ])
  },
  mounted() {
    this.GET_TABLE_FROM_API()
  }
};
</script>

<style>
.meta {
  margin-bottom: 20px;
}
</style>
