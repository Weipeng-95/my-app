<script>
    import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
  
    let options = {
      chart: {
        height: '400px',
        maxWidth: '100%',
        type: 'area',
        dropShadow: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#47277D',
          gradientToColors: ['#47277D']
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 6
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        }
      },
      series: [
        {
          name: 'Neuzugang',
          data: [5, 9, 35, 45, 7, 43,9,11],
          color: '#846EA8'
        }
      ],
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February', '08 February'],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  </script>
  
  <Card class="bg-secondary-50 shadow-[0_0_38px_rgba(108,82,151,0.2)] border border-[#C6BCD7]">
    <div class="flex justify-between ">
      <div>
        <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
      </div>
    </div>
    <Chart {options} />
  </Card>