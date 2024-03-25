<template>
  <div v-show="totle" class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked= "donett === totle"/> -->
      <input type="checkbox" :checked="isAll" @change="checkall">
    </label>
    <span>
      <span>已清除{{ donett }}</span> / 全部{{ totle }}
    </span>
    <button class="btn btn-danger" @click="claerall">清除评论</button>
  </div>
</template>

<script scoped>

export default {
  name: 'MyFooter',
  props: ['todos', 'checkalltodo', 'ccall'],
  computed: {
    totle() {
      return this.todos.length
    },
    donett() {
      // 方法1 foreach遍历
      // let i =0;
      // this.todos.forEach((todo) => {
      //     if(todo.done) i++
      // });
      // return i

      // 方法2 reduce  pre是上一个值，current是当前值
      //    const x = this.todos.reduce((pre,current)=>{
      //         console.log('@',pre,current)
      //             return pre + (current.done ? 1:0)
      //     },0)
      //     return x
      // 方法2机制精简
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    isAll() {
      return this.donett === this.totle && this.totle > 0
    }
  },
  methods: {
    checkall(e) {
      this.checkalltodo(e.target.checked)
    },
    claerall() {
      this.ccall()
    }
  }

}
</script>

<style>
/* footer */
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input{
    position: relative;
    top:-1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button{
    float: right;
    margin-top: 5px;
}
</style>
