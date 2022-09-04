<template>
  <div class="form">
    <form class="space-y-1">
      <BaseInput placeholder="First Name" />
      <BaseInput placeholder="Last Name" />
      <BaseInput placeholder="Email Address" type="email" />
      <BaseInput placeholder="Password" type="password" />

      <FormButton />
    </form>

    <div class="form__footer">
      <p>
        By clicking the button, you are agreeing to our
        <a href="#">Terms and Services</a>
      </p>
    </div>
  </div>
</template>

<script>
import BaseInput from "../BaseInput.vue";
import FormButton from "../FormButton.vue";
export default { components: { BaseInput, FormButton } };
</script>

<style lang="scss" scoped>
.form {
  background-color: var(--clr-white);
  padding: 1.5rem;
  border-radius: var(--radius-lg);

  @media (min-width: 1024px) {
    padding: 2.25rem;
  }

  &__footer {
    font-size: 13px;
    color: var(--clr-grayish-blue);
    text-align: center;
    margin-top: 1rem;

    p {
      line-height: 1.8;
    }

    a {
      color: var(--clr-link);
      font-weight: 600;
    }
  }
}
</style>
