import Vue from 'vue'
import { VueI18n } from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'uz',
  messages:{
    ru:{
      welcomMsg: "Все ради Вашей улыбки!",
      welcomTxt: "Мы создаем <b>доступный отдых</b> <br> для наших клиентов <b>по всему миру</b>"
    },
    uz:{
      welcomMsg: "Hammasi tabassumingiz uchun!",
      welcomTxt: "Ilovani qoldiring va menejerlarimiz bilan bog'lanishadi. Sayohatni to'lash Siz onlayn qilishingiz mumkin"
    }
  }
})