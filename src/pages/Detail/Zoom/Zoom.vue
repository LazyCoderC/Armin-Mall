<template>
  <div class="spec-preview">
    <img :src="imgInfo.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgInfo.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    handler(event) {
      // 获取蒙版元素
      let mask = this.$refs.mask;
      // 获取放大图元素
      let big = this.$refs.big;
      // 获取鼠标在图片中的位置并 - 蒙版的宽度的一半，得到实际蒙版需要的偏移量
      let left = event.offsetX - mask.offsetWidth / 2;
      let top = event.offsetY - mask.offsetHeight / 2;

      // 设置不允许蒙版跑出图片
      if (left <= 0) left = 0;
      if (left >= mask.offsetWidth) left = mask.offsetWidth;
      if (top <= 0) top = 0;
      if (top >= mask.offsetHeight) top = mask.offsetHeight;

      mask.style.left = left + "px";
      mask.style.top = top + "px";

      //因为放大图是普通图的两倍，所以普通图移动1像素就得*2
      big.style.left = -2 * left + "px";
      big.style.top = -2 * top + "px";

      // console.log(mask.style);
    },
  },
  computed: {
    // 处理数据，确保如果数据没有请求回来的情况下不为undefined
    imgInfo() {
      return this.skuImageList[this.currentIndex] || {};
    },
  },
  mounted() {
    // 接受ImageList全局事件总线传来的index对应更换图片展示
    this.$bus.$on("getCurrentIndexOfDetailSwiper", (index) => {
      this.currentIndex = index;
    });
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>