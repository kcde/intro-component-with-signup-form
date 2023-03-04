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
import { checkEmaiil, createUser } from "../../utils/http";
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
    async checkEmailAvailability(email) {
      const res = await checkEmaiil(email);
      const isAvailable = await res.json();
      return isAvailable.error ? true : false;
    },

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
    async validateEmail() {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        const isEmailAvailable = await this.checkEmailAvailability(this.email);

        if (isEmailAvailable) {
          this.isEmailValid = true;
          return true;
        } else {
          this.isEmailValid = false;

          this.emailErrorMessage = "Looks like this  email is taken";
          return false;
        }
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

    async submitForm() {
      console.log("submitting form.........");
      const user = {
        fname: this.firstName,
        lname: this.lastName,
        email: this.email,
        password: this.password,
      };

      try {
        const req = await createUser(user);
        const res = await req.json();
        if (res.error) {
          window.alert(res.error);
          return;
        }

        window.alert("user created");
        this.resetForm();
      } catch (error) {
        console.log(error);

        window.alert("unable to create user");
      }
    },

    resetForm() {
      this.firstName = "";
      (this.isFirstNameValid = null), (this.lastName = "");
      (this.isLastNameValid = null), (this.email = "");
      this.isEmailValid = null;
      this.password = "";
      this.isPasswordValid = null;
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
