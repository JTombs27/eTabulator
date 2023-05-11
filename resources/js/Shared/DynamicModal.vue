<template>
  <div class="modal" tabindex="-1" id="modal" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog" :class="addional_class">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body bgc-grey-100" style="padding: 0px 12px !important;">
          <slot></slot>
        </div>
        <div class="modal-footer" style="padding-top: 3px;padding-bottom: 3px;">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" v-if="(showBtn == true || showBtn == null) ? true:false"  @click="saveModal">{{ buttonTitle == null ? 'Save': buttonTitle}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StringDecoder } from 'string_decoder'
export default {
  props: {
      modalTitle    : String,
      addional_class: StringDecoder,
      buttonTitle   : String,
      showBtn       : Boolean,
  },
  data() {
    return {
      myModal: null
    }
  },
  mounted() {
    this.myModal = new window.bootstrap.Modal(document.getElementById('modal'))
    this.myModal.show()
  },
  methods: {
      closeModal() {
          this.$emit('closeModal')
      },
      saveModal() {
          this.$emit('saveModal')
          $('body').removeAttr("style");
      }
  }
}
</script>

