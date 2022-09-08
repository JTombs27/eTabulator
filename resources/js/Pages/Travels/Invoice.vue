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
                <div class="fs-6 c-red-500" v-if="form.errors.invoice">{{ form.errors.invoice }}</div>
                <span>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="invoice_loader"></span>
                    <span class="ml-2" :class="invoiceMessageClass"> {{ invoiceMessage }} </span>
                </span>
            </div>
            <div>
                <label for="invoice" class="form-label">Actual Liters</label>
                <input type="text" class="form-control" id="actual" autocomplete="off" v-model="form.actual_liter">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_liter">
                    {{ form.errors.actual_liter }}
                </div>
            </div>
            <span class="ml-2" v-if="form.processing">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Submitting... 
            </span>
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
                actual_liter:null,
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
        this.form.id = this.item.id;
        this.form.actual_liter = this.item.actual_liters;
        this.invoice()
    },

    methods: {
        invoice() {
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
            this.form.clearErrors();
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
            this.form.post('/travels/updateInvoice', {
                onStart:() => {
                    this.invoiceMessageClass = ''
                },
                onSuccess: (e) => {
                    this.showInvoice = false;
                    $("#modal").hide();
                    $('body').removeClass('modal-open');
                    $('body').css("overflow","scroll");
                    $('.modal-backdrop').remove();
                    this.$emit('closeModal',"save")
                },
                onFinish: (e) => {
                    this.invoice_loader = false;
                },

            })
        },
    },

}
</script>

<style>

</style>