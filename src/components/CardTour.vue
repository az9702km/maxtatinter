<template>
  <div class="card h-100">
    <img :src="require(`@/assets/images/${tour.tourPic}`)" class="card-img-top" :alt="tour.tourDescriptionShort">
    <div class="card-body">
      <h5 class="card-title font-weight-bold">{{tour.tourName}}</h5>
      <p class="card-text text-muted"><i class="fa-solid fa-money-bill-1 mr-2"></i> {{ $t('from') }} <span class="h4 text-danger">{{tour.tourPrice}}</span> {{ $t('perPerson') }}</p>
      <p class="text-muted mb-0"><i class="fa-solid fa-plane mr-2"></i> {{ $t('fromDate') }} {{tour.tourDate}} {{ $t('fromDateUz') }}/ {{tour.tourDuration}} {{ $t('nights') }}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-light bt-w" @click="$router.push(`/${tour.id}`)">{{ $t('bookNow') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTour',
  props:{
    tour: Object
  }
}
</script>

<style scoped>
  .card-title{
    height: 3rem;
    overflow: hidden;
  }
  .card-img-top{
    aspect-ratio: 4/3;
    object-fit: cover;
  }
</style>