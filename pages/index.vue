<template>
  <div>
    <section>
      <div>
        <h2 class="font-bold">Rewards</h2>
        <p class="score">176.8 <span class="slash">/</span> <span class="nextScore">250</span></p>
        <a href="#" class="btn rounded-full">See more</a>
      </div>
      <div>
        <p>73.2 Until Gold Star</p>
      </div>
    </section>
    <Balance />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
section {
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
    padding: .25rem .75rem;
    border: solid 1px #fff;
    font-weight: bold;
    line-height: 1;
  }
}
</style>
