<template>
  <div>
    <h2 class="text-xl">Settings</h2>
    <img src="" alt="" id="image" />
    <!-- <button id="take_pictures" @click="takePictures()">写真撮影</button> -->
    <button id="take_pictures" @click="scan()" class="bg-black text-white p-4">スキャン</button>
    {{ scanType }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      scanType: '',
    };
  },
  methods: {
    scan(options) {
      return new Promise((resolve, reject) => {
        cordova.plugins.barcodeScanner.scan(resolve, reject, options);
      }).then((res) => {
        console.log(res);
        this.scanType = res.text;
      });
    },
    takePictures() {
      navigator.camera.getPicture(this.cameraSuccess, this.cameraError, {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
      });
    },
    cameraSuccess(image) {
      console.log(image);
      const img = document.getElementById('image');
      img.src = `data:image/jpeg;base64,${image}`;
    },
    cameraError(message) {
      alert(`Failed!!: ${message}`);
    },
  },
};
</script>

<style scoped>
</style>
