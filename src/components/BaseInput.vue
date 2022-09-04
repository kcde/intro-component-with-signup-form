<template>
  <div class="input-container">
    <label>
      <input :type="type" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-weight: 600;
  caret-color: var(--clr-blue);
  &:focus {
    outline: none;
  }
}

label {
  position: relative;
  height: 100%;
}

.input-container {
  position: relative;
  border: 1px solid var(--clr-input-border);
  width: 100%;
  padding: 0 1rem;
  height: 3.375rem;
  background-color: var(--clr-white);
  border-radius: var(--radius-sm);
  transition: border-color 150ms ease-in;

  &:focus-within {
    border-color: var(--clr-blue);
  }
}
</style>
