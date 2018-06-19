<template>
  <div class="col-lg-6">
     <div class="card border-0">
        <div class="card-body pt-5 pb-5 pr-5 pl-5">
           <h5>Latest Orders</h5>
           <div class="d-flex justify-content-between align-items-center mt-5 border-bottom pb-3">
              <p class="mb-0 mr-5">Dennis Yang</p>
              <h5 class="mb-0 mr-4">1,000</h5>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-3 border-bottom pb-3">
              <p class="mb-0 mr-5">Vincent Wang</p>
              <h5 class="mb-0 mr-4">5,836</h5>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-3 border-bottom pb-3">
              <p class="mb-0 mr-5">David Chen</p>
              <h5 class="mb-0 mr-4">3,200</h5>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-3 border-bottom pb-3">
              <p class="mb-0 mr-5">David Chen</p>
              <h5 class="mb-0 mr-4">3,200</h5>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-3 mb-4 pb-3">
              <p class="mb-0 mr-5">Eva Lin</p>
              <h5 class="mb-0 mr-4">500</h5>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Latest',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }
  .icon {
     font-size: 30px;
  }
  h5 {
     color: #455a64;
  }
</style>
