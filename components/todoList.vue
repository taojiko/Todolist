<template>
  <div class="items">
    <h1>Todo List</h1>
    <div class="group" :class="{active: list.done}" v-for="(list, index) in getData" :key="index" @dblclick="editTodo(list,index)">
      <input type="checkbox" class="done" :checked="list.done" @change="fixActive(list, index)">
      <div class="show" v-if="index !== choiceIndex">
          <span>{{list.text}}</span>
          <button @click="remove(index)">remove</button>
      </div>
      <div class="fix" v-if="index === choiceIndex">
        <input type="text" v-model="cacheTodo" @keyup.esc="leaveEdit" @keyup.enter="doneEdit" >
        <button @click="doneEdit">修改</button>
      </div>
      
    </div>


    <div class="save">
      <input v-model="todo" type="text" placeholder="請輸入要做的事情" @keyup.enter="add(todo)"> 
      <button @click="add(todo)">add</button>
    </div>
    
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'TodoList',
  data(){
    return {
      todo: '',
      cacheTodo: '',
      choiceIndex: '',
      activeDone: false,
      copyData: [],
    }
  },
  computed: {
    ...mapGetters({
      getData: 'data/getData',
    }),
  },
  watch: {
    getData: {
      handler: function(val, oval){
        this.copyData  = JSON.parse(JSON.stringify(val));
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions({
      delayLoading: 'data/delayLoading',
    }),
    leaveEdit() {
      this.choiceIndex = '';
      this.cacheTodo = '';
    },
    doneEdit() {
      this.copyData[this.choiceIndex].text = this.cacheTodo;
      this.$store.dispatch('data/apiFix', this.copyData);
      this.delayLoading(true)
      this.choiceIndex = '';
      this.cacheTodo = '';
    },
    fixActive(list, index){
      this.copyData[index].done = !list.done;
      this.$store.dispatch('data/apiFix', this.copyData);
      this.delayLoading(true)
    },
    editTodo(list,index) {
      this.choiceIndex = index;
      this.cacheTodo = list.text;
      this.activeDone = list.done;
    },
    add(todo){
      this.$store.dispatch('data/apiAdd', {text:todo,done:false})
      this.delayLoading(true)
      this.todo = '';
    },
    remove(index){
      this.$store.dispatch('data/apiRemove', index)
      this.delayLoading(true)
    }
  },
}
</script>

<style lang="scss" scoped>
  .items {
    display: flex;
    flex-direction: column;
    background: white;
    border: solid 1px #C7C3C6;
    border-radius: 4px;
    h1 {
      padding: 0 16px;
    }
  }
  .group {
    display: flex;
    align-items: center;
    &:first-child {
      display: none;
    }
    &.active {
      color: #8DC8FF;
    }
    padding: 10px;
    .done {
      margin-right: 16px;
    }
    .show {
      flex: 1;
      display: flex;
      button {
        margin-left: auto;
      }
    }
    .fix {
      display: flex;
      input {
        width: 100%;
      }
      button {
        white-space: nowrap;
        margin-left: auto;
      }
    }
  }


  .save {
    display: flex;
    justify-content: center;
    input {
      width: 80%;
    }
    
  }
  h1.turn{
    color: red;
  }
</style>
