<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/img/logo/logo-na.png" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Dashboards</h3>
    <div class="menu">
      <router-link class="button" to="/political-figure">
        <span class="material-icons">group</span>
        <span class="text">Political Figure</span>
      </router-link>
      <router-link class="button" to="/news">
        <span class="material-icons">newspaper</span>
        <span class="text">News</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <div class="avatar">
        <!-- <div class="avatar-item rounded-circle" style="width: 48px; height: 48px"> -->
        <span class="avatar-item" style="width: 48px; height: 48px">
          <img class="rounded-circle" src="../assets/img/memoji/user-avatar-4.png" alt="" />
        </span>
        <span class="text">
          <span class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">{{
            profileName
          }}</span>
          <a href="profile-information.html" class="hp-badge-text fw-normal hp-text-color-dark-30"
            >View Profile</a
          >
        </span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      is_expanded: false,
      profileName: JSON.parse(localStorage.getItem('user')).username
    }
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: #f0f3f5;
  color: #f1f5f9;

  width: calc(4rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;
  border-right: 1px solid #dfe6e9;
  position: sticky;
  top: 0;
  bottom: 0;

  .flex {
    flex: 1 1 0;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: black;
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .avatar .text {
    display: none;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: blue;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .avatar {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .avatar-item {
        transition: 0.2s ease-out;
      }

      .text {
        transition: 0.2s ease-out;
      }
    }

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: black;
        transition: 0.2s ease-out;
      }

      .text {
        color: black;
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: #ffffff;

        .material-icons,
        .text {
          color: #2d3436;
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid #2d3436;
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .avatar .text {
      opacity: 1;
      display: unset;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .avatar {
      .avatar-item {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
