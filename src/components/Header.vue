<template>
  
  <section class="container">
    <div class="row headerTop">
      <div class="col-3">
        <router-link to="/"><img src="images/logo.png" alt="" class="logo"></router-link>
      </div>
      <div class="col-9 d-flex justify-content-end align-items-center">
        <a class="phone" href="tel:+998953238080">+998 95 323 80 80</a>
        <select name="lang" v-model="$i18n.locale" class="custom-select d-none d-md-block lang" style="width:5rem">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
          <option value="en">EN</option>
        </select>
        <!-- <div onclick="showLang()" class="d-none d-md-block lang" id="lang">RU
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.27441 5.58637L9.88692 0.961079C10.038 0.809537 10.0377 0.564186 9.88614 0.412898C9.73459 0.261727 9.48911 0.262117 9.33795 0.413679L4.99998 4.76366L0.662031 0.413523C0.51086 0.26198 0.265529 0.26159 0.113967 0.412741C0.0379906 0.488581 1.89475e-06 0.587936 1.8904e-06 0.687291C1.88607e-06 0.786392 0.0377369 0.885357 0.113186 0.961059L4.72557 5.58637C4.79819 5.65936 4.89701 5.70032 4.99998 5.70032C5.10295 5.70032 5.20166 5.65924 5.27441 5.58637Z"
              fill="#313131"/>
          </svg>
          <div class="row languages">
            <a class="col " href="uz/index.html">UZ</a>
            <a class="col " href="en/index.html">EN</a>
          </div>
        </div> -->
        <p onclick="switchMenu()" class="d-md-none">
          <img src="images/burger.svg" alt="">
        </p>
      </div>
    </div>
    <div style="display: none; z-index: 1024;" class="burgerMenu p-4">
      <span :class="['mr-5 text-white', $i18n.locale == 'ru' ? 'l-active' : '']" @click="$i18n.locale='ru'">RU</span>
      <span :class="['mr-5 text-white', $i18n.locale == 'uz' ? 'l-active' : '']" @click="$i18n.locale='uz'">UZ</span>
      <span :class="['mr-5 text-white', $i18n.locale == 'en' ? 'l-active' : '']" @click="$i18n.locale='en'">EN</span>
      <br><br>
      <router-link v-show="this.$route.params.id" to="/">{{ $t('linkMain') }}</router-link>
      <a v-show="!this.$route.params.id" href="#main">{{ $t('linkMain') }}</a>
      <br>
      <a v-show="!this.$route.params.id" href="#about">{{ $t('linkAbt') }}</a>
      <br>
      <a v-show="!this.$route.params.id" href="#tours">{{ $t('linkTours') }}</a>
      <br>
      <a v-show="!this.$route.params.id" href="#command">{{ $t('linkTeam') }}</a>
      <br>
      <a v-show="!this.$route.params.id" href="#contacts">{{ $t('linkContacts') }}</a>
    </div>
  </section>
</template>

<script>
import i18n from '@/i18n';
  export default {
    name: 'Header',
    data(){
      return {
        lang: i18n.global.locale
      }
    },
    methods:{
    }
  }
</script>