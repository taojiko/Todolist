<template>
    <div class="loading" v-if="isLoading">
        <h1>...loading</h1>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            isLoading: 'data/isLoading',
        }),
    }
}
</script>
<style lang="scss">
    .loading{
        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(170, 170, 170, 0.8);
            h1{
            color: black;
            font-size: 60px;
        }  
    }

</style>