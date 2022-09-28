<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  methods: {
    onDeviceReady() {
      // Cordova is now initialized. Have fun!

      // document.getElementById('devinfo').innerHTML = navigator.camera
      console.log(
        'Running cordova-' + cordova.platformId + '@' + cordova.version
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
