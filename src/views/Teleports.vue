<template>
  <h3>Teleports 👾</h3>

  <p>
    Teleports are a new component available in Vue 3. They make the following tasks much simpler to
    accomplish:
  </p>

  <ul>
    <li>Dropdowns</li>
    <li>Modals</li>
    <li>Notifications</li>
  </ul>

  <p>
    Sometimes we want to show a notification, modal, dropdown, etc. to the user that escapes the
    normal flow of content. I.E. we want to render this without worrrying about things like z-index.
  </p>

  <p>
    With the new <code>{{ teleportText }}</code> element we can do this easily. If you come from a
    react background, this element is similar to the <code>{{ portalText }}</code> element in React
  </p>

  <section>
    <button @click="toggleNotification">Toggle a notification</button>
    <button @click="toggleModal">Toggle modal</button>

    <div>
      <input type="checkbox" id="inline" :checked="inline" @change="toggleInline" />
      <label for="inline">Inline notification</label>
      {{ inline }}
    </div>
  </section>

  <NotificationVue v-if="isNotificationShowing" @close="toggleNotification" :inline="inline">
    Here is an example notification
  </NotificationVue>

  <ModalVue @close="toggleModal" v-if="isModalShowing" />
</template>

<script>
import NotificationVue from '@/components/Notification.vue';
import ModalVue from '../components/Modal.vue';
import { ref } from 'vue';

export default {
  components: { NotificationVue, ModalVue },
  setup() {
    const isNotificationShowing = ref(false);
    const isModalShowing = ref(false);
    const inline = ref(false);
    const portalText = '<Portal />';
    const teleportText = '<Teleport />';

    const toggleNotification = () => {
      isNotificationShowing.value = !isNotificationShowing.value;
    };

    const toggleModal = () => {
      isModalShowing.value = !isModalShowing.value;
    };

    const toggleInline = () => {
      inline.value = !inline.value;
    };

    return {
      portalText,
      teleportText,
      inline,
      isNotificationShowing,
      isModalShowing,
      toggleNotification,
      toggleModal,
      toggleInline
    };
  }
};
</script>

<style lang="scss">
.strike {
  text-decoration: line-through;
}
</style>
