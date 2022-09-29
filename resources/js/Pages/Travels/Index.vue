<template>
     <Head>
        <title>Travels</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Travels</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search Trip Ticket...">
                </div>
                <div class="peer"  v-if="can.canCreateTravel">
                    <Link class="btn btn-primary btn-sm" href="/travels/create">Add Travel</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <transition name="slide-fade" mode="in-out">
            <filtering v-if="filter" @closeFilter="filter=false">
                <label for="">Office</label>
                <select class="form-select" v-model="filterData.office_id">
                    <option disabled readonly>--Select Office--</option>
                    <option v-for="(item, index) in offices" :key="index" :value="item.id">{{ item.short_name }}</option>
                </select>
                <label for="">Status</label>
                <select class="form-select" v-model="filterData.status">
                    <option disabled readonly selected value="">Select Status</option>
                    <option value="Approved">Approved</option>
                    <option value="Disapproved">Disapproved</option>
                    <option value="pending">Pending</option>
                    <option value="Fueled">Fueled</option>
                </select>
                <label for="">Date Fueled</label>
                <input type="date" v-model="filterData.date_fueled" class="form-control">
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
            <div class="table-responsive bgc-white p-20 bd shadow-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Trip Ticket</th>
                            <th scope="col">Vehicle</th>
                            <th scope="col">Driver</th>
                            <th scope="col">Office</th>
                            <th scope="col">Date Travel</th>
                            <th scope="col">Date Fueled</th>
                            <th scope="col">Liter/s</th>
                            <th scope="col">Actual Liter/s</th>
                            <th scope="col">Price</th>
                            <th scope="col">Invoice #</th>
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
                            <td >{{item.office}}</td>
                            <td v-if="!item.date_to">{{item.date_from}}</td>
                            <td v-else>{{item.date_from}} to {{item.date_to}}</td>
                            <td class="text-center">{{item.date_fueled_text}}</td>
                            <td class="text-center">{{item.liters}}</td>
                            <td class="text-center">{{item.actual_liters}}</td>
                            <td class="text-right">{{`\u20B1${Number(item.price).toLocaleString(undefined, {minimumFractionDigits: 2})}`}}</td>
                            <td>{{item.invoice}}</td>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                            </svg> Approve
                                        </button>
                                    </li>
                                    <li v-if="(item.status == 'Approved' || item.status==null) && item.soa_travel == null">
                                        <button as="button" class="dropdown-item" @click="approvedStatus(item, 'Disapproved')" v-if="can.canSetStatus && !loader">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                                              <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
                                            </svg> Disapprove
                                        </button>
                                    </li>
                                    
                                    <li v-if="item.status == 'Approved' || $page.props.auth.user.role == 'PG-Head'">
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
                                    <li v-if="can.canEditTravel && (item.allow_to_edit || item.status == null)">
                                        <Link class="dropdown-item" :href="`/travels/${item.id}/edit`" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button class="dropdown-item" @click="invoice(item)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                                              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                            </svg> Add Invoice
                                        </button>
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
                                   
                                    <!-- <li v-if="can.canAllowEdit && item.status != 'Fueled' && item.allow_to_edit == null">
                                        <button class="dropdown-item"  @click="allowEdit(item)" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                              <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                              <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                            Allow Edit
                                        </button>
                                    </li> -->

                                    <li v-if="can.canDeleteTravel && item.status == null && !item.soa_travel">
                                        <button class="text-danger dropdown-item"  @click="deleteTravel(item)" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                            Delete
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
                        <td>Gasoline Station</td>
                        <td>:</td>
                        <td colspan="4">{{deTailsData.gasoline_station}}</td>
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
                            <svg xmlns="http://www.w3.org/2000/svg" style="right:0px;" v-if="deTailsData.is_carpool != null && deTailsData.is_carpool != false"  width="16" height="16" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="deTailsData.is_carpool == null || deTailsData.is_carpool == false" width="16" height="16" fill="currentColor" class="bi bi-x-square text-danger" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </td>
                        <td colspan="2">Tag Borrowed Car 
                            <svg xmlns="http://www.w3.org/2000/svg"  v-if="deTailsData.is_borrowed_vehicle != null && deTailsData.is_borrowed_vehicle != false" width="16" height="16" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="deTailsData.is_borrowed_vehicle == null || deTailsData.is_borrowed_vehicle == false" width="16" height="16" fill="currentColor" class="bi bi-x-square text-danger" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                           
                        </td>
                        <td colspan="2">Tag Borrowed Fuel 
                            <svg xmlns="http://www.w3.org/2000/svg"  v-if="deTailsData.is_borrowed_fuel != null && deTailsData.is_borrowed_fuel != false" width="16" height="16" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="deTailsData.is_borrowed_fuel == null || deTailsData.is_borrowed_fuel == false" width="16" height="16" fill="currentColor" class="bi bi-x-square text-danger" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Modal>

    <Invoice
        v-if="invoiceOpen"
        :item="invoiceItem"
        @closeModal="invoiceOpen=false"
    >
    </Invoice>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";
