<template>
  <div>
    <h1>Rectangle</h1>
    <div>
      <button @click="renderRectangle">绘制填充矩形</button>
      <button @click="renderBlueRectangle">绘制蓝色填充矩形</button>
      <button @click="strokeRectangle">绘制无填充矩形</button>
      <button @click="clearRectangle">清除内容</button>
    </div>
    <br>
    <canvas ref="canvas-rectangle"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: null,
      ctx: null
    }
  },
  mounted () {
    this.canvas = this.$refs['canvas-rectangle']
    this.ctx = this.canvas.getContext('2d')
    this.renderRectangle()
  },
  methods: {
    renderRectangle () {
      this.ctx.fillStyle = '#000'
      this.ctx.fillRect(0, 0, 300, 150)
    },
    renderBlueRectangle () {
      this.ctx.fillStyle = 'blue'
      this.ctx.fillRect(0, 0, 300, 150)
    },
    strokeRectangle () {
      this.clearRectangle()
      this.ctx.strokeStyle = 'red'
      this.ctx.strokeRect(0, 0, 300, 150)
    },
    clearRectangle () {
      this.ctx.clearRect(0, 0, 300, 150)
    }
  }
}
</script>
