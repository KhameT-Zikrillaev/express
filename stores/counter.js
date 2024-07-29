// Пример использования Pinia
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    topse: false,
    movieload:true,
  }),
  actions: {
       load(){
        this.movieload = true
      setTimeout(() => {
      this.movieload = false
    }, 5000);
  }
  },
});