<template>
    <div class="modal" tabindex="-1" id="modal" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog" :class="addional_class">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
              <div class="row">
                <slot></slot>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal"  @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary"  v-if="showFooter"  id="btn-save" @click="saveModal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { StringDecoder } from 'string_decoder'


export default {
    props: {
        modalTitle: String,
        addional_class: StringDecoder,
        showSaveButton: Boolean
    },
    mounted() {
        let myModal = new window.bootstrap.Modal(document.getElementById('modal'))
        myModal.show()
    },
    methods: {
        closeModal() {
          this.$emit('closeModal')
            
        },
        saveModal() {
          this.$emit('saveModal')
        }
    }
}
</script>

