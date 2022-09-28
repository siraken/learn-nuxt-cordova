<template>
  <div>
    <!-- rewards -->
    <section class="rewards">
      <div>
        <h2 class="font-bold">Rewards</h2>
        <p class="score">
          176.8 <span class="slash">/</span> <span class="nextScore">250</span>
        </p>
        <a href="#" class="btn rounded-full">See more</a>
      </div>
      <div>
        <p>73.2 Until Gold Star</p>
      </div>
    </section>
    <!-- order n pay -->
    <section class="onp">
      <div>
        <small class="title">Mobile Order & Pay</small>
        <h2>
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a href="#" class="rounded-full">オーダーする</a>
      </div>
    </section>
    <!-- order n pay -->
    <section class="onp">
      <div>
        <small class="title">Mobile Order & Pay</small>
        <h2>
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a href="#" class="rounded-full">オーダーする</a>
      </div>
    </section>
    <!-- order n pay -->
    <section class="onp">
      <div>
        <small class="title">Mobile Order & Pay</small>
        <h2>
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a href="#" class="rounded-full">オーダーする</a>
      </div>
    </section>
    <!-- order n pay -->
    <section class="onp">
      <div>
        <small class="title">Mobile Order & Pay</small>
        <h2>
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a href="#" class="rounded-full">オーダーする</a>
      </div>
    </section>
    <!-- order n pay -->
    <section class="onp">
      <div>
        <small class="title">Mobile Order & Pay</small>
        <h2>
          レジに並ばず、<br />
          お店で受け取り
        </h2>
        <a href="#" class="rounded-full">オーダーする</a>
      </div>
    </section>
    <!-- balance -->
    <Balance />
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    }
  },
  async fetch() {
    this.info = await fetch(
      'https://script.google.com/macros/s/AKfycbxezm-94sqtfbuvEyJZJ_y8lZ4MIyy2UuBzxjAGsZrUSF9nTeN8pya_LT1ExadxO1bJ/exec'
    ).then((res) => res.json())
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
section {
  margin: 0 0 0.5rem 0;
}
.rewards {
  background: #00381c;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .score {
    margin: 0 0 1rem 0;
    font-size: 2rem;

    .slash {
      color: #ccc;
      font-size: 1.8rem;
    }

    .nextScore {
      color: #007500;
      font-size: 1.3rem;
      font-weight: normal;
    }
  }

  a {
    background: transparent;
    color: #fff;
    padding: 0.25rem 0.75rem;
    border: solid 1px #fff;
    font-weight: bold;
    line-height: 1;
  }
}

.onp {
  background: #35180a;
  color: #fff;
  padding: 1rem 1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;

  .title {
    color: #ccc;
    text-transform: uppercase;
    font-size: 0.65rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
    line-height: 1.25;
  }

  a {
    background: #fff;
    color: #35180a;
    padding: 0.25rem 0.75rem;
    font-weight: bold;
    line-height: 1;
  }
}
</style>
