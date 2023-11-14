<template>
  <main>
    <Header></Header>
    <div class="main-content">
      <div class="col-12">
        <div class="row g-32">
          <div class="col-12 col-xl-8">
            <div id="invoice" class="card border-none hp-invoice-card">
              <img :src="currentNews.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-12 col-lg-6">
                    <img
                      class="hp-logo mb-16"
                      src="https://cdn.cnbcindonesia.com/cnbc/images/logo.png?v=5.8.5"
                      alt="logo"
                    />
                  </div>

                  <div class="col-12 col-lg-6">
                    <p class="hp-p1-body text-end">Tanggal {{ currentNews.date }}</p>
                    <p class="hp-p1-body mb-16 text-end">Nama Jurnalis {{ currentNews.penulis }}</p>
                  </div>

                  <div class="col-12">
                    <h3>{{ currentNews.judul }}</h3>
                    <a :href="currentNews.source">
                      <p>
                        {{ currentNews.source }}
                      </p>
                    </a>
                  </div>
                </div>

                <div class="divider"></div>

                <div class="row justify-content-between">
                  <div class="col-12 col-md-12 pb-16 hp-print-info">
                    <p class="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label">
                      Isi Berita:
                    </p>
                    <p>
                      {{ currentNews.text }}
                    </p>
                  </div>
                </div>

                <div class="divider"></div>

                <div class="row justify-content-between">
                  <div class="col-12 col-md-12 pb-16 hp-print-info">
                    <p class="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label">
                      Rangkuman Berita:
                    </p>
                    <p>
                      {{ currentNews.summary }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-4">
            <div class="card">
              <div class="card-body">
                <div class="row g-16">
                  <div class="col-6 hp-flex-none w-auto">
                    <div
                      class="avatar-item d-flex align-items-center justify-content-center avatar-lg bg-success-4 hp-bg-color-dark-success rounded-circle"
                    >
                      <i
                        :class="`${emotes[currentNews.svm]} hp-text-color-dark-success-2`"
                        style="font-size: 24px"
                      ></i>
                    </div>
                  </div>

                  <div class="col">
                    <h2 class="mb-4 mt-8">
                      <span>{{ currentNews.svm }}</span>
                    </h2>
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

export default {
  data() {
    return {
      emotes: {
        Neutral: 'ri-emotion-normal-line text-primary',
        Positive: 'ri-emotion-happy-line text-success',
        Negative: 'ri-emotion-unhappy-line text-danger'
      }
    }
  },
  components: {
    Header
  },
  computed: {
    ...mapGetters(['currentNews'])
  },
  created() {
    console.log(this.currentNews)
  }
}
</script>
