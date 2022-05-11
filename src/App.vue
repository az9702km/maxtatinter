<template>
  <Header v-show="notFound" />
  <router-view/>
  <Footer v-show="notFound" />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'Maxtatinter',
    components:{
      Header,
      Footer
    },
    computed:{
      notFound(){
        if(this.$route.name === 'not-found'){
          return false
        } else {
          return true
        }
      }
    }
  }
</script>