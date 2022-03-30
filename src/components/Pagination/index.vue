<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="pageStartAndEnd.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-if="pageStartAndEnd.start > 2">···</button>

    <button
      v-for="(page, index) in pageStartAndEnd.range"
      :key="index"
      @click="$emit('getPageNo', page)"
    >
      {{ page }}
    </button>

    <button v-if="pageStartAndEnd.end < totalPage - 1">···</button>
    <button
      v-if="pageStartAndEnd.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ this.totalPage }}
    </button>
    <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ this.total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 获取数据需要的页数
    totalPage() {
      // 向上取整，保证不被整除的数据也会有页去展示
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算页续开始页和结束页
    pageStartAndEnd() {
      let start = 0,
        end = 0,
        range = [];
      let { totalPage, continues, pageNo } = this;
      // 问题1：计算出来的总页数没有页续大
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // 问题2：如果当前页数接近开始页
        if (start < 1) {
          start = 1;
          end = continues;
        } else if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      // 计算起止范围之间的数并存储在数组range里
      for (var i = start; i <= end; i++) {
        range.push(i);
      }
      return { range, start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>