<template>
  <div>
    <h1 class="text-xl">Stores</h1>
    <button @click="fetchUsers" class="bg-green-500 px-3 py-2">
      Fetch Users
    </button>
    <ul v-if="users">
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await res.json();
    },
  },
};
</script>
