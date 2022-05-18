const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName() {
      // console.log(e.target.value);
      this.name = event.target.value;
    },
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    submitForm() {
      alert("submit");
    },
    reset() {
      this.name = "";
    },
  },
});

app.mount("#events");
