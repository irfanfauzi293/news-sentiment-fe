<template>
  <main>
    <Header></Header>
    <div class="main-content">
      <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true"></loading>
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
                    to="/sentiment"
                    class="router-link-button active position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center"
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
              <div class="col-12">
                <div class="row align-items-center justify-content-between">
                  <div class="col-6">
                    <h2>Sentiment Berita</h2>
                    <p class="hp-p1-body mb-0">Berikut sentiment berita dari tokoh politik</p>
                  </div>
                  <div class="col-6 text-end">
                    <button
                      class="btn btn-ghost btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#profileContactEditModal"
                    >
                      Crawl Data
                    </button>
                  </div>

                  <div class="divider border-black-40 hp-border-color-dark-80"></div>

                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-12 col-sm-2">
                            <h5>Sentiments</h5>
                            <p class="hp-p1-body text-black-60 hp-text-color-dark-50 mb-0">
                              Total Berita
                            </p>
                            <h4 class="mb-0">{{ totalNews }}</h4>
                          </div>

                          <div class="col-12 col-sm-10 overflow-hidden">
                            <apexchart
                              height="100"
                              type="bar"
                              :options="optionsEarningsChart"
                              :series="optionsEarningsChart.series"
                            ></apexchart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="divider border-black-40 hp-border-color-dark-80"></div>

                  <div class="col-12 mt-20">
                    <div
                      class="rounded-top border-start border-end border-top border-black-40 hp-border-color-dark-80"
                    >
                      <div class="table-responsive">
                        <table class="table mb-0">
                          <thead>
                            <tr>
                              <th>Judul</th>
                              <th>Sumber</th>
                              <th>Sentiment</th>
                              <th class="text-end">#</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in displayedRecords" :key="index">
                              <td class="align-middle" style="min-width: 200px; width: 200px">
                                <span
                                  class="hp-p1-body text-black-100 hp-text-color-dark-0 fw-lighter"
                                  >{{ item.judul }}</span
                                >
                              </td>

                              <td class="align-middle" style="min-width: 200px; width: 200px">
                                <span
                                  class="hp-p1-body text-black-100 hp-text-color-dark-0 fw-lighter"
                                  >{{ item.source }}</span
                                >
                              </td>

                              <td class="align-middle" style="min-width: 200px; width: 200px">
                                <span
                                  class="hp-p1-body text-black-100 hp-text-color-dark-0 fw-lighter"
                                  >{{ item.svm }}</span
                                >
                              </td>

                              <td class="align-middle text-end">
                                <a @click="openDetailNews(item)" to="/detail-news"
                                  ><i
                                    class="iconly-Light-Show hp-cursor-pointer hp-transition hp-hover-text-color-primary-1 text-black-80"
                                    style="font-size: 24px"
                                  ></i
                                ></a>
                                <i
                                  class="iconly-Light-Delete hp-cursor-pointer hp-transition hp-hover-text-color-danger-1 text-black-80"
                                  style="font-size: 24px"
                                ></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <br />
                    <vue-awesome-paginate
                      :total-items="totalNews"
                      :items-per-page="perPage"
                      :max-pages-shown="5"
                      v-model="currentPage"
                      :on-click="onClickHandler"
                    ></vue-awesome-paginate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="profileContactEditModal"
        tabindex="-1"
        aria-labelledby="aprofileContactEditModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header py-16 px-24">
              <h5 class="modal-title" id="profileContactEditModalLabel">Crawl Data</h5>
              <button
                ref="rProfileContactEditModalCloseBtn"
                type="button"
                class="btn-close hp-bg-none d-flex align-items-center justify-content-center"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="ri-close-line hp-text-color-dark-0 lh-1" style="font-size: 24px"></i>
              </button>
            </div>

            <div class="divider m-0"></div>

            <form>
              <div class="modal-body">
                <div class="row gx-8">
                  <div class="col-12 col-md-12">
                    <div class="mb-24">
                      <label for="name" class="form-label">
                        <span class="text-danger me-4">*</span>
                        Nama Tokoh Politik
                      </label>
                      <input
                        disabled
                        v-model="politicalName"
                        type="text"
                        class="form-control"
                        id="name"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div>
                      <label for="personelText" class="form-label">
                        <span class="text-danger me-4">*</span>
                        Tipe Crawl Data
                      </label>
                      <select v-model="crawlType" class="form-control" id="crawlType">
                        <option :value="10">Fast</option>
                        <option :value="100">Medium</option>
                        <option :value="500">Advance</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer pt-0 px-24 pb-24">
                <div class="divider"></div>

                <button @click="crawlData" type="button" class="m-0 btn btn-primary w-100">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '../../components/Header.vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import { mapGetters, mapActions } from 'vuex'
