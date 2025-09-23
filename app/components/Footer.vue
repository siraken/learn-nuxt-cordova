<template>
  <footer class="bg-white fixed left-0 bottom-0 z-20 w-full border-t border-gray-300" style="padding: 0 0 env(safe-area-inset-bottom) 0;">
    <ul class="flex flex-row items-center justify-evenly text-xs leading-none">
      <li>
        <NuxtLink to="/" :class="{ 'text-green-600': $route.path === '/' }" class="text-gray-500 flex justify-center items-center flex-col text-xl py-2 px-4">
          <i class="fas fa-fw fa-star" />
          <span class="text-xs mt-1">Home</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/pay" :class="{ 'text-green-600': $route.path === '/pay' }" class="text-gray-500 flex justify-center items-center flex-col text-xl py-2 px-4">
          <i class="fas fa-fw fa-credit-card" />
          <span class="text-xs mt-1">Pay</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/stores"
          :class="{ 'text-green-600': $route.path === '/stores' }"
          class="text-gray-500 flex justify-center items-center flex-col text-xl py-2 px-4"
        >
          <i class="fas fa-fw fa-store" />
          <span class="text-xs mt-1">Stores</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/order" :class="{ 'text-green-600': $route.path === '/order' }" class="text-gray-500 flex justify-center items-center flex-col text-xl py-2 px-4">
          <i class="fas fa-fw fa-mug-hot" />
          <span class="text-xs mt-1">Order</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/egift" :class="{ 'text-green-600': $route.path === '/egift' }" class="text-gray-500 flex justify-center items-center flex-col text-xl py-2 px-4">
          <i class="fas fa-fw fa-gift" />
          <span class="text-xs mt-1">eGift</span>
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
</script>

