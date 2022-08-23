<template>
     <Modal 
        v-if="showInvoice"
        @closeModal="invoice()"
        :showSaveButton="true"
        @saveModal="saveInvoice()"
        :modalTitle="'Invoice'"
    >
       
       <form @submit.prevent="saveInvoice()">
            <div class="mb-3">
                <label for="invoice" class="form-label">Invoice #</label>
                <input type="text" class="form-control" id="invoice" autocomplete="off" v-model="form.invoice" @keyup="checkInvoice()">
                <span>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="invoice_loader"></span>
                    <span class="ml-2" :class="invoiceMessageClass"> {{ invoiceMessage }} </span>
                </span>
            </div>
       </form>
    </Modal>
</template>

<script>
import Modal from '../../Shared/Modal.vue';
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props:{
        item:{
            type:Object,
            default:()=>{}
        }
    },
    components: { Modal },
    data() {
        return {
            form:useForm({
                invoice:null,
                id:null
            }),
            invoice_loader:false,
            invoiceMessage:"",
            invoiceMessageClass:"",
            loader:false,
            showInvoice:false,
        }
    },

    mounted() {
        this.form.id = this.item.id
        this.invoice()
    },

    methods: {
        invoice() {
            console.log(this.item)
            this.invoiceMessageClass = '';
            this.invoiceMessage = '';
            if (this.item) {
                this.showInvoice = true;
                this.form.id = this.item.id;
                this.form.invoice = this.item.invoice;
            } else {
                this.showInvoice = false;
                this.form.id = null;
                this.form.invoice = null;
                this.$emit('closeModal')
            }
        },

        checkInvoice() {
            this.invoice_loader = true;
            this.invoiceMessage = "Checking invoice number";
            this.invoiceMessageClass = ''
            this.validateInvoice();
        },

        validateInvoice: _.debounce(function() {
            axios.post('/travels/checkInvoice', {id:this.form.id, invoice_no: this.form.invoice})
                .then((response) => {
                    if (this.form.invoice) {
                        if (response.data) {
                            this.invoiceMessage = 'Valid';
                            this.invoiceMessageClass = 'text-success'
                        } else {
                            this.invoiceMessage = 'Invoice # already exist';
                            this.invoiceMessageClass = 'text-danger'
                        }
                    } else {
                        this.invoiceMessage = '';
                        this.invoiceMessageClass = ''
                    }
                    this.invoice_loader = false;
                })
            // this.showSaveButton = true
        },500),

        saveInvoice() {
            this.$inertia.post('/travels/updateInvoice', this.form, {
                onStart:() => {
                    this.invoice_loader = true;
                    this.invoiceMessageClass = ''
                    this.invoiceMessage = 'Submitting...';
                },
                onSuccess: (e) => {
                    this.showInvoice = false;
                    $("#modal").hide();
                    $('body').removeClass('modal-open');
                    $('body').css("overflow","scroll");
                    $('.modal-backdrop').remove();
                    this.$emit('closeModal',"save")
                },
                onError: (e) => {
                    this.invoice_loader = false;
                    this.invoiceMessage = e.invoice;
                    this.invoiceMessageClass = 'text-danger'
                }

            })
        },
    },

}
</script>

<style>

</style>