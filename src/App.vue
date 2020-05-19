<template>
  <header>
    <nav>
      <ul>
        <li v-for="route of routes" :key="route">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <section>
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <SpinnerVue />
      </template>
    </Suspense>
  </section>

  <div id="modals"></div>
  <div id="notifications"></div>
</template>

<script>
import router from './router';
import SpinnerVue from './components/Spinner.vue';

export default {
  name: 'App',
  components: {
    SpinnerVue
  },
  setup() {
    const routes = router.getRoutes().map(route => ({ name: route.name, path: route.path }));

    return { routes };
  }
};
</script>

<style lang="scss">
#root {
  min-height: 100vh;
}

#notifications {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

main {
  margin: 1rem auto;
  max-width: 75%;
}
</style>
