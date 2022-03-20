<template>
  <div>
    <TypeNav></TypeNav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// 引入组件注册
import Container from './Container'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

// 引入swiper样式
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  components: {
    Container,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
};
</script>

<style scoped>
</style>