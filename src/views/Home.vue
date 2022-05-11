<template>
  <section id="main">
    <div class="d-none d-md-block header">
      <div class="container">
        <div class="row">
          <div class="col col-md-8">
            <a href="#main">Главная</a>
            <a href="#about">О нас</a>
            <a href="#command">Наша команда</a>
            <a href="#contacts">Наши контакты</a>
            <router-link to="/tour">Tur</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="container">
        <h1>Все ради Вашей улыбки!</h1>
        <h2>Мы создаем <b>доступный отдых</b> <br> для наших клиентов <b>по всему миру</b></h2>
      </div>
    </div>
  </section>
  <div class="container">
    <section id="about">
      <div class="row">
        <h4 class="ml-3 d-md-none">О нас</h4>
        <div class="col-12 col-md-5 about"></div>
        <div class="col-12 col-md-7 pl-md-5">
          <h4 class="d-none d-md-block">О нас</h4>
          <p>Одна из ведущих туристических компаний Узбекистана и Центральной Азии, основанная в 2020 году на базе
            туристического оператора iTours и лидера на туроператорском рынке СНГ – TUI Russia & CIS,
            являющегося частью крупнейшего международного туристического холдинга TUI Group.
          </p>
          <p>Туроператор iTours успешно вёл свою деятельность на рынке Узбекистана с 2001 года и занимал
            лидирующие позиции среди национальных компаний, что обеспечило TUI лидерские позиции на
            узбекистанском рынке в качестве крупнейшего многопрофильного туроператора. В 2016 году туроператор
            стал членом ассоциации Фонда гарантирования туристов Узбекистана «Туристік Камкор», вступить в
            который могут туроператоры с наличием банковских гарантий, принимающие на себя обязательства по
            защите прав граждан, выезжающих за рубеж.
          </p>
          <p>TUI Uzbekistan and Central Asia имеет партнёрские отношения более чем с 1000 агентствами на
            территории Казахстана, Киргизии и Узбекистана. Компания предлагает экскурсионный и пляжный отдых по
            таким направлениям как Турция, Грузия, Египет, ОАЭ, Мальдивы, Таиланд и страны Европейского союза.
          </p>
        </div>
      </div>
    </section>
    <section id="tours">
      <h4 class="mb-4">Туры</h4>
      <h6 class="mb-5">Туры Fun & Sun Uzbekistan</h6>
      <div class="row">
        <div :key="tour.id" v-for="tour in tours" class="col">
          <CardTour :tour="tour" />
        </div>
      </div>
    </section>
    <section id="command">
      <h4 class="mb-4">Наша команда</h4>
      <h6 class="mb-5">Офисы Fun & Sun Uzbekistan</h6>
      <div class="row">
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="office">
            <b>Мирабадский район, ул. Чимкент, дом 8 кв. 33</b> <br><br>
            <ul>
              <li>Ахметов Рамиль, Директор офиса</li>
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
      <h6>Готовы к отдыху? Оставьте заявку, мы поможем сделать Ваш отдых самым незабываемым</h6>
      <form action="hey/mail.php" data-lang="ru" class="form-row mt-md-5">
        <div class="form-group col-12 col-md-4">
          <input type="text" class="form-control" required placeholder="Ваше имя" name="name">
        </div>
        <div class="form-group col-12 col-md-4">
          <input type="text" class="form-control" required id="phone" placeholder="Ваш номер телефона"
              name="phone">
        </div>
        <div class="form-group col-12 col-md-4">
          <button class="btn btn-warning col-12" type="submit">
            <span class="spinner-border spinner-border-sm" style="display: none" role="status"
                aria-hidden="true"></span>
            Отправить
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CardTour from '@/components/CardTour.vue'
  import data from '@/db.json'

  export default {
    name: 'Home',
    components: {
      CardTour
    },
    data(){
      return{
        tours: data.tours
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