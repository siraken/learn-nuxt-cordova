<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
onMounted(() => {
  document.addEventListener('deviceready', onDeviceReady, false);
});

function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  // document.getElementById('devinfo').innerHTML = navigator.camera
  const w = window;
  if (w.cordova) {
    console.log(`Running cordova-${w.cordova.platformId}@${w.cordova.version}`);
  }
}
</script>

<style scoped></style>
