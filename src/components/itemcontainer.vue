<template>
  <section>
    <header class="top">
      <span class="num_tip">题目1</span>
    </header>
    <div>
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style" ></router-link>
    </div>
  </section>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'itemcontainer',
    data () {
      return {
        itemId: null,
        choosedNum: null,
        choosedId: null
      }
    },
    computed: mapState([
      'itemNum',
      'level',
      'itemDetail',
      'timer'
    ]),
    methods: {
      ...mapActions([
        'addNum',
        'initializeData'
      ]),
      nextItem () {
        if (this.choosedNum !== null) {
          this.choosedNum = null
          this.addNum(this.choosedId)
        } else {
          alert('您还没有选择答案哦')
        }
      },
      chooseType: type => {
        switch (type) {
          case 0: return 'A'
          case 1: return 'B'
          case 2: return 'C'
          case 3: return 'D'
        }
      },
      choosed (type, id) {
        this.choosedNum = type
        this.choosedId = id
      },
      submitAnswer () {
        if (this.choosedNum !== null) {
          this.addNum(this.choosedId)
          clearInterval(this.timer)
          this.$router.push('score')
        } else {
          alert('您还没有选择答案哦')
        }
      }
    },
    created () {
      document.body.style.backgroundImage = 'url(http://localhost:8086/images/1-1.jpg)'
    }
  }
</script>
<style>
  .top{
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../images/icon1.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
  }
  .num_tip{
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
  .item_container_style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .home_logo{
    background-image: url(../images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .start{
    background-image: url(../images/1-4.png);
  }
  .button_style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }
</style>
