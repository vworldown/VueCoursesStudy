const app = Vue.createApp({
  data() {
    return {
      number: 0,
      timer: null,
    };
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
  computed: {
    msg() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return "Greater";
      } else {
        return "Too much";
      }
    },
  },
  watch: {
    number() {
      let that = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(()=> {
        that.number = 0;
      }, 5000);
    }
  }
});

app.mount("#app");
