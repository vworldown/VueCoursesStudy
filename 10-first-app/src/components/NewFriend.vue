<template>
  <form>
    <div class="inputItem">
      <label for="idInput">ID Input</label>
      <input type="text" id="idInput" v-model="idInput" />
    </div>
    <div class="inputItem">
      <label for="nameInput">Name Input</label>
      <input type="text" id="nameInput" v-model="nameInput" />
    </div>
    <div class="inputItem">
      <label for="phoneInput">Phone Input</label>
      <input type="text" id="phoneInput" v-model="phoneInput" />
    </div>
    <div class="inputItem">
      <label for="emailInput">Email Input</label>
      <input type="text" id="emailInput" v-model="emailInput" />
    </div>
    <div class="inputItem">
      <h3>Is Favorite</h3>
      <section>
        <label for="favoriteInput1">是</label>
        <input
          type="radio"
          name="favorite"
          id="favoriteInput1"
          value="true"
          v-model="favoriteInput"
        />
        <label for="favoriteInput2">否</label>
        <input
          type="radio"
          name="favorite"
          id="favoriteInput2"
          value="false"
          v-model="favoriteInput"
        />
      </section>
    </div>
    <button @click="add">Add</button>
  </form>
</template>

<script lang="ts">
export interface FriendPropOptions {
  [property: string]: string;
}

export default {
  data() {
    return {
      idInput: "",
      nameInput: "",
      phoneInput: "",
      emailInput: "",
      favoriteInput: true,
    };
  },
  emits: ["generateNewFriend"],
  methods: {
    add() {
      event?.preventDefault();
      const friend: FriendPropOptions = {
        id: (this as any).idInput,
        name: (this as any).nameInput,
        phone: (this as any).phoneInput,
        email: (this as any).emailInput,
        isFavorite: (this as any).favoriteInput,
      };
      // console.log(friend);
      (this as any).$emit("generateNewFriend", friend);
    },
  },
};
</script>

<style lang="scss">
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.inputItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