import Invoice from "./Invoice.vue";

export default {
    components: { Pagination, Filtering, Invoice },
    props: {
        can: Object,
        travels:Object,
        user:Object
    },

    data() {
        
        return {
            invoiceItem:{},
            invoiceOpen:false,
            loader:false,
            itemId:"",
            dropdownOption:"outside",
            filter:false,
            filterData: {
                office_id:null,
                date_from:null,
                date_to:null,
                dateFilterType:null,
                date_fueled:null,
                status:null,
            },
            search:null,
            form:useForm({
                invoice:null,
                id:null
            }),
            showModal:false,
            deTailsData:[],
            offices:[],
        }
    },

    mounted() {
        this.loadOffice()
    },

    methods:{
        loadOffice() {
            axios.get('/offices/fetch')
                .then((response) => {
                    this.offices = response.data
                })
        },

        deleteTravel(item) {
             let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) {
                this.$inertia.delete("/travels/" + item.id);
              }
        },

        showFilter() {
            this.filter = true
        },

        reset () {
            this.filter = {}
            this.$inertia.get('/travels')

        },

        showDetails(index)
        {
            this.deTailsData = this.travels.data[index];
            this.showModal = true;
        },

        invoice(item) {

            /**
             * if using component use the code below
             * 
             * this.invoiceItem = item; create an array data named invoiceItem
             * this.invoiceOpen = true create boolean data named invoiceOpen
             */
            this.invoiceItem = item;
            this.invoiceOpen = true
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
                },
                onError: (e) => {
                    this.invoice_loader = false;
                    this.invoiceMessage = e.invoice;
                    this.invoiceMessageClass = 'text-danger'
                }

            })
        },

       
        closeModal(){
             this.showModal = false;
        },

        approvedStatus(item, status) {
            //   $(`.dropdown-menu#${item.id}`).toggle();
            this.$inertia.post('/travels/set-status', {id:item.id, status:status}, { 
                preserveScroll:true,
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
                    classText = "badge bg-primary";
                } else if (item.status == "Disapproved") {
                    classText = "badge bg-danger";
                } else if(item.status == "Fueled") {
                    classText = "badge bg-success";
                } else {
                    classText = "badge bg-secondary";
                }
                return `<span class="${classText}">${this.status(item.status)}</span>`
            }
        },

        allowEdit(item) {
            let text = "WARNING!\nAre you sure you want to allow edit for this travel?";
              if (confirm(text) == true) {
                this.$inertia.post("/travels/allow-edit", {id:item.id}, {
                    preserveScroll:true,
                    preserveState:true
                });
              }
        }
    },

    watch:{   
        search: _.debounce(function(value) {
            this.$inertia.get('/travels',  {search:value}, {
                preserveState:true,
                preserveScroll:true,
                replace:true
            })
        }, 500)
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
                } else if(value == "Fueled") {
                    return "Fueled";
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