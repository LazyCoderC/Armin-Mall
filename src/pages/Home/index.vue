<template>
  <div>
    <TypeNav></TypeNav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入组件注册
import Container from "./Container";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";


export default {
  name: "Home",
  components: {
    Container,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: (state)=> state.home.getFloorList 
    })
  }
};
</script>

<style scoped>
</style>