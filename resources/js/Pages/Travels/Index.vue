<template>
     <Head>
        <title>Travels</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Travels</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <!-- <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search..."> -->
                </div>
                <div class="peer"  v-if="can.canCreateTravel">
                    <Link class="btn btn-primary btn-sm" href="/travels/create">Add Travel</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

       
        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Vehicle</th>
                            <th scope="col">Driver</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Office id</th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in travels" :key="index">
                            <td>{{item.FDESC}} <strong>({{ item.PLATENO}})</strong></td>
                            <td v-if="item.actual_driver">{{item.actual_driver}}</td>
                            <td v-else>{{`${item.first_name} ${mi(item.middle_name)} ${item.last_name}`}}</td>
                            <td v-if="!item.date_to">{{item.date_from}}</td>
                            <td v-else>{{item.date_from}} to {{item.date_to}}</td>
                            <td v-html="statusDisplay(item)"></td>
                            <td >{{ item.office_id }}</td>
                            <td style="text-align: right">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu" :id="item.id" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" :href="`/travels/${item.id}/edit`" >Edit</Link></li>
                                    <li v-if="item.status == 'Approved'">
                                        <button as="button" class="dropdown-item" @click="tripTicket(item.id)">
                                            <span>Trip Ticket</span>
                                        </button>
                                    </li>
                                    <!-- <li><Link class="dropdown-item" :href="`/travels/set-status`" method="post" :data="item" as="button" v-if="can.canSetStatus">Approve</Link></li> -->
                                    <li v-if="item.status == 'Disapproved' || item.status==null">
                                        
                                        <button as="button" class="dropdown-item" @click="approvedStatus(item,'Approved')" v-if="can.canSetStatus && !loader">
                                            <span  class="text-success">Approve</span>
                                        </button>
                                    </li>
                                    <li v-if="item.status == 'Approved' || item.status==null">
                                        <button as="button" class="dropdown-item" @click="approvedStatus(item, 'Disapproved')" v-if="can.canSetStatus && !loader">
                                            <span  class="text-danger">Disapprove</span>
                                        </button>
                                    </li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <!-- <pagination :next="users.next_page_url" :prev="users.prev_page_url" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        can: Object,
        travels:Object,
        user:Object
    },

    data() {
        
        return {
            loader:false,
            itemId:"",
            dropdownOption:"outside"
        }
    },

    methods:{
        approvedStatus(item, status) {
            //   $(`.dropdown-menu#${item.id}`).toggle();
            this.$inertia.post('/travels/set-status', {id:item.id, status:status}, { 
                onStart: (data) => {
                    this.loader = true
                    this.itemId = item.id
                },

                onFinish: () => {
                    this.loader = false
                }

                
            })
        },
        tripTicket(id) {
            window.open("http://192.168.6.23:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Ftrip_ticket&standAlone=true&decorate=no&id="+id,"_blank");
        },
        
        statusDisplay(item) {
            if (this.loader && item.id == this.itemId) {
                return `<span v-if="loader" class="dropdown-item">
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden"></span>
                    </div>
                    Processing...
                </span>`
            } else {
                let classText = "";
                if (item.status == "Approved") {
                    classText = "badge bg-success";
                } else if (item.status == "Disapproved") {
                    classText = "badge bg-danger";
                } else {
                    classText = "badge bg-secondary";
                }
                return `<span class="${classText}">${this.status(item.status)}</span>`
            }
        }
    },

    mounted(){
        console.log()
    },
    computed: {
        mi() {
            return value => value ? `${value.charAt(0)}.` : "";
        },

        status() {
            return value => {
                if (value == "Approved") {
                    return "Approved"
                } else if (!value) {
                    return "Pending"
                } else if(value == "Disapproved") {
                    return "Disapproved"
                }
            }
        }
    }
}
</script>

<style scoped>

    .dot-typing {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #9880ff;
      color: #9880ff;
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      animation: dotTyping 1.5s infinite linear;
    }

    @keyframes dotTyping {
      0% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      16.667% {
        box-shadow: 9984px -10px 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      33.333% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      50% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px -10px 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      66.667% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      83.333% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px -10px 0 0 #9880ff;
      }
      100% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
    }

</style>