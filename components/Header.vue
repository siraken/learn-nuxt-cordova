<template>
  <div>
    <header class="px-3 py-5">
      <h1>Good evening!!</h1>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <p class="pl-1 pr-3 font-bold">
            <span class="rounded-md">0</span> eTickets
          </p>
          <p class="pl-1 pr-3 font-bold">
            <i class="fas fa-fw fa-envelope text-green-700" /> Inbox
          </p>
        </div>
        <div>
          <nuxt-link to="/settings">
            <i class="fas fa-fw fa-cog" />
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
}

span {
  border: solid 1px #ccc;
  padding: 0 0.25rem;
}
</style>
