<template>
  <div class="app">
    <Sidebar v-if="shouldShowSidebar" />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  computed: {
    shouldShowSidebar() {
      return this.$route.meta.sidebar !== false
    }
  }
}
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 250px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// body {
//   background: #f1f5f9;
// }

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;
    justify-content: flex-start;
    background: #f0f3f5;

    .main-content {
      margin-left: 10rem;
      margin-right: 10rem;
    }

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
