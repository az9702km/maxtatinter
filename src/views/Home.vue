<template>
  <section id="main">
    <div class="d-none d-md-block header">
      <div class="container">
        <div class="row">
          <div class="col col-md-8">
            <a href="#main">{{ $t('linkMain') }}</a>
            <a href="#about">{{ $t('linkAbt') }}</a>
            <a href="#tours">{{ $t('linkTours') }}</a>
            <a href="#command">{{ $t('linkTeam') }}</a>
            <a href="#contacts">{{ $t('linkContacts') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="container">
        <h1>{{ $t('welcomMsg') }}</h1>
        <h2 v-html="$t('welcomTxt')"></h2>
      </div>
    </div>
  </section>
  <div class="container">
    <section id="about">
      <div class="row">
        <h4 class="ml-3 d-md-none">{{ $t('AbtTitle') }}</h4>
        <div class="col-12 col-md-5 about"></div>
        <div class="col-12 col-md-7 pl-md-5">
          <h4 class="d-none d-md-block">{{ $t('AbtTitle') }}</h4>
          <p>{{ $t('AbtTxtOne') }}</p>
          <p>{{ $t('AbtTxtSecond') }}</p>
          <p>{{ $t('AbtTxtThird') }}</p>
        </div>
      </div>
    </section>
    <section id="tours">
      <h4 class="mb-4">{{ $t('ToursTitle') }}</h4>
      <h6 class="mb-5">{{ $t('ToursSubTitle') }}</h6>
      <div class="row">
        <div :key="tour.id" v-for="tour in tours[$i18n.locale]" class="col mb-3">
          <CardTour :tour="tour" />
        </div>
      </div>
    </section>
    <section id="command">
      <h4 class="mb-4">{{ $t('TeamTitle') }}</h4>
      <h6 class="mb-5">{{ $t('TeamSubTitle') }}</h6>
      <div class="row">
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="office">
            <b>{{ $t('TeamAdres') }}</b> <br><br>
            <ul>
              <li>{{ $t('TeamDirector') }}</li>
              <!-- <li>Мавлюда Саидакбарова, Менеджер по туризму</li>
              <li>Ирина Закирова, Менеджер по туризму</li>
              <li>Ильхом Гайбуллаев, Менеджер по туризму</li>
              <li>Мукаддас Муродова, Менеджер по туризму</li>
              <li>Кристина Бегнаева, Менеджер по туризму</li> -->
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="office">
            <!-- <b>Мирабадский район,ул Шахрисабз,дом 3 кв. 49</b><br><br>
            <ul>
              <li>Камилла Исмаилова, Директор офиса</li>
              <li>Лайло Акрамова, Менеджер по туризму</li>
              <li>Азиз Мирзаев, Менеджер по туризму</li>
              <li>Наталья Касеева, Менеджер по туризму</li>
              <li>Зекие Бабаева, Менеджер по туризму</li>
              <li>Гульноза Халматова, Менеджер по туризму</li>
            </ul> -->
          </div>
        </div>
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="office">
            <!-- <b>Мирабадский район,ул Афрасиаб, бизнес-центр «New Level»</b> <br><br>
            <ul>
              <li>Бейсенова Ильзия, Директор</li>
              <li>Турсанов Данияр, Менеджер по туризму</li>
            </ul> -->
          </div>
        </div>
      </div>
    </section>
    <section id="form">
      <h6>{{ $t('FormTitle') }}</h6>
      <form action="" data-lang="ru" class="form-row mt-md-5">
        <div class="form-group col-12 col-md-4">
          <input type="text" class="form-control" required :placeholder="$t('FormName')" name="name">
        </div>
        <div class="form-group col-12 col-md-4">
          <input type="text" class="form-control" required id="phone" :placeholder="$t('FormPhone')"
              name="phone">
        </div>
        <div class="form-group col-12 col-md-4">
          <button class="btn btn-warning col-12" type="submit" @click="$event.preventDefault()">
            <span class="spinner-border spinner-border-sm" style="display: none" role="status"
                aria-hidden="true"></span>
            {{ $t('FormSubmit') }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CardTour from '@/components/CardTour.vue'
  import data from '@/dbLocale.json'
  import i18n from '@/i18n';

  export default {
    name: 'Home',
    components: {
      CardTour
    },
    data(){
      return{
        tours: data.tours,
      }
    },
  }
</script>

<style scoped>
section{
  margin-top: 100px
}
#main{
  margin-top: 0;
}

</style>