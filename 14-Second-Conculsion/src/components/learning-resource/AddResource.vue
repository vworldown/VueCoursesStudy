<script setup lang="ts">
import BaseCard from "../util/BaseCard.vue";
import BaseButton from "../util/BaseButton.vue";
import { inject, ref } from "vue";
import BaseDialog from "../util/BaseDialog.vue";
import BaseButton1 from "../util/BaseButton.vue";

const titleInput = ref("");
const descriptionInput = ref("");
const linkInput = ref("");

const inputIsInvalid = ref(false);

const addResource:
  | ((title: string, description: string, link: string) => void)
  | undefined = inject("addResource");

const submitData = () => {
  event?.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  const link = linkInput.value;

  if (!(title && description && link)) {
    inputIsInvalid.value = true;
    return;
  }

  addResource!(title, description, link);
};

const close = () => {
  inputIsInvalid.value = false;
  console.log(inputIsInvalid.value);
};
</script>

<template>
  <BaseDialog v-if="inputIsInvalid" title="Invalid Input">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <BaseButton @click="close">Okay</BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" v-model="linkInput" />
      </div>
      <div>
        <BaseButton type="submit" @click="submitData">Add Resource</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<style scoped>
label {
  font-size: 1.8rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

textarea {
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 3rem 0;
}
</style>
