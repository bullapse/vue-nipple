import VueNipple from './components/Nipple.vue';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({
    install(NewVue) {
      NewVue.component('vue-nipple', VueNipple);
    }
  });
}

export default {
  install: function(NewVue) {
    NewVue.component('vue-nipple', VueNipple);
  },
  VueNipple
};