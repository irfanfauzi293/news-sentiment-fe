<template>
  <main>
    <Header></Header>
    <div class="main-content">
      <div class="col-12">
        <div class="row justify-content-end gy-32">
          <!-- <div class="col hp-flex-none w-auto">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li class="breadcrumb-item">
                <a href="#">Tokoh Politik</a>
              </li>
            </ol>
          </nav>
        </div> -->

          <div class="col-12 col-md-7">
            <div class="row g-16 align-items-center justify-content-end">
              <div class="col-12 col-md-6 col-xl-4">
                <div class="input-group align-items-center">
                  <span class="input-group-text bg-white hp-bg-dark-100 border-end-0 pe-0">
                    <i class="iconly-Curved-User text-black-80" style="font-size: 16px"></i>
                  </span>
                  <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control border-start-0 ps-8"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div class="col hp-flex-none w-auto">
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#addNewUser"
                >
                  <i class="ri-user-add-line remix-icon"></i>
                  <span>Tambah Tokoh Politik</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div col="12">
        <div class="card hp-contact-card mb-32 mt-24">
          <div class="card-body px-0">
            <div class="table-responsive">
              <table class="table align-middle table-hover table-borderless">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nama Tokoh Politik</th>
                    <th>Sentimen</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(figure, index) in resultQuery" :key="index">
                    <td>
                      <a href="app-contact-detail.html">
                        <div
                          class="avatar-item avatar-lg d-flex align-items-center justify-content-center bg-primary-4 hp-bg-dark-primary text-primary hp-text-color-dark-0 rounded-circle"
                        >
                          <img src="../../assets/img/memoji/memoji-1.png" />
                        </div>
                      </a>
                    </td>
                    <td>{{ figure.name }}</td>
                    <td>
                      <div class="badge bg-danger-4 hp-bg-dark-danger text-danger border-danger">
                        {{ figure.sentiment }}
                      </div>
                    </td>
                    <td>
                      <a @click="openDetail(figure)"
                        ><i
                          class="iconly-Light-Show hp-cursor-pointer hp-transition hp-hover-text-color-primary-1 text-black-80"
                          style="font-size: 24px"
                        ></i
                      ></a>
                      <a @click="deleteFigure(figure)">
                        <i
                          class="iconly-Light-Delete hp-cursor-pointer hp-transition hp-hover-text-color-danger-1 text-black-80"
                          style="font-size: 24px"
                        ></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <nav>
              <ul class="pagination justify-content-end px-32">
                <li class="page-item">
                  <a class="page-link" href="javascript:;">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="left"
                      width="12px"
                      height="12px"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="javascript:;">1</a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="javascript:;">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="right"
                      width="12px"
                      height="12px"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- MODAL -->

      <div
        class="modal fade"
        id="addNewUser"
        tabindex="-1"
        aria-labelledby="addNewUserLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header py-16 px-24">
              <h5 class="modal-title" id="addNewUserLabel">Tambah Tokoh Politik</h5>
              <button
                ref="rModalBtn"
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
                      <input v-model="modalForm.name" type="text" class="form-control" id="name" />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="mb-24">
                      <label for="personelText" class="form-label">Deskripsi tokoh Politik</label>
                      <textarea
                        v-model="modalForm.description"
                        id="personelText"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer pt-0 px-24 pb-24">
                <div class="divider"></div>

                <button @click="createUser" type="button" class="m-0 btn btn-primary w-100">
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
import { mapActions, mapGetters } from 'vuex'
import { errorMessage, successMessage } from '../../components/Message'
export default {
  data() {
    return {
      politicalFigures: [],
      modalForm: {
        name: '',
        description: ''
      },
      searchQuery: null
    }
  },
  components: {
    Header
  },
  computed: {
    ...mapGetters(['currentUser']),
    resultQuery() {
      if (this.searchQuery) {
        return this.politicalFigures.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.politicalFigures
      }
    }
  },
  created() {
    axios
      .get(`http://localhost:3000/news-sentiment/figures/${this.currentUser.userId}`)
      .then((figures) => {
        this.politicalFigures = figures.data.data
      })
  },
  methods: {
    ...mapActions(['actionPolitical']),
    openDetail(item) {
      this.actionPolitical({
        name: item.name,
        description: item.description,
        figureId: item.figureId
      })
      this.$router.push('/detail-figure')
    },
    async createUser() {
      try {
        const result = await axios.post('http://localhost:3000/news-sentiment/figures', {
          userId: this.currentUser.userId,
          name: this.modalForm.name,
          description: this.modalForm.description
        })
        await successMessage(result.data.message)
        axios.get('http://localhost:3000/news-sentiment/figures').then((figures) => {
          this.politicalFigures = figures.data.data
        })
        this.$refs.rModalBtn.click()
      } catch (error) {
        return errorMessage('Gagal menambahkan data tokoh politik')
      }
    },
    async deleteFigure(item) {
      try {
        const result = await axios.delete(
          `http://localhost:3000/news-sentiment/figures/${item.figureId}`
        )
        await successMessage(result.data.message)
        axios.get('http://localhost:3000/news-sentiment/figures').then((figures) => {
          this.politicalFigures = figures.data.data
        })
      } catch (error) {
        return errorMessage('Gagal menghapus data tokoh politik')
      }
    }
  }
}
</script>
