<template>
  <header>
    <div class="col hp-flex-none w-auto pe-0">
      <div class="row align-items-center justify-content-end">
        <div class="hover-dropdown-fade w-auto px-0 ms-6 position-relative">
          <div class="hp-cursor-pointer rounded-4 border hp-border-color-dark-80">
            <div class="rounded-3 overflow-hidden m-4 d-flex">
              <div class="avatar-item hp-bg-info-4 d-flex" style="width: 32px; height: 32px">
                <img src="../assets/img/memoji/user-avatar-4.png" />
              </div>
            </div>
          </div>

          <div
            class="hp-header-profile-menu dropdown-fade position-absolute pt-18"
            style="right: 20%; width: 260px; z-index: 10"
          >
            <div class="rounded hp-bg-black-0 hp-bg-dark-100 px-18 py-24">
              <span class="d-block h5 hp-text-color-black-100 hp-text-color-dark-0 mb-4"
                >Profile Settings</span
              >

              <a
                href="profile-information.html"
                class="hp-p1-body fw-medium hp-hover-text-color-primary-2"
                >View Profile</a
              >

              <div class="divider mt-18 mb-4"></div>
              <div class="row">
                <div class="col-12">
                  <a class="hp-p1-body fw-medium" href="profile-information.html"
                    >Account Settings</a
                  >
                </div>

                <div class="col-12 mt-24">
                  <a class="hp-p1-body fw-medium" style="cursor: pointer" @click="signOut"
                    >Logout</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['handleSignOut']),
    signOut() {
      this.handleSignOut().then(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>

<style lang="scss">
header {
  padding: 16px 32px 32px;
}
</style>
