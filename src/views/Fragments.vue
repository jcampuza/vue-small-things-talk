<template>
  <h3>Fragments ¦</h3>

  <p>
    Fragments are a pretty simple but very useful change introduced in Vue 3. In fact every page in
    this app is using them! Essentially components are no longer limited to returning a single root
    element.
  </p>

  <p>
    What this means is we don't need to unnecessarily wrap every one of our components with a
    wrapper <code>div</code>. We can just start writing our markup as we want to.
  </p>

  <p>
    There are some caveats with this. Some components both from 3rd-party libraries, and internally
    still expect a single DOM node to be it's slot content. An example of this is the
    <code>transition</code> element. Also if you want transient wrapper components, or to pass props
    applied to a component to be passed through to the components DOM node you will still want to
    use a single wrapper element.
  </p>
</template>

<script>
export default {};
</script>

<style lang="scss">
.strike {
  text-decoration: line-through;
}
</style>
