<template>
  <li @click="deleteFriend(friend.id)">
    <h2>{{ friend.name }} {{ friend.isFavorite ? "Favorite" : "" }}</h2>
    <button @click="toggleFavorite(friend.id)">Toggle Favorite</button>
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
    // isFavorite: {
    //   // type: String,
    //   // required: false,
    //   // default: "0",
    //   // // 只允许 "1" or "0"
    //   // validator: function (value: string) {
    //   //   return value === "1" || value === "0";
    //   // },
    //   type: Boolean,
    //   require: false,
    //   default: false,
    // },
  },
  // emits: {
  //   // 保证没有传入参数进行提醒
  //   "toggle-favorite": function (id: string) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.log("Id is missing!");
  //       return false;
  //     }
  //   },
  // },
  emits: ["toggle-favorite", "delete-friend"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      (this as any).detailsAreVisible = !(this as any).detailsAreVisible;
    },
    toggleFavorite(id: string) {
      (this as any).$emit("toggle-favorite", id);
    },
    deleteFriend(id: string) {
      (this as any).$emit("delete-friend", id);
    },
  },
};
</script>

<style lang="scss"></style>
