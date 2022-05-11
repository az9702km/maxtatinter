<template>
  <div class="container pt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Главное</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{tour.tourName}}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-8">
        <h1>{{tour.tourName}}</h1>
        <img class="img-fluid" :src="require(`@/assets/images/${tour.tourPic}`)" alt="">
        <p v-html="tour.tourDescription" class="mt-3"></p>
      </div>
      <div class="col-md-4">
        <div class="card position-sticky fixed-top">
          <div class="card-header">
            Забронировать тур
          </div>
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{{tour.tourName}}</h5>
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="d-flex flex-column px-3 py-2 bg-light rounded">
                  <small class="text-muted mb-0">Цена от</small>
                  <div class="h3 mb-0 font-weight-bold text-danger">{{tour.tourPrice}}</div>
                  <p>Свободных мест {{tour.available}}</p>
                </div>
                <div class="d-flex flex-column mt-2">
                  <small class="text-muted mb-0">Количество туристов</small>
                  <div class="d-flex mt-1">
                    <div class="d-flex align-items-center border rounded">
                      <button @click="deCrease" class="btn btn-light">-</button>
                      <div class="px-3">{{ tourists }}</div>
                      <button @click="inCrease" class="btn btn-light">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="d-flex mb-3 align-items-center">
                  <div class="flex-shrink-0 icon-circle">
                    <i class="fa-solid fa-calendar"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div class="h6 mb-0">{{ tour.tourCountry }}</div>
                    <div class="text-muted">из Ташкента</div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 icon-circle">
                    <i class="fa-solid fa-calendar"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div class="h6 mb-0">{{tour.tourDate}}</div>
                    <div class="text-muted">{{ tour.tourDuration }} ночей</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex mb-3 align-items-center">
                  <div class="flex-shrink-0 icon-circle">
                    <i class="fa-solid fa-calendar"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div class="h6 mb-0">family room</div>
                    <div class="text-muted">{{ tourists }} взрослых</div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 icon-circle">
                    <i class="fa-solid fa-calendar"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div class="h6 mb-0">Питание</div>
                    <div class="text-muted">Все включено</div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="d-flex flex-column ">
                  <small class="text-muted mb-0">Итог</small>
                  <div class="h6 mb-0 font-weight-bold">{{ tour.tourPrice * tourists }}</div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="modalsID">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :tourInfo="tour" :id="mSendID" :tourists="tourists" />
</template>

<script>
  import data from '@/db.json'
  import Modal from '@/components/Modal.vue'
  export default {
    name: 'Tour',
    components:{
      Modal
    },
    data(){
      return{
        tourists: 1,
        tour: null,
        modalsID: String,
        mSendID: String
      }
    },
    created(){
      const tourData = data.tours[this.$route.params.id - 1]
      if(tourData){
        this.tour = tourData
      }
      
      this.modalsID = "#tour_"+tourData.id;
      this.mSendID = "tour_"+tourData.id;
    },
    methods:{
      inCrease(){
        if(this.tourists < this.tour.available){
          this.tourists++
        }
      },
      deCrease(){
        if(this.tourists > 1){
          this.tourists--
        }
      }
    },
  }
</script>

<style scoped>
  .fa-solid{
    width: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .icon-circle{
    padding: .5rem;
    line-height: 1;
    color: #959ca6;
    background-color: #edf2f5;
    margin-right: .5rem;
    border-radius: 50%;
  }
</style>