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

        <transition name="slide-fade" mode="in-out">
            <filtering v-if="filter" @closeFilter="filter=false">
                <label for="">From</label>
                <input type="date" v-model="filterData.date_from" class="form-control">
                <label for="">To</label>
                <input type="date" v-model="filterData.date_to" class="form-control">
                <button class="btn btn-sm btn-primary mT-5 text-white" @click="runFilter()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg> Find</button> &nbsp;
                <button class="btn btn-sm btn-danger mT-5 text-white" @click="reset()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg> Reset</button>
            
            </filtering>
        </transition>

       
        <div class="col-12">
            <div class="bgc-white p-20 bd shadow-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Trip Ticket</th>
                            <th scope="col">Vehicle</th>
                            <th scope="col">Driver</th>
                            <th scope="col">Date</th>
                            <th scope="col">Liter/s</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in travels.data" :key="index">
                            <td>{{item.ticket_number}}</td>
                            <td>{{item.FDESC}} <strong>({{ item.PLATENO}})</strong></td>
                            <td v-if="item.actual_driver">{{item.actual_driver}}</td>
                            <td v-else>{{`${item.first_name} ${mi(item.middle_name)} ${item.last_name}`}}</td>
                            <td v-if="!item.date_to">{{item.date_from}}</td>
                            <td v-else>{{item.date_from}} to {{item.date_to}}</td>
                            <td class="text-center">{{item.liters}}</td>
                            <td class="text-right">{{`\u20B1${Number(item.price).toLocaleString(undefined, {minimumFractionDigits: 2})}`}}</td>
                            <td v-html="statusDisplay(item)"></td>
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
                                    <li v-if="(item.status == 'Disapproved' || item.status==null) && item.soa_travel == null">
                                        
                                        <button as="button" class="dropdown-item" @click="approvedStatus(item,'Approved')" v-if="can.canSetStatus && !loader">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31abf7" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                            </svg> Approve
                                        </button>
                                    </li>
                                    <li v-if="(item.status == 'Approved' || item.status==null) && item.soa_travel == null">
                                        <button as="button" class="dropdown-item" @click="approvedStatus(item, 'Disapproved')" v-if="can.canSetStatus && !loader">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5565b" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                              <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"/>
                                            </svg> Disapprove
                                        </button>
                                    </li>
                                    
                                    <li v-if="item.status == 'Approved'">
                                        <button as="button" class="dropdown-item" @click="tripTicket(item.id)">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-printer me-2" viewBox="0 0 16 16">
                                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                        </svg>Trip & Withdrawal</span>
                                        </button>
                                        <button as="button" class="dropdown-item" @click="withdrawal(item.id)">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-printer me-2" viewBox="0 0 16 16">
                                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                        </svg>Withdrawal Slip</span>
                                        </button>
                                        <button as="button" class="dropdown-item" @click="driver_trip(item.id)">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-printer me-2" viewBox="0 0 16 16">
                                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                        </svg>Driver Trip Ticket</span>
                                        </button>
                                    </li>
                                    <!-- <li><Link class="dropdown-item" :href="`/travels/set-status`" method="post" :data="item" as="button" v-if="can.canSetStatus">Approve</Link></li> -->
                                    
                                    <li v-if="can.canEditTravel && item.status != 'Approved'"><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="can.canEditTravel && item.status != 'Approved'">
                                        <Link class="dropdown-item" :href="`/travels/${item.id}/edit`" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button class="dropdown-item"  @click="showDetails(index)" >
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                            </svg>
                                            View Details
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
                        <!-- <pagination :links="travels.links" /> -->
                        <pagination :next="travels.next_page_url" :prev="travels.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal 
        v-if="showModal" 
        :modalTitle="'Tavel Details'" 
        @closeModal="closeModal"
        @saveModal ="insertProject"
        :showSaveButton = "false"
    >
        <div class="col-12 p-5" style="margin-top:-10px;margin-bottom:-20px;">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Trip Ticket</td>
                        <td>:</td>
                        <td>{{deTailsData.ticket_number}}</td>
                        <td>Status</td>
                        <td>:</td>
                        <td v-html="statusDisplay(deTailsData)"></td>
                    </tr>
                    <tr>
                        <td>Liters</td>
                        <td>:</td>
                        <td>{{deTailsData.liters}} L</td>
                        <td>Total</td>
                        <td>:</td>
                        <td class="text-right">{{`\u20B1${Number(deTailsData.price).toLocaleString(undefined, {minimumFractionDigits: 2})}`}}</td>
                    </tr>
                    <tr>
                        <td>Place To Visit</td>
                        <td>:</td>
                        <td colspan="4">{{deTailsData.place_to_visit}}</td>
                    </tr>
                    <tr>
                        <td>Travel Purpose</td>
                        <td>:</td>
                        <td colspan="4">{{deTailsData.purpose}}</td>
                    </tr>
                    <tr>
                        <td>Travel Passenger</td>
                        <td>:</td>
                        <td colspan="4">{{deTailsData.official_passenger}}</td>
                    </tr>
                    <tr>
                        <td colspan="2">Tag as Carpool 
                            <svg xmlns="http://www.w3.org/2000/svg" style="right:0px;" v-if="deTailsData.is_carpool != null" width="16" height="16" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="deTailsData.is_carpool == null" width="16" height="16" fill="currentColor" class="bi bi-x-square text-danger" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </td>
                        <td colspan="2">Tag Borrowed Car 
                            <svg xmlns="http://www.w3.org/2000/svg"  v-if="deTailsData.is_borrowed_fuel != null" width="16" height="16" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="deTailsData.is_borrowed_fuel == null" width="16" height="16" fill="currentColor" class="bi bi-x-square text-danger" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                           
                        </td>
                        <td colspan="2">Tag Borrowed Fuel 
                            <svg xmlns="http://www.w3.org/2000/svg"  v-if="deTailsData.is_borrowed_vehicle != null" width="16" height="16" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="deTailsData.is_borrowed_vehicle == null" width="16" height="16" fill="currentColor" class="bi bi-x-square text-danger" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Modal>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default{
    components: { Pagination, Filtering },
    props: {
        can: Object,
        travels:Object,
        user:Object
    },

    data() {
        
        return {
            loader:false,
            itemId:"",
            dropdownOption:"outside",
            filter:false,
            filterData: {
                date_from:null,
                date_to:null,
                dateFilterType:null,
            },

            showModal:false,
            deTailsData:[],
        }
    },

    methods:{
        showFilter() {
            this.filter = true
        },
        showDetails(index)
        {
            this.deTailsData = this.travels.data[index];
            this.showModal = true;
        },
        closeModal(){
             this.showModal = false;
        },
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

        runFilter() {
            if (this.filterData.date_from && this.filterData.date_to) {
               
               this.filterData.dateFilterType = "all";
                
            } else if(this.filterData.date_from && !this.filterData.date_to) {
               
               this.filterData.dateFilterType = "from";
               
            } else if(!this.filterData.date_from && this.filterData.date_to) {
               
               this.filterData.dateFilterType = "to";
               
            }
            this.$inertia.get('/travels',  this.filterData, {
                preserveState:true
            })
        },

        tripTicket(id) {
            window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Ftrip_ticket&standAlone=true&decorate=no&id="+id,"_blank");
        },
        withdrawal(id) {
            window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Fwithdrawal_slip&standAlone=true&decorate=no&id="+id,"_blank");

        },
        driver_trip(id) {
            window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Fdriver_trip_ticket&standAlone=true&decorate=no&id="+id,"_blank");
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