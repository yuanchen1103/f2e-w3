<template>
  <div class="container pb-5 pt-5">
    <div class="row pt-5">
      <OverviewItem data="54,540" title="TOTAL REVENUE"/>
      <OverviewItem class="mt-lg-0 mt-3" data="12,660" title="TOTAL COST"/>
      <OverviewItem class="mt-lg-0 mt-3" data="41,880" title="NET INCOME"/>
    </div>
    <div class="row pt-5">
      <Chart/>
    </div>
    <div class="row pt-5">
      <Transaction/>
      <Latest class="mt-lg-0 mt-3"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import OverviewItem from '@/components/OverviewItem.vue'
import Chart from '@/components/Chart.vue'
import Transaction from '@/components/Transaction.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'home',
  components: {
    OverviewItem,
    Chart,
    Transaction,
    Latest
  }
}
</script>
