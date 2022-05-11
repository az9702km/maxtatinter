<template>
  <div class="modal fade" :id="mSendID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Забронировать тур</h5>
          <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> -->
        </div>
        <div class="modal-body">
          <div v-show="showAlert" class="alert alert-danger" role="alert">
            Онлайн оплата временно не доступно!
          </div>
          <div class="h2 mb-4">{{tourInfo.tourName}}</div>
          <div class="row">
            <div class="col-md-6">
              <form id="payForm" onsubmit="return false;">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Имя *</label>
                    <input type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="surname">Фамилия *</label>
                    <input type="text" class="form-control" id="surname" required>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="phone">Телефон *</label>
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
                      <div class="text-muted">из Ташкента</div>
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
                      <div class="text-muted">{{ tourInfo.tourDuration }} ночей</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-3">
                <div class="col-md-12">
                  <small>Итоговая стоимость</small>
                  <div class="h1 font-weight-bold text-danger">{{ tourInfo.tourPrice * tourists }}</div>
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>Стоимость билета</th>
                        <th>К-во туристов</th>
                        <th>Итоговая сумма</th>
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
                  <form method="POST" action="https://checkout.paycom.uz"> 
                    <input type="hidden" name="merchant" value="6275167604211b5b5beddc2a"/> 
                    <input type="hidden" name="amount" :value="tourInfo.tourPrice * tourists * 100"/>


                    <button type="submit" style="cursor: pointer;
                    border: 1px solid #ebebeb;
                    border-radius: 6px;
                    background: linear-gradient(to top, #f1f2f2, white);
                    width: 54px;
                    height: 54px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    "> <img style="width: 42px;
                    height: 42px;
                    " src="http://cdn.payme.uz/buttons/button_small_RU.svg"> </button>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="hideAlert" type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
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