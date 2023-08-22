<template>
  <div class="mb-16">
    <label :for="id" class="form-label">{{ label }} :</label>
    <input
      @input="(event) => $emit('update:modelValue', event.target.value)"
      :value="d_value"
      :maxlength="maxlength"
      :type="textType"
      class="form-control"
      :id="id"
    />
    <div class="d-flex justify-content-end align-items-center">
      <small class="text-danger">{{ d_errors[0] }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    label: { type: String, default: '' },
    maxlength: { type: Number, default: 24 },
    minlength: { type: Number, default: 0 },
    modelValue: { type: String, default: '' },
    textType: { type: String, default: 'text' },
    customValidator: { type: Function, default: null }
  },
  data() {
    return {
      d_value: this.modelValue,
      d_errors: []
    }
  },
  methods: {
    clearError() {
      this.d_errors = []
    },
    hasError() {
      return this.d_errors.length > 0
    },
    validate() {
      this.clearError()
      if (this.d_value.length > this.maxlength) {
        this.d_errors.push(`${this.label} input exceeded`)
      }
      if (this.d_value.length < this.minlength) {
        this.d_errors.push(`${this.label} must have ${this.minlength} characters`)
      }
      if (this.customValidator !== null) {
        const message = this.customValidator(this.d_value)
        if (message) {
          this.d_errors.push(message)
        }
      }
    }
  },
  watch: {
    modelValue(n, o) {
      this.d_value = n === null ? '' : n
      this.validate()
    }
  }
}
</script>
