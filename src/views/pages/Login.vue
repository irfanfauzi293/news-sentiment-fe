<template>
  <div class="row hp-authentication-page">
    <div class="hp-bg-black-20 hp-bg-color-dark-90 col-lg-6 col-12">
      <div class="row hp-image-row h-100 px-8 px-sm-16 px-md-0 pb-32 pb-sm-0 pt-32 pt-md-0">
        <div class="hp-logo-item m-16 m-sm-32 m-md-64 w-auto px-0 col-12">
          <div class="hp-header-logo d-flex align-items-center">
            <a href="#" class="position-relative">
              <img
                class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none"
                src="../../assets/img/logo/na-logo.png"
                style="width: 70px; height: 70px"
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div class="col-12 px-0">
          <div class="row h-100 w-100 mx-0 align-items-center justify-content-center">
            <div class="hp-bg-item text-center mb-32 mb-md-0 px-0 col-12">
              <img
                class="m-auto w-100"
                src="../../assets/img/pages/authentication/fi.png"
                alt="Background Image"
              />
            </div>
            <div class="hp-text-item text-center col-xl-9 col-12">
              <h2 class="hp-text-color-black-100 hp-text-color-dark-0 mx-16 mx-lg-0 mb-16">
                Political Figure Sentiment Based on News
              </h2>
              <p class="h4 mb-0 fw-normal hp-text-color-black-80 hp-text-color-dark-30">
                Tools untuk mengetahui sentimen tokoh politik berdasarkan analisis sentimen berita
                online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 py-sm-64 py-lg-0">
      <div class="row align-items-center justify-content-center h-100 mx-4 mx-sm-n32">
        <div class="col-12 col-md-9 col-xl-7 col-xxxl-5 px-8 px-sm-0 pt-24 pb-48">
          <h1 class="mb-0 mb-sm-24">Login</h1>
          <p class="mt-sm-8 mt-sm-0 text-black-60">Welcome back, please login to your account.</p>

          <form class="mt-16 mt-sm-32 mb-8">
            <div class="mb-16">
              <label for="loginUsername" class="form-label">Username :</label>
              <input v-model="username" type="text" class="form-control" id="loginUsername" />
            </div>

            <div class="mb-16">
              <label for="loginPassword" class="form-label">Password :</label>
              <input v-model="password" type="password" class="form-control" id="loginPassword" />
            </div>
            <button @click="validateSignIn" type="button" class="btn btn-primary w-100">
              Sign in
            </button>
          </form>

          <div class="col-12 hp-form-info text-center">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption me-4"
              >Don’t you have an account?</span
            >

            <router-link
              class="text-primary-1 hp-text-color-dark-primary-2 hp-caption"
              to="/register"
              >Create an account</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { errorMessage } from '../../components/Message'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions(['handleSignIn']),
    validateSignIn() {
      let errorDetail = null
      if (!this.username || !this.password) {
        errorDetail = 'Please enter your username and password'
      }
      return this.signIn(errorDetail)
    },
    async signIn(errorDetail) {
      if (errorDetail) {
        return errorMessage('Sign in Failed', errorDetail)
      }
      await this.handleSignIn({
        username: this.username,
        userPassword: this.password,
        callback: () => {}
      })
    }
  },
  watch: {
    currentUser(value) {
      if (value && value.tokenid && value.tokenid.length > 0) {
        setTimeout(() => {
          this.$router.push('/news')
        }, 100)
      }
    }
  }
}
</script>
