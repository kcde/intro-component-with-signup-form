<template>
  <button type="submit" :disabled="$attrs.disabled">
    claim your free trial
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  background-color: rgba(var(--bg-submit-btn));
  color: var(--clr-white);
  padding: 1.25rem 1rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: var(--radius-md);
  box-shadow: inset 0 -4px rgba(var(--clr-dark-blue), 0.2);
  transition: background-color 150ms ease-out, box-shadow 50ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(var(--bg-submit-btn), 0.6);
  }
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  &:disabled {
    background-color: rgba(var(--bg-submit-btn), 0.6);
    cursor: not-allowed;
    &:active {
      transform: translateY(0);
      box-shadow: inset 0 -4px rgba(var(--clr-dark-blue), 0.2);
    }
  }
}
</style>
