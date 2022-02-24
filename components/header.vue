<template>
    <div class="header">
        <img src="../static/icon/menu-svgrepo-com.svg" alt="" class="icon">
        <h1>HandsUP</h1>
        <img src="../static/icon/log-out-svgrepo-com.svg" alt="" class="icon">
    </div>
</template>
<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
.header {
box-sizing: border-box;
padding-left: 16px;
padding-right: 16px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #8DC8FF;
color: white;
width: 100%;
position: fixed;
top: 0;
left: 0;
text-align: center;
.icon {
    width: 30px;
    height: 30px;
}
h1 {
    margin-right: auto;
    margin-left: 16px;
}
}
</style>
