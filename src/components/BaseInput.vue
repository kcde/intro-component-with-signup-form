<template>
  <div class="input-body">
    <div class="input-container" :class="{ 'input-error': error === false }">
      <label>
        <input
          :type="type"
          :placeholder="placeholder"
          @blur="$emit('validate-input')"
          @input="$emit('update:modelValue', $event.target.value)"
          @focus="$emit('modifying-input')"
          :value="modelValue"
        />
      </label>

      <div class="error-icon" v-show="error === false">
        <img src="../assets/icon-error.svg" alt="input error icon" />
      </div>
    </div>
    <p v-show="error === false" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  emits: ["validate-input", "update:modelValue", "modifying-input"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
  },
  methods: {
    log(val) {
      console.log(val);
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
  color: var(--clr-input);
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

.input-error {
  --clr-input-border: var(--clr-red);
  --clr-input: var(--clr-red);
}

.input-container.input-error {
  border-width: 2px;
  &:focus-within {
    border-color: var(--clr-input);
  }
}

.error-message {
  color: var(--clr-red);
  font-size: 10px;
  font-weight: 600;
  text-align: right;
  margin-top: 10px;
}

.error-icon {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
