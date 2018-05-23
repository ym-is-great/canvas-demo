<template>
  <div>
    <h1>Line & Path</h1>
    <div>
      <button @click="drawLine">绘制直线</button>
    </div>
    <br>
    <canvas ref="canvas"></canvas>
    <back/>
  </div>
</template>

<script>
import Back from '@/components/Back'

export default {
  components: {
    Back
  },
  data () {
    return {
      canvas: null,
      ctx: null
    }
  },
  mounted () {
    this.canvas = this.$refs['canvas']
    this.ctx = this.canvas.getContext('2d')
    this.drawLine()
  },
  methods: {
    drawLine () {
      this.ctx.clearRect(0, 0, 300, 150)
      this.ctx.moveTo(0, 0)
      this.ctx.lineTo(300, 150)
      this.ctx.stroke()
    }
  }
}
</script>
