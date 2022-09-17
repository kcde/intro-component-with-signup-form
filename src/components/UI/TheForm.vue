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
      <BaseInput
        placeholder="Email Address"
        @validate-input="validateEmail"
        type="email"
        v-model="email"
        :error-message="emailErrorMessage"
        :error="isEmailValid"
        @modifying-input="tempRemoveError('isEmailValid')"
      />
      <BaseInput
        placeholder="Password"
        type="password"
        @validate-input="validatePassword"
        v-model="password"
        :error="isPasswordValid"
        :error-message="passwordErrorMessage"
        @modifying-input="tempRemoveError('isPasswordValid')"
      />

      <FormButton @click="submitForm" :disabled="!isFormValid" />
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
      email: "",
      password: "",
      isFirstNameValid: null,
      isLastNameValid: null,
      isEmailValid: null,
      isPasswordValid: null,

      firstNameErrorMessage: "",
      lastNameErrorMessage: "",
      emailErrorMessage: "",
      passwordErrorMessage: "",
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
    validateEmail() {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.isEmailValid = true;

        return true;
      }
      this.isEmailValid = false;
      this.emailErrorMessage = "Looks like this is not an email";

      return false;
    },

    validatePassword() {
      if (this.password.trim() === "") {
        this.isPasswordValid = false;
        this.passwordErrorMessage = "Password cannot be empty";
        return;
      }
      this.isPasswordValid = true;
    },

    tempRemoveError(val) {
      this[val] = true;
    },

    submitForm() {
      console.log("submitting form.........");

      console.log(this.firstName);
      console.log(this.lastName);
      console.log(this.email);
      console.log("*".repeat(this.password.length));

      this.resetForm();
    },

    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
    },
  },

  computed: {
    isFormValid() {
      if (
        this.isLastNameValid &&
        this.isFirstNameValid &&
        this.isEmailValid & this.isPasswordValid
      ) {
        return true;
      } else {
        return false;
      }
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
