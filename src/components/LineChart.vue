<template>
  <div class="col-12">
     <div class="card border-0">
        <div class="card-body pt-5 pb-5">
          <chart :options="polar" class="w-100"></chart>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'LineChart',
  props: [],
  data: function() {
    return {
      polar: {
        legend: {
          data: ['Total Revenue', 'Total Cost', 'Net Income'],
          textStyle: {
            color: '#67757c',
            fontFamily: 'Lato',
            padding: 4
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        animationDuration: 2000,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['6/9', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15'],
          nameTextStyle: {
            color: '#67757c',
            fontFamily: 'Lato'
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Total Revenue',
            type: 'line',
            data: [5248, 5223, 4722, 3298, 6978, 3200, 4007],
            itemStyle: {
              color: '#4680ff'
            },
            lineStyle: {
              width: 3
            }
          },
          {
            name: 'Total Cost',
            type: 'line',
            data: [2200, 1820, 1910, 2340, 2900, 3300, 3100],
            itemStyle: {
              color: '#ffb64d'
            },
            lineStyle: {
              width: 3
            }
          },
          {
            name: 'Net Income',
            type: 'line',
            data: [1500, 2320, 2010, 1540, 1900, 3300, 4100],
            itemStyle: {
              color: '#26dad2'
            },
            lineStyle: {
              width: 3
            }
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}
</style>
