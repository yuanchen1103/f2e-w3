<template>
  <div class="col-lg-4">
    <div class="card border-0">
      <div class="card-body d-flex justify-content-center pt-5 pb-5">
        <div>
          <i class="fas fa-hand-holding-usd" v-if="title === 'TOTAL REVENUE'"></i>
          <i class="fas fa-box" v-if="title === 'TOTAL COST'"></i>
          <i class="fas fa-money-bill" v-if="title === 'NET INCOME'"></i>
        </div>
        <div class="ml-5">
          <h2>{{data}}</h2>
          <p class="mb-0">{{title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewItem',
  props: ['data', 'title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }
  i {
    font-size: 50px;
  }
  .fa-hand-holding-usd {
    color: #4680ff;
  }
  .fa-box {
    color: #ffb64d;
  }
  .fa-money-bill {
    color: #26dad2;
  }
  h2 {
    color: #455a64;
  }
</style>
