<template>
  <footer>
    <ul>
      <li>
        <nuxt-link
          to="/"
          :class="{selected: $route.path === '/'}"
        >
          <i class="fas fa-fw fa-star" />
          <span>Home</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/pay"
          :class="{selected: $route.path === '/pay'}"
        >
          <i class="fas fa-fw fa-credit-card" />
          <span>Pay</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/stores"
          :class="{selected: $route.path === '/stores'}"
        >
          <i class="fas fa-fw fa-store" />
          <span>Stores</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/order"
          :class="{selected: $route.path === '/order'}"
        >
          <i class="fas fa-fw fa-mug-hot" />
          <span>Order</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/egift"
          :class="{selected: $route.path === '/egift'}"
        >
          <i class="fas fa-fw fa-gift" />
          <span>eGift</span>
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

export default {
}
</script>

<style lang="scss" scoped>
footer {
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  border-top: solid 1px #ccc;
  padding: 0 0 env(safe-area-inset-bottom) 0;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: .75rem;
    line-height: 1;

    li {
      a {
        span {
          font-size: .75rem;
          margin: 4px 0 0 0;
        }

        &.selected {
          color: green;
        }
        color: #777;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
        padding: .5rem 1rem;
      }
    }
  }
}
</style>
