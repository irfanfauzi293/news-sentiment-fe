<template>
  <main>
    <Header></Header>
    <div class="main-content">
      <div class="col-12">
        <div class="row bg-black-0 hp-bg-color-dark-100 rounded pe-16 pe-sm-32 mx-0">
          <div
            class="col hp-profile-menu py-24"
            style="flex: 0 0 240px; border-right: 1px solid #dfe6e9"
          >
            <div class="w-100">
              <div class="hp-profile-menu-header mt-16 mt-lg-0 text-center">
                <div class="hp-menu-header-btn mb-12 text-end">
                  <div
                    class="d-inline-block"
                    id="profile-menu-dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <button type="button" class="btn btn-text btn-icon-only">
                      <i
                        class="ri-more-2-line text-black-100 hp-text-color-dark-30 lh-1"
                        style="font-size: 24px"
                      ></i>
                    </button>
                  </div>

                  <ul class="dropdown-menu" aria-labelledby="profile-menu-dropdown">
                    <li>
                      <a class="dropdown-item" href="javascript:;">Change Avatar</a>
                    </li>
                  </ul>
                </div>

                <div class="d-flex justify-content-center">
                  <div class="d-inline-block position-relative">
                    <div
                      class="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                      style="width: 80px; height: 80px"
                    >
                      <img src="../../assets/img/memoji/memoji-1.png" />
                    </div>
                  </div>
                </div>

                <h3 class="mt-24 mb-4">{{ politicalName }}</h3>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div class="hp-profile-menu-body w-100 text-start mt-48 mt-lg-0">
              <ul class="me-n1 mx-lg-n12">
                <li class="mt-4 mb-16">
                  <router-link
                    to="/detail-figure"
                    class="router-link-button position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center"
                  >
                    <i class="iconly-Curved-User me-16"></i>
                    <span>Personal Information</span>

                    <span
                      class="hp-menu-item-line position-absolute opacity-0 h-100 top-0 end-0 bg-primary hp-bg-dark-0"
                      style="width: 2px"
                    ></span>
                  </router-link>
                </li>

                <li class="mt-4 mb-16">
                  <router-link
                    to="sentiment"
                    class="router-link-button position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center"
                  >
                    <i class="iconly-Curved-Activity me-16"></i>
                    <span>Sentiment</span>

                    <span
                      class="hp-menu-item-line position-absolute opacity-0 h-100 top-0 end-0 bg-primary hp-bg-dark-0"
                      style="width: 2px"
                    ></span>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="hp-profile-menu-footer">
              <img src="../../assets/img/pages/profile/menu-img.svg" alt="Profile Image" />
            </div>
          </div>

          <div class="col ps-16 ps-sm-32 py-24 py-sm-32 overflow-hidden">
            <div class="row">
              <div class="col-12 col-md-8">
                <h2>Personal Informations</h2>
                <p class="hp-p1-body mb-0">
                  {{ politicalDesc }}
                </p>
              </div>

              <div class="divider border-black-40 hp-border-color-dark-80"></div>

              <div class="col-12 col-md-12">
                <div class="row">
                  <div class="col-12 col-sm-6 col-xl-3">
                    <div class="card hp-card-1">
                      <div class="card-body p-16">
                        <div
                          class="row align-items-center flex-shrink-1 w-100 mx-0 d-flex justify-content-center"
                        >
                          <div style="width: 106px" class="px-0">
                            <div
                              class="h-100 bg-primary-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center rounded-4"
                            >
                              <i
                                :class="`ri-emotion-happy-line text-success hp-text-color-dark-success-2`"
                                style="font-size: 80px"
                              ></i>
                            </div>
                          </div>

                          <div class="col pe-0 text-center">
                            <h3 class="mb-0 fw-semibold">{{ totalPositive }}</h3>
                            <p class="hp-p1-body mb-0">Positive</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-xl-3">
                    <div class="card hp-card-1">
                      <div class="card-body p-16">
                        <div
                          class="row align-items-center flex-shrink-1 w-100 mx-0 d-flex justify-content-center"
                        >
                          <div style="width: 106px" class="px-0">
                            <div
                              class="h-100 bg-warning-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center rounded-4"
                            >
                              <i
                                :class="`ri-emotion-normal-line text-primary hp-text-color-dark-success-2`"
                                style="font-size: 80px"
                              ></i>
                            </div>
                          </div>

                          <div class="col pe-0 text-center mt-2">
                            <h3 class="mb-0 fw-semibold">{{ totalNeutral }}</h3>
                            <p class="hp-p1-body mb-0">Neutral</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-xl-3">
                    <div class="card hp-card-1">
                      <div class="card-body p-16">
                        <div
                          class="row align-items-center flex-shrink-1 w-100 mx-0 d-flex justify-content-center"
                        >
                          <div style="width: 106px" class="px-0">
                            <div
                              class="h-100 bg-success-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center rounded-4"
                            >
                              <i
                                :class="`ri-emotion-unhappy-line text-danger hp-text-color-dark-success-2`"
                                style="font-size: 80px"
                              ></i>
                            </div>
                          </div>

                          <div class="col pe-0 text-center mt-2">
                            <h3 class="mb-0 fw-semibold">{{ totalNegative }}</h3>
                            <p class="hp-p1-body mb-0">Negative</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-2">
                <label for="loginUsername" class="form-label">Year</label>
                <select
                  @change="onChangeYear"
                  v-model="selectedYear"
                  class="form-control"
                  id="loginUsername"
                >
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              <div class="divider border-black-40 hp-border-color-dark-80"></div>
              <div class="col-12">
                <div class="card hp-card-6 hp-chart-text-color">
                  <div class="card-body">
                    <div class="row justify-content-between">
                      <div class="col-6">
                        <h5 class="me-8">Sentiment</h5>
                      </div>
                    </div>

                    <apexchart
                      type="area"
                      heigth="100%"
                      :series="optionsAnalyticsVisiters.series"
                      :options="optionsAnalyticsVisiters"
                      ref="sentimentChart"
                    >
                    </apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '../../components/Header.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      politicalName: '',
      politicalDesc: '',
      optionsStatisticsOrder: {
        series: [
          {
            name: 'Earning',
            data: [50, 70, 100, 60]
          }
        ],
        chart: {
          type: 'bar',
          height: '80',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 10,
            top: -10,
            bottom: -10
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '65%',
            borderRadius: 2,
            colors: {
              backgroundBarColors: [],
              backgroundBarRadius: 5
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#0010F7'],
        xaxis: {
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
          show: false,
          max: 100
        },
        tooltip: {
          x: {
            show: false
          }
        }
      },
      optionsStatisticsUsersVertical: {
        series: [40],
        chart: {
          type: 'radialBar',
          height: '92',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false,
          padding: {
            left: -24,
            right: -24,
            top: -12,
            bottom: -16
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
              size: '45%'
            },
            track: {
              show: true,
              background: '#ffffff',
              strokeWidth: '100%',
              opacity: 1,
              margin: 0
            },
            dataLabels: {
              show: true,
              value: {
                fontSize: '12px',
                color: '#FFC700',
                fontWeight: 500,
                offsetY: -11
              },
              total: {
                show: true,
                fontSize: '12px',
                label: '',
                formatter: function (w) {
                  return '%' + 40
                }
              }
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#FFD252'],
        xaxis: {
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
          show: false,
          max: 100
        },
        tooltip: {
          x: {
            show: false
          }
        }
      },
      optionsStatisticsSubscribeVertical: {
        series: [
          {
            name: 'Earning',
            data: [50, 70, 100, 60]
          }
        ],
        chart: {
          type: 'bar',
          height: 80,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 10,
            top: -10,
            bottom: -10
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '65%',
            borderRadius: 2,
            colors: {
              backgroundBarColors: [],
              backgroundBarRadius: 5
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#00F7BF'],
        xaxis: {
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
          show: false,
          max: 100
        },
        tooltip: {
          x: {
            show: false
          }
        }
      },
      optionsStatisticsTicket: {
        series: [76],
        chart: {
          type: 'radialBar',
          height: '80',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false,
          padding: {
            left: -24,
            right: -24,
            top: -16,
            bottom: -16
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
              size: '45%'
            },
            track: {
              show: true,
              background: '#ffffff',
              strokeWidth: '100%',
              opacity: 1,
              margin: 0
            },
            dataLabels: {
              show: true,
              value: {
                fontSize: '12px',
                color: '#FF455E',
                fontWeight: 500,
                offsetY: -11
              },
              total: {
                show: true,
                fontSize: '12px',
                label: '',
                formatter: function (w) {
                  return '%' + 76
                }
              }
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#FF455E'],
        xaxis: {
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
          show: false,
          max: 100
        },
        tooltip: {
          x: {
            show: false
          }
        }
      },
      optionsAnalyticsVisiters: {
        series: [
          {
            name: 'Neutral',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: 'Positive',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: 'Negative',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ],
        chart: {
          fontFamily: 'Manrope, sans-serif',
          type: 'area',
          id: 'analytics-visiters-chart',
          height: '100%',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        colors: ['#0063F7', '#00F7BF', '#FF0000'],
        labels: {
          style: {
            fontSize: '14px'
          }
        },
        fill: {
          opacity: 0.3
        },

        dataLabels: {
          enabled: false
        },

        grid: {
          borderColor: '#DFE6E9',
          row: {
            opacity: 0.5
          }
        },

        markers: {
          strokeWidth: 0,
          size: 0,
          colors: ['rgba(0, 255, 198, 0.17)', 'rgba(45, 125, 239, 0.17)'],
          hover: {
            sizeOffset: 1
          }
        },
        xaxis: {
          axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            style: {
              colors: ['636E72'],
              fontSize: '14px'
            }
          },
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Des'
          ]
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetX: 40
        },
        yaxis: {
          labels: {
            style: {
              colors: ['636E72'],
              fontSize: '14px'
            }
          },

          min: 0,
          max: 50,
          tickAmount: 3
        }
      },
      newsData: [],
      totalNews: 0,
      selectedYear: 2023,
      totalPositive: 0,
      totalNegative: 0,
      totalNeutral: 0
    }
  },
  components: {
    Header
  },
  computed: {
    ...mapGetters(['currentPolitical'])
  },
  created() {
    this.fetchNewsData()
    this.politicalName = this.currentPolitical.name
    this.politicalDesc = this.currentPolitical.description
  },
  methods: {
    async onChangeYear() {
      this.optionsAnalyticsVisiters.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.optionsAnalyticsVisiters.series[1].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.optionsAnalyticsVisiters.series[2].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      await this.fetchNewsData()
    },
    fetchNewsData() {
      axios
        .get(
          `http://localhost:3000/news-sentiment/news-data/${this.currentPolitical.figureId}?year=${this.selectedYear}`
        )
        .then((news) => {
          this.newsData = news.data.data.newsData
          this.totalNews = news.data.data.totalNews
          this.totalPositive = news.data.data.totalPositive
          this.totalNeutral = news.data.data.totalNeutral
          this.totalNegative = news.data.data.totalNegative
          news.data.data.dataMonthPositive.forEach((dm) => {
            this.optionsAnalyticsVisiters.series[1].data[dm.MONTH - 1] = dm.COUNT
          })
          news.data.data.dataMonthNegative.forEach((dm) => {
            this.optionsAnalyticsVisiters.series[2].data[dm.MONTH - 1] = dm.COUNT
          })
          news.data.data.dataMonthNeutral.forEach((dm) => {
            this.optionsAnalyticsVisiters.series[0].data[dm.MONTH - 1] = dm.COUNT
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-button {
  &.router-link-exact-active {
    background-color: #ebfafa;
    border-right: 1px solid #0010f7;
  }
}
</style>
