<template>
  <li>
    <h2>{{ friend.name }} {{ friendIsFavorite ? "Favorite" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
export interface FriendPropOptions {
  type?: {
    [property: string]: string;
  };
}

export default {
  props: {
    friend: Object as FriendPropOptions,
    isFavorite: {
      // type: String,
      // required: false,
      // default: "0",
      // // 只允许 "1" or "0"
      // validator: function (value: string) {
      //   return value === "1" || value === "0";
      // },
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: (this as any).isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      (this as any).detailsAreVisible = !(this as any).detailsAreVisible;
      (this as any).friendIsFavorite = !(this as any).friendIsFavorite;
    },
  },
};
</script>

<style lang="scss"></style>
