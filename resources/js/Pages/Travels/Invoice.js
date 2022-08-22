
import _ from "lodash";
import { ref, onMounted, watchEffect } from "vue";

export const currentStatus = {
    onProgress:false,
    status:"",
    message:"",
}

export function useCheck()
{
    
    const invoiceNumber = ref(null);
    const id = ref(null);

     function checkInvoice() {
        currentStatus.message = "Checking invoice number";
        validateInvoice();
        // console.log(temporyInvoice)
        

    }

    watchEffect(() => {
        if(invoiceNumber.value != null && currentStatus.onProgress) {
            checkInvoice()
        }
    })
    
    function validateInvoice() {
        axios.post('/travels/checkInvoice', {id:id.value, invoice_no: invoiceNumber.value})
        .then((response) => {
            if (invoiceNumber) {
                if (response.data) {
                    currentStatus.message = 'Valid';
                    currentStatus.class = 'text-success'
                } else {
                    currentStatus.message = 'Invoice # already exist';
                    currentStatus.class = 'text-danger'
                }
            } else {
                currentStatus.message = '';
                currentStatus.class = ''
            }
            currentStatus.onProgress = false
            // temporyInvoice.value = null;
        })
    }
    
    let invoiceStatus = ref(currentStatus)

    return {invoiceNumber,checkInvoice,invoiceStatus, id};
}