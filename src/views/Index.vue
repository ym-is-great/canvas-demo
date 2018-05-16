<template>
  <div>
    <h1>Canvas Demo</h1>
    <ul>
      <router-link v-for="(item, index) in menu" :key="index" :to="item.route">
        <li>{{ item.label }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          label: 'Rectangle', route: 'rectangle'
        },
        {
          label: 'Text', route: 'text'
        }
      ]
    }
  }
}
</script>
