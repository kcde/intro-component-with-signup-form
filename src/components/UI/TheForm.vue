<template>
  <div class="form">
    <form class="space-y-1" @submit.prevent>
      <BaseInput
        placeholder="First Name"
        @validate-input="validateFirstName"
        v-model="firstName"
        :error="isFirstNameValid"
        :error-message="firstNameErrorMessage"
        @modifying-input="tempRemoveError('isFirstNameValid')"
      />
      <BaseInput
        placeholder="Last Name"
        @validate-input="validateLastName"
        v-model="lastName"
        :error="isLastNameValid"
        :error-message="lastNameErrorMessage"
        @modifying-input="tempRemoveError('isLastNameValid')"
      />
      <BaseInput placeholder="Email Address" type="email" />
      <BaseInput placeholder="Password" type="password" />

      <FormButton @click="submitForm" />
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
export default {
  components: { BaseInput, FormButton },
  data() {
    return {
      firstName: "",
      lastName: "",
      isFirstNameValid: null,
      isLastNameValid: null,
      firstNameErrorMessage: "",
      lastNameErrorMessage: "",
    };
  },
  methods: {
    validateFirstName() {
      if (this.firstName.trim() === "") {
        this.isFirstNameValid = false;
        this.firstNameErrorMessage = "First Name cannot be empty";
        return;
      }

      this.isFirstNameValid = true;
    },
    validateLastName() {
      if (this.lastName.trim() === "") {
        this.isLastNameValid = false;
        this.lastNameErrorMessage = "Last Name cannot be empty";
        return;
      }

      this.isLastNameValid = true;
    },

    tempRemoveError(val) {
      this[val] = true;

      console.log(this.isFirstNameValid);
      console.log(this.isFirstNameValid);
    },

    submitForm() {
      console.log(this.firstName);
    },
  },
};
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
