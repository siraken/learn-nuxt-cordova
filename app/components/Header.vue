<template>
  <div>
    <header class="px-3 py-5">
      <h1 class="text-3xl font-bold">Good evening!!</h1>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <p class="pl-1 pr-3 font-bold">
            <span class="rounded-md border border-gray-300 px-1">0</span> eTickets
          </p>
          <p class="pl-1 pr-3 font-bold">
            <i class="fas fa-fw fa-envelope text-green-700" /> Inbox
          </p>
        </div>
        <div>
          <NuxtLink to="/settings">
            <i class="fas fa-fw fa-cog" />
          </NuxtLink>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
</script>

