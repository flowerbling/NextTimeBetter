<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyPage',

  setup() {
    // 使用ref创建响应式数据
    const title = ref('Welcome to My Page');
    const message = ref('This is a simple Vue 3 page.');

    // 可以在这里定义方法来修改这些数据

    // 返回的对象中的属性可以在模板中直接使用
    return {
      title,
      message
    };
  }
};
</script>

<style>
/* 样式定义 */
</style>