import { ref } from 'vue'
import { errorMessage, successMessage } from '../../components/Message'

export default {
  components: {
    Header,
    Loading
  },
  data() {
    return {
      currentPage: ref(1),
      perPage: 5,
      politicalName: '',
      politicalDesc: '',
      optionsEarningsChart: {
        series: [
          {
            name: 'Positive',
            data: [0]
          },
          {
            name: 'Neutral',
            data: [0]
          },
          {
            name: 'Negative',
            data: [0]
          }
        ],
        chart: {
          type: 'bar',
          height: 100,
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '100%',
            startingShape: 'rounded',
            endingShape: 'rounded'
          }
        },

        colors: ['#00F7BF', '#1BE7FF', '#0010F7'],
        fill: {
          type: 'solid'
        },
        xaxis: {
          type: 'datetime',
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
        },

        legend: {
          position: 'left'
        },
        tooltip: {
          x: {
            show: false
          }
        }
      },
      newsData: [],
      totalNews: 0,
      isLoading: false,
      crawlType: 10
    }
  },
  computed: {
    ...mapGetters(['currentPolitical']),
    displayedRecords() {
      const startIndex = this.perPage * (this.currentPage - 1)
      const endIndex = startIndex + this.perPage
      return this.newsData.slice(startIndex, endIndex)
    }
  },
  created() {
    this.getNews()
    this.politicalName = this.currentPolitical.name
    this.politicalDesc = this.currentPolitical.description
  },
  methods: {
    ...mapActions(['actionNews']),
    openDetailNews(item) {
      this.actionNews({ ...item })
      this.$router.push('/detail-news')
    },
    onClickHandler(page) {
      console.log(page)
    },
    getNews() {
      axios
        .get(`http://localhost:3000/news-sentiment/news-data/${this.currentPolitical.figureId}`)
        .then((news) => {
          this.newsData = news.data.data.newsData
          this.totalNews = news.data.data.totalNews
          this.optionsEarningsChart.series.find((item) => item.name === 'Positive').data = [
            news.data.data.totalPositive
          ]
          this.optionsEarningsChart.series.find((item) => item.name === 'Neutral').data = [
            news.data.data.totalNeutral
          ]
          this.optionsEarningsChart.series.find((item) => item.name === 'Negative').data = [
            news.data.data.totalNegative
          ]
        })
    },
    async crawlData() {
      try {
        this.isLoading = true
        await axios.post('http://127.0.0.1:5000/fetch_and_save_news', {
          figure_name: this.politicalName,
          figure_id: this.currentPolitical.figureId,
          crawlType: this.crawlType
        })
        await this.getNews()
        this.isLoading = false
        this.$refs.rProfileContactEditModalCloseBtn.click()
        await successMessage('Data berhasil diambil dan disimpan ke database')
      } catch (error) {
        this.isLoading = false
        return errorMessage('Gagal crawl data')
      }
    }
  }
}
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
.router-link-button {
  &.router-link-exact-active {
    background-color: #ebfafa;
    border-right: 1px solid #0010f7;
  }
}
</style>
