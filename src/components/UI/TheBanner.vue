<template>
  <div class="banner">
    <p class="banner__text">
      <span> Try it free 7 days</span> then S20/mo. thereafter
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  background-color: var(--banner-bg);
  color: var(--clr-white);
  padding: 1rem 3rem;
  text-align: center;
  border-radius: var(--radius-lg);
  box-shadow: 0 7px rgba(var(--clr-dark-blue), 0.3);
  &__text {
    line-height: 1.6;
    font-size: 1.2rem;
    font-weight: 300;
    span {
      font-weight: 600;
    }
  }
}
</style>
