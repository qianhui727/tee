<template>
  <div id="root">
    <div class="todo-container">
      <h1>用户反馈平台</h1>
      <div class="todo-wrap">
        <br><br><br>
        <MyHeader id="asd" :add-todo="AddTodo" style="position: relative; left:25%" /><br>
        <button id="showw" class="niceButton4" style="background-color:#95c194" @click="show3 = !show3">用户反馈信息汇总展示</button><span> 已保存:{{ tot }}</span><br><br>
        <!-- <button id="showw" class="niceButton4" @click="showit">显示保存内容</button><br><br> -->
        <!-- <button class="niceButton4" id="saveit" @click="saveit">保存</button><br><br> -->

        <!-- <div id="MyyList" style="display:none">
          用户信息反馈汇总：
          <MyList :todos="todos" :checktodo="checktodo" :shanchu="shanchu" />
        </div> -->

        <div style="margin-top: 20px; height: 200px;">
          <el-collapse-transition>
            <div v-show="show3">
              <MyList :todos="todos" :checktodo="checktodo" :shanchu="shanchu" />
              <MyFooter :todos="todos" :checkalltodo="checkalltodo" :ccall="ccall" />
            </div>
          </el-collapse-transition>
        </div>

        <!-- <MyFooter :todos="todos" :checkalltodo="checkalltodo" :ccall="ccall" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { totalmem } from 'os'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
export default {
  name: 'App',
  components: { MyFooter, MyHeader, MyList },
  // 用于list与header交流
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      show3: false
    }
  },
  computed: {
    tot() {
      return this.todos.length
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  methods: {
    showit() {
      // alert("showit")
      var t = document.getElementById('MyyList')
      if (t.style.display === 'block') {
        t.style.display = 'none'
      } else {
        t.style.display = 'block'
      }
    },
    saveit() {
      var t = document.getElementById('asd')
      t.add
      alert('保存成功')
    },
    // 添加一个todo
    AddTodo(x) {
      // unshift头部添加
      this.todos.unshift(x)
    },
    // 勾选一个todo
    checktodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 删除
    shanchu(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 全选/全不选
    checkalltodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    // 清空全部
    ccall() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  }
}
</script>

<style>

/* base */
body{
    background-color:#E2E1E4;;
}

.btn{
    display: inline-block;
    padding:4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger{
    color: #fff;
    background-color:aqua;
    border: 1px solid #bd362f;
}

.btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
}

.btn:focus{
    outline: none;
}

.todo-container{
    width: 1200px;
    margin: 0 auto;
}
.todo-container .todo-warp{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.niceButton4{
    background-color: skyblue;
    border: none;
    border-radius: 12px;
    color:white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
}
.niceButton4:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,.24),
    0 17px 50px 0 rgba(0,0,0,.19);
}
</style>
