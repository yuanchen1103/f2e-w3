<template>
  <div class="col-lg-6">
     <div class="card border-0">
        <div class="card-body pt-5 pb-5 pr-5 pl-5">
           <h5>Transaction Website</h5>
           <div class="d-flex justify-content-between align-items-center mt-5 border-bottom pb-4">
              <div class="d-flex justify-content-start align-items-center">
                  <i class="fab fa-facebook-square icon mr-3"></i>
                  <p class="mb-0 mr-5 d-none d-md-block">Facebook.com</p>
              </div>
              <div class="d-flex justify-content-start align-items-center">
                 <h5 class="mb-0 mr-4">45,836</h5>
                 <i class="fas fa-caret-up mr-2" style="color: #7ED321;"></i>
                 <p class="mb-0" style="color: #7ED321;">20%</p>
              </div>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-4 border-bottom pb-4">
              <div class="d-flex justify-content-start align-items-center">
                  <i class="fab fa-google icon mr-3"></i>
                  <p class="mb-0 mr-5 d-none d-md-block">Google.com</p>
              </div>
              <div class="d-flex justify-content-start align-items-center">
                 <h5 class="mb-0 mr-4">45,836</h5>
                 <i class="fas fa-caret-up mr-2" style="color: #7ED321;"></i>
                 <p class="mb-0" style="color: #7ED321;">12%</p>
              </div>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-4 border-bottom pb-4">
              <div class="d-flex justify-content-start align-items-center">
                  <i class="fab fa-amazon icon mr-3"></i>
                  <p class="mb-0 mr-5 d-none d-md-block">Amazon.com</p>
              </div>
              <div class="d-flex justify-content-start align-items-center">
                 <h5 class="mb-0 mr-4">2,489</h5>
                 <i class="fas fa-caret-down mr-2" style="color: #ef5350;"></i>
                 <p class="mb-0" style="color: #ef5350;">15%</p>
              </div>
           </div>
           <div class="d-flex justify-content-between align-items-center mt-4 pb-4">
              <div class="d-flex justify-content-start align-items-center">
                  <i class="fab fa-wordpress-simple icon mr-3"></i>
                  <p class="mb-0 mr-5 d-none d-md-block">Wordpress.com</p>
              </div>
              <div class="d-flex justify-content-start align-items-center">
                 <h5 class="mb-0 mr-4">1,057</h5>
                 <i class="fas fa-caret-down mr-2" style="color: #ef5350;"></i>
                 <p class="mb-0" style="color: #ef5350;">30%</p>
              </div>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
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
