<template>
  <div class="modal fade" :id="mSendID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ $t('bookTourTitle') }}</h5>
        </div>
        <div class="modal-body">
          <div class="h2 mb-4">{{tourInfo.tourName}}</div>
          <div class="row">
            <div class="col-md-6">
              <form id="payForm" onsubmit="return false;">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">{{ $t('name') }} *</label>
                    <input type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="surname">{{ $t('surName') }} *</label>
                    <input type="text" class="form-control" id="surname" required>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="phone">{{ $t('phone') }} *</label>
                    <input type="text" class="form-control" id="phone" required>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email" required>
                  </div>
                </div>
              </form>
              <hr>
              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="d-flex mb-3 align-items-center">
                    <div class="flex-shrink-0 icon-circle">
                      <i class="fa-solid fa-calendar"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div class="h6 mb-0">{{ tourInfo.tourCountry }}</div>
                      <div class="text-muted">{{ $t('fromLoc') }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 icon-circle">
                      <i class="fa-solid fa-calendar"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div class="h6 mb-0">{{tourInfo.tourDate}}</div>
                      <div class="text-muted">{{ tourInfo.tourDuration }} {{ $t('nights') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-3">
                <div class="col-md-12">
                  <small>{{ $t('totalPrice') }}</small>
                  <div class="h1 font-weight-bold text-danger">{{ tourInfo.tourPrice * tourists }}</div>
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>{{ $t('ticketPrice') }}</th>
                        <th>{{ $t('touristAmount') }}</th>
                        <th>{{ $t('netSum') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{tourInfo.tourPrice}}</td>
                        <td>{{tourists}}</td>
                        <th>{{ tourInfo.tourPrice * tourists }}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="hideAlert" type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('close') }}</button>
          <form method="POST" action="https://checkout.paycom.uz"> 
            <input type="hidden" name="merchant" value="6275167604211b5b5beddc2a"/> 
            <input type="hidden" name="amount" :value="tourInfo.tourPrice * tourists * 100"/>
            <button type="submit" class="btn btn-primary">{{ $t('makePayment') }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props:{
      tourInfo: Object,
      mSendID: String,
      tourists: Number
    },
    data(){
      return{
        showAlert: false
      }
    },
    methods:{
      alert(e){
        this.showAlert = true;
      },
      hideAlert(){
        this.showAlert = false;
      }
    }
  }
</script>

<style scoped>
  .payment-radio{
    display: flex;
    padding: 1rem;
    border-radius: .5rem;
    background-color: #f8f9fa;
    align-items: center;
    cursor: pointer;
  }
  .text{
    margin-left: .5rem;
    flex-grow: 1;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .payment-radio img{
    height: 1.25rem;
  }
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