<template>
  <div>
    <h1>Text</h1>
    <div>
      <button @click="fillText">绘制填充文本</button>
      <button @click="font">自定义字体</button>
      <button @click="textAlign">自定义对齐</button>
      <button @click="textBaseline">自定义文本基线</button>
      <button @click="strokeText">绘制无填充文本</button>
      <button @click="measureText">测量文本</button>
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
    this.fillText()
  },
  methods: {
    fillText () {
      this.clear()
      this.ctx.fillText('Hello World !', 0, 12)
    },
    font () {
      this.clear()
      this.ctx.font = '32px PingFang SC'
      this.ctx.fillText('Hello World !', 0, 32)
    },
    textAlign () {
      this.clear()
      this.ctx.textAlign = 'center'
      this.ctx.fillText('Hello World !', 150, 12)
    },
    textBaseline () {
      this.clear()
      this.ctx.textBaseline = 'bottom'
      this.ctx.fillText('Hello World !', 0, 12)
    },
    strokeText () {
      this.clear()
      this.ctx.font = '32px serif'
      this.ctx.strokeText('Hello World !', 0, 32)
    },
    measureText () {
      const info = this.ctx.measureText('Hello World')
      alert(`Text width: ${info.width}`)
    },
    clear () {
      this.ctx.clearRect(0, 0, 300, 150)
      this.ctx.font = '10px sans-serif'
      this.ctx.textAlign = 'left'
      this.ctx.textBaseline = 'alphabetic'
    }
  }
}
</script>
