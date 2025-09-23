<template>
  <div>
    <!-- rewards -->
    <section
      class="mb-2 p-4 flex justify-between items-center text-white"
      style="background: #00381c"
    >
      <div>
        <h2 class="font-bold">Rewards</h2>
        <p class="mb-4 text-3xl">
          176.8 <span class="text-gray-300 text-3xl">/</span>
          <span class="text-green-600 text-xl font-normal">250</span>
        </p>
        <a
          href="#"
          class="bg-transparent text-white px-3 py-1 border border-white font-bold leading-none rounded-full"
          >See more</a
        >
      </div>
      <div>
        <p>73.2 Until Gold Star</p>
      </div>
    </section>
    <!-- order n pay -->
    <section
      class="mb-2 p-4 pb-5 flex flex-col text-white"
      style="background: #35180a"
    >
      <div>
        <small class="text-gray-300 uppercase text-xs font-bold"
          >Mobile Order & Pay</small
        >
        <h2 class="text-xl font-bold mb-4 leading-tight">
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a
          href="#"
          class="bg-white px-3 py-1 font-bold leading-none rounded-full"
          style="color: #35180a"
          >オーダーする</a
        >
      </div>
    </section>
    <!-- order n pay -->
    <section
      class="mb-2 p-4 pb-5 flex flex-col text-white"
      style="background: #35180a"
    >
      <div>
        <small class="text-gray-300 uppercase text-xs font-bold"
          >Mobile Order & Pay</small
        >
        <h2 class="text-xl font-bold mb-4 leading-tight">
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a
          href="#"
          class="bg-white px-3 py-1 font-bold leading-none rounded-full"
          style="color: #35180a"
          >オーダーする</a
        >
      </div>
    </section>
    <!-- order n pay -->
    <section
      class="mb-2 p-4 pb-5 flex flex-col text-white"
      style="background: #35180a"
    >
      <div>
        <small class="text-gray-300 uppercase text-xs font-bold"
          >Mobile Order & Pay</small
        >
        <h2 class="text-xl font-bold mb-4 leading-tight">
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a
          href="#"
          class="bg-white px-3 py-1 font-bold leading-none rounded-full"
          style="color: #35180a"
          >オーダーする</a
        >
      </div>
    </section>
    <!-- order n pay -->
    <section
      class="mb-2 p-4 pb-5 flex flex-col text-white"
      style="background: #35180a"
    >
      <div>
        <small class="text-gray-300 uppercase text-xs font-bold"
          >Mobile Order & Pay</small
        >
        <h2 class="text-xl font-bold mb-4 leading-tight">
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a
          href="#"
          class="bg-white px-3 py-1 font-bold leading-none rounded-full"
          style="color: #35180a"
          >オーダーする</a
        >
      </div>
    </section>
    <!-- order n pay -->
    <section
      class="mb-2 p-4 pb-5 flex flex-col text-white"
      style="background: #35180a"
    >
      <div>
        <small class="text-gray-300 uppercase text-xs font-bold"
          >Mobile Order & Pay</small
        >
        <h2 class="text-xl font-bold mb-4 leading-tight">
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a
          href="#"
          class="bg-white px-3 py-1 font-bold leading-none rounded-full"
          style="color: #35180a"
          >オーダーする</a
        >
      </div>
    </section>
    <!-- balance -->
    <Balance />
  </div>
</template>

<script setup>
const info = ref([]);

const { data } = await $fetch(
  "https://script.google.com/macros/s/AKfycbxezm-94sqtfbuvEyJZJ_y8lZ4MIyy2UuBzxjAGsZrUSF9nTeN8pya_LT1ExadxO1bJ/exec"
);

console.log(data);

info.value = data;

onMounted(() => {
  // mounted logic here
});
</script>

<style scoped></style>
