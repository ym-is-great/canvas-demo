<template>
  <div>
    <h1>Rectangle</h1>
    <div>
      <button @click="basicRect">绘制矩形</button>
      <button @click="blueRect">蓝色矩形</button>
      <button @click="linearGradientRect">线性渐变矩形</button>
      <button @click="radialGradientRect">放射渐变矩形</button>
      <button @click="patternReact">图案矩形</button>
      <button @click="strokeRect">无填充矩形</button>
      <button @click="clearRect">清除内容</button>
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
    this.basicRect()
  },
  methods: {
    basicRect () {
      this.ctx.fillStyle = '#000'
      this.ctx.fillRect(0, 0, 300, 150)
    },
    blueRect () {
      this.ctx.fillStyle = 'blue'
      this.ctx.fillRect(0, 0, 300, 150)
    },
    linearGradientRect () {
      const gradient = this.ctx.createLinearGradient(0, 0, 300, 150)
      gradient.addColorStop(0, 'orange')
      gradient.addColorStop(1, 'white')
      this.ctx.fillStyle = gradient
      this.ctx.fillRect(0, 0, 300, 150)
    },
    radialGradientRect () {
      const gradient = this.ctx.createRadialGradient(150, 75, 0, 150, 75, 75)
      gradient.addColorStop(0, 'orange')
      gradient.addColorStop(1, 'white')
      this.ctx.fillStyle = gradient
      this.ctx.fillRect(0, 0, 300, 150)
    },
    patternReact () {
      const img = new Image()
      img.src = require('@/assets/img/avatar.jpg')
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = 75
        canvas.height = 75
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, 75, 75)
        const pattern = this.ctx.createPattern(canvas, 'repeat')
        this.ctx.fillStyle = pattern
        this.ctx.fillRect(0, 0, 300, 150)
      }
    },
    strokeRect () {
      this.clearRect()
      this.ctx.strokeStyle = 'red'
      this.ctx.strokeRect(0, 0, 300, 150)
    },
    clearRect () {
      this.ctx.clearRect(0, 0, 300, 150)
    }
  }
}
</script>
