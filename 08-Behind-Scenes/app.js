const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    // 什么数据都拿不到
    console.log("------beforeCreate创建前状态------");
    console.log("el: " + this.$el); // null
    console.log("data: " + this.$data);
    console.dir(this.$data);
    console.log("message: " + this.message);
  },
  created() {
    // 可以拿到 data，已经为这个 Vue 实例开辟了内存空间
    console.log("------created创建完毕状态------");
    console.dir("el: " + this.$el); // null
    console.log("data: " + this.$data); // 已被初始化
    console.dir(this.$data);
    console.log("message: " + this.message); // 已被初始化
  },
  beforeMount() {
    console.log("------beforeMount挂载前状态------");
    console.log("el: " + this.$el); // null
    console.log("data: " + this.$data); // 已被初始化
    console.dir(this.$data);
    console.log("message: " + this.message); // 已被初始化
  },
  mounted() {
    console.log("------mounted 挂载结束状态------");
    console.log("el: " + this.$el); // 已被初始化
    console.log(this.$el);
    console.log("data: " + this.$data); // 已被初始化
    console.dir(this.$data);
    console.log("message: " + this.message); // 已被初始化
  },
  beforeUpdate() {
    console.log("beforeUpdate 更新前状态===============》");
    console.log("el: " + this.$el);
    console.dir(this.$el);
    console.log("data: " + this.$data);
    console.dir(this.$data);
    console.log("message: " + this.message);
  },
  updated() {
    console.log("updated 更新完成状态===============》");
    console.log("el: " + this.$el);
    console.dir(this.$el);
    console.log("data: " + this.$data);
    console.dir(this.$data);
    console.log("message: " + this.message);
  },
  beforeUnmount() {
    console.log("BeforeUnmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
    <p>{{ favorite }}</p>
  `,
  data() {
    return {
      favorite: "Pizza",
    };
  },
});

app2.mount("#app2");

// 丐版响应式原理
const data = {
  msg: "Hello",
  longMessage: "Hello World!",
};

const handler = {
  set(target, key, value) {
    if (key === "msg") {
      target.longMessage = value + " World";
    }
    target.value = value;
  },
};

const proxy = new Proxy(data, handler);

// console.log(proxy.longMessage);
// proxy.msg = "Hello!!!";
// console.log(proxy.longMessage);
