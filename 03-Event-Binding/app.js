const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
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
  computed: {
    // fullName() {
    //   if(!this.name) {
    //     return;
    //   }
    //   return this.name + " V"
    // }
  },
  watch: {
    name(value) {
      this.fullName = value ? value + " V" : "";
    },
  },
});

app.mount("#events");
