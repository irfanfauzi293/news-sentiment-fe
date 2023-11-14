<template>
  <main>
    <Header></Header>
    <div class="main-content row">
      <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true"></loading>
      <div class="col-12">
        <div
          class="hp-bg-black-bg py-32 py-sm-64 px-24 px-sm-48 px-md-80 position-relative overflow-hidden hp-page-content"
          style="border-radius: 32px"
        >
          <svg
            width="358"
            height="336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="position-absolute hp-rtl-scale-x-n1"
            style="bottom: 0px; right: 0px"
          >
            <path
              d="M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446"
              stroke="url(#a)"
              stroke-width="40"
              stroke-linejoin="bevel"
            ></path>
            <defs>
              <linearGradient
                id="a"
                x1="315.467"
                y1="6.875"
                x2="397.957"
                y2="337.724"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>

          <div class="row">
            <div class="col-sm-6 col-12">
              <div class="row">
                <div class="col-12">
                  <h1 class="mb-0 hp-text-color-black-0">
                    You can analyze a news of political figures
                  </h1>
                </div>
                <div class="col-12">
                  <p class="h5 mb-20 mt-24 hp-text-color-black-0">
                    Anda dapat masukan link berita yang ingin di analisis
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="input-group input-group-lg">
                    <input
                      v-model="inputUrl"
                      type="text"
                      class="form-control"
                      placeholder="Paste URL Berita"
                      aria-describedby="search-input-button"
                    />
                    <button
                      class="btn btn-primary px-16 px-sm-64 hp-hover-text-color-black-0"
                      type="button"
                      id="search-input-button"
                      @click="searchNews"
                    >
                      Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <slot v-if="!!searchResult.title">
        <div class="col-12 mt-16">
          <div class="row g-16">
            <div class="col">
              <div class="card h-100">
                <div id="imgNews"></div>
                <img :src="searchResult.image" class="card-img-top" alt="..." />
                <div id="titleNews" class="card-body">
                  <h1>{{ searchResult.title }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-16">
          <div class="hp-faq-tabs bg-white hp-bg-dark-100 rounded py-12 px-24">
            <h5>Keywords</h5>
            <ul class="nav nav-pills hp-overflow-x-auto">
              <li v-for="(item, index) in searchResult.keyword" :key="index" class="nav-item me-4">
                <button class="nav-link py-4 active" data-bs-toggle="pill" type="button">
                  <span class="d-flex align-items-center">{{ item }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-8 mt-16">
          <div class="card">
            <div class="card-body">
              <div class="row g-32 justify-content-between">
                <div class="col-12 col-md-6">
                  <h4 class="mb-1">News Info</h4>
                  <h5 class="mb-0">Link :</h5>
                  <div id="urlNews">
                    <p>{{ searchResult.url }}</p>
                  </div>
                  <h5 class="mb-0">
                    Date :
                    <div id="dateNews">
                      <p>{{ searchResult.date }}</p>
                    </div>
                  </h5>
                </div>

                <div class="col-12 col-md-6">
                  <h4 class="mb-1">Journalist</h4>
                  <div class="row g-8">
                    <div class="col hp-flex-none w-auto">
                      <div id="authorNews">
                        <h2>{{ searchResult.author }}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4 mt-16">
          <div class="card">
            <div class="card-body">
              <div class="row g-16">
                <div class="col-6 hp-flex-none w-auto">
                  <div
                    class="avatar-item d-flex align-items-center justify-content-center avatar-lg bg-success-4 hp-bg-color-dark-success rounded-circle"
                  >
                    <i
                      :class="`${emotes[searchResult.sentimentLabel]} hp-text-color-dark-success-2`"
                      style="font-size: 24px"
                    ></i>
                  </div>
                </div>

                <div class="col">
                  <h2 class="mb-4 mt-8">
                    <span>{{ searchResult.sentimentLabel }}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-16">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div class="row align-items-center">
                    <div class="col pe-16">
                      <p class="d-flex align-items-center hp-p1-body mb-0">
                        <span><b>Text News</b></span>
                      </p>
                    </div>
                  </div>
                </button>
              </h2>

              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div id="textNews">
                    <p>{{ searchResult.text }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div class="row align-items-center">
                    <div class="col pe-16">
                      <p class="d-flex align-items-center hp-p1-body mb-0">
                        <span><b>Summary</b></span>
                      </p>
                    </div>
                  </div>
                </button>
              </h2>

              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div id="summaryNews">
                    <p>{{ searchResult.summary }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </main>
</template>

<script>
import Header from '../../components/Header.vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { errorMessage } from '../../components/Message'

export default {
  data() {
    return {
      searchResult: {
        author: '',
        date: null,
        image: null,
        keyword: [],
        sentimentLabel: '',
        sentimentScore: 0,
        source: '',
        summary: '',
        title: '',
        url: ''
      },
      inputUrl: null,
      isLoading: false,
      emotes: {
        Neutral: 'ri-emotion-normal-line text-primary',
        Positive: 'ri-emotion-happy-line text-success',
        Negative: 'ri-emotion-unhappy-line text-danger'
      }
    }
  },
  components: {
    Header,
    Loading
  },
  methods: {
    async searchNews() {
      try {
        this.isLoading = true
        const result = await axios.post('http://127.0.0.1:5000/analyze_url', {
          url: this.inputUrl
        })
        console.log(result.data)
        if (result.data.length > 0) {
          this.searchResult = { ...result.data[0] }
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        return errorMessage('Gagal mencari data berita')
      }
    }
  }
}
</script>
