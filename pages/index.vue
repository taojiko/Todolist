<template>
  <div class="content">
    <Loading/>
    <Header/>
    <TodoList/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss">
  .content {
    margin-top: 100px;
    width: 100%;
    background-color: #F8F8F8;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
  }
</style>