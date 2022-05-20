const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manual Lorenz",
          phone: "01234 5678 991",
          email: "manual@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 6543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manual",
        name: "Manual Lorenz",
        phone: "01234 5678 991",
        email: "manual@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
});

app.mount("#app");
