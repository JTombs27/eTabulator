<template>
    <div class="sidebar">
        <div class="sidebar-inner">
            <!-- ### $Sidebar Header ### -->
            <div class="sidebar-logo">
                <div class="peers ai-c fxw-nw">
                    <div class="peer peer-greed">
                        <a class="sidebar-link td-n" href="index.html"
                            ><div class="peers ai-c fxw-nw">
                                <div class="peer">
                                    <div class="logo">
                                        <img
                                            src="/images/logo.png"
                                            alt=""
                                            class="img-fluid p-5"
                                        />
                                    </div>
                                </div>
                                <div class="peer peer-greed">
                                    <h5 class="lh-1 mB-0 logo-text">
                                        Admin
                                    </h5>
                                </div>
                            </div></a
                        >
                    </div>
                    <div class="peer">
                        <div class="mobile-toggle sidebar-toggle">
                            <a href="" class="td-n"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ### $Sidebar Menu ### -->
            <ul class="sidebar-menu scrollable pos-r">
                <li class="nav-item mT-30 actived">
                    <Link class="sidebar-link" href="/"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                            </svg>
                        </span
                        ><span class="title">Dashboard</span></Link
                    >
                </li>
               

                <li class="nav-item">
                    <Link class="sidebar-link" href="/vehicles"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </span
                        ><span class="title">Vehicles</span></Link
                    >
                </li>
                <li class="nav-item">
                    <Link class="sidebar-link" href="/officeVehicles">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </span>
                        <span class="title">Office Vehicles</span></Link>
                </li>

                 <li class="nav-item">
                    <Link class="sidebar-link" href="/travels"
                        ><span class="icon-holder"
                            >
                             <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" viewBox="0 0 64.000000 64.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M390 580 c-25 -25 -26 -54 -2 -77 16 -17 16 -18 -12 -28 -34 -11 -136 -146 -136 -179 0 -11 -12 -32 -26 -48 l-27 -27 -29 20 c-40 29 -66 19 -111 -39 -42 -56 -45 -74 -18 -101 11 -11 21 -27 23 -38 2 -12 12 -18 28 -18 19 0 26 6 28 25 5 28 102 150 102 126 0 -9 5 -16 11 -16 6 0 9 10 8 23 -4 27 21 67 41 67 8 0 30 17 48 37 l33 38 -4 -54 c-3 -35 -10 -59 -21 -66 -9 -7 -16 -20 -16 -30 0 -10 -16 -37 -35 -61 -19 -23 -35 -49 -35 -56 0 -19 20 -38 40 -38 17 0 108 83 126 114 9 18 15 13 58 -48 51 -70 76 -81 100 -43 9 14 6 26 -13 60 -14 23 -24 55 -23 70 2 20 -2 27 -10 24 -19 -6 -48 43 -48 80 l0 33 34 -17 c19 -9 41 -13 50 -10 25 10 19 45 -11 64 -39 24 -122 113 -106 113 20 0 53 37 53 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z m70 -15 c26 -32 -13 -81 -47 -59 -23 14 -28 41 -13 59 16 19 44 19 60 0z m-26 -121 c12 -11 16 -36 16 -96 0 -78 2 -84 51 -175 39 -72 49 -97 40 -106 -13 -13 -13 -13 -108 117 -53 73 -58 84 -61 143 -3 34 -7 63 -11 63 -4 0 -24 -23 -45 -51 -53 -69 -70 -49 -20 22 56 80 75 99 100 99 12 0 30 -7 38 -16z m96 -94 c35 -26 16 -38 -25 -15 -25 13 -35 25 -35 42 0 21 1 22 18 7 9 -8 28 -23 42 -34z m-410 -114 c0 -2 -16 -23 -35 -46 -50 -60 -32 -66 19 -7 37 41 45 46 55 33 14 -17 10 -24 -41 -84 -28 -33 -56 -40 -76 -20 -19 19 -15 31 24 81 31 40 54 58 54 43z m260 -75 c-21 -42 -86 -104 -103 -98 -23 7 -16 27 26 75 24 27 47 62 51 78 l8 29 19 -23 c18 -23 18 -24 -1 -61z m-290 -91 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0             6 5 10 10 10 6 0 10 -4 10 -10z"/> <path d="M260 200 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/> <path d="M560 200 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/> <path d="M610 200 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/> </g>
                            </svg>
                        </span
                        ><span class="title">Travels</span></Link
                    >
                </li>

                <li class="nav-item">
                    <Link class="sidebar-link" href="/soatravels">
                      <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck-front" viewBox="0 0 16 16">
                                <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
                                <path fill-rule="evenodd" d="M4 2a1 1 0 0 0-1 1v3.9c0 .625.562 1.092 1.17.994C5.075 7.747 6.792 7.5 8 7.5c1.208 0 2.925.247 3.83.394A1.008 1.008 0 0 0 13 6.9V3a1 1 0 0 0-1-1H4Zm0 1h8v3.9c0 .002 0 .001 0 0l-.002.004a.013.013 0 0 1-.005.002h-.004C11.088 6.761 9.299 6.5 8 6.5s-3.088.26-3.99.406h-.003a.013.013 0 0 1-.005-.002L4 6.9c0 .001 0 .002 0 0V3Z"/>
                                <path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h9A2.5 2.5 0 0 1 15 2.5v9c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2v-9ZM3.5 1A1.5 1.5 0 0 0 2 2.5v9A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 1h-9Z"/>
                            </svg>
                      </span>
                      <span class="title">Soa Travels</span></Link>
                </li>

                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/drivers"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                            </svg>
                        </span
                        ><span class="title">Driver Vehicles</span></Link
                    >
                </li> -->

                <!-- <li class="nav-item">
                <li class="nav-item">
                    <Link class="sidebar-link" href="/travels"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </span
                        ><span class="title">Travels</span></Link
                    >
                </li>

                <li class="nav-item">
                    <Link class="sidebar-link" href="/posts"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-post" viewBox="0 0 16 16">
                              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                              <path d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </span
                        ><span class="title">Posts</span></Link
                    >
                </li> -->
                <li class="nav-item dropdown" v-if="$page.props.auth.user.role == 'Admin'">
                    <a class="dropdown-toggle" href="javascript:void(0);"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                            </svg></span
                        ><span class="title">Admin Panel</span>
                        <span class="arrow"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg></span
                    ></a>
                    <ul class="dropdown-menu">
                        <li>
                                <Link class="sidebar-link" href="/users"
                                    ><span class="icon-holder"
                                        ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                        </svg>
                                    </span
                                    ><span class="title">&nbsp;Users</span></Link>
                        </li>
                        <li>
                            <a class="sidebar-link" href="javascript:void(0)" @click="syncEmployees()"
                                v-if="!syncingEmployees"
                                ><span class="icon-holder"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                                    </svg>
                                </span
                                ><span class="title">&nbsp;Sync Employees</span></a>
                                <span v-if="syncingEmployees" class="sidebar-link text-secondary" disabled>
                                    <span class="spinner-border spinner-border-sm icon-holder" role="status" aria-hidden="true"></span>
                                    Syncing Employees...
                                </span>
                        </li>
                        <li>
                            <a class="sidebar-link" href="javascript:void(0)" @click="syncOffices()" v-if="!syncingOffices"
                                ><span class="icon-holder"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                                    </svg>
                                </span
                                ><span class="title">&nbsp;Sync Office</span></a>
                            <span v-if="syncingOffices" class="sidebar-link text-secondary" disabled>
                                <span class="spinner-border spinner-border-sm icon-holder" role="status" aria-hidden="true"></span>
                                Syncing Offices...
                            </span>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <Link class="sidebar-link" href="/projects"
                        ><span class="icon-holder"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
                                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                            </svg>
                        </span
                        ><span class="title">Projects</span></Link
                    >
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>

export default {
     data() {
        return{
            syncingEmployees:false,
            syncingOffices:false,
        }
    },
    mounted() {

        $(function () {
            $(".sidebar .sidebar-menu li a").on("click", function () {
                const $this = $(this);

                if ($this.parent().hasClass("open")) {
                    $this
                        .parent()
                        .children(".dropdown-menu")
                        .slideUp(200, () => {
                            $this.parent().removeClass("open");
                        });
                } else {
                    $this
                        .parent()
                        .parent()
                        .children("li.open")
                        .children(".dropdown-menu")
                        .slideUp(200);

                    $this
                        .parent()
                        .parent()
                        .children("li.open")
                        .children("a")
                        .removeClass("open");

                    $this
                        .parent()
                        .parent()
                        .children("li.open")
                        .removeClass("open");

                    $this
                        .parent()
                        .children(".dropdown-menu")
                        .slideDown(200, () => {
                            $this.parent().addClass("open");
                        });
                }
            });

            // Sidebar Activity Class
            const sidebarLinks = $(".sidebar").find(".sidebar-link");

            sidebarLinks
                .each((index, el) => {
                    $(el).removeClass("active");
                })
                .filter(function () {
                    const href = $(this).attr("href");
                    const pattern = href[0] === "/" ? href.substr(1) : href;
                    return pattern === window.location.pathname.substr(1);
                })
                .addClass("active");

            // ٍSidebar Toggle
            $(".sidebar-toggle").on("click", (e) => {
                $("body").toggleClass("is-collapsed");
                e.preventDefault();
            });

        });
    },

     methods: {
        syncEmployees() {
            this.syncingEmployees = true
            axios.post('/sync/employees').then((response) => {
                this.syncingEmployees = false;
                alert('Employees synced successfully')
            })
        },
        syncOffices() {
            this.syncingOffices = true
             axios.post('/sync/offices').then((response) => {
                this.syncingOffices = false;
                alert('Offices synced successfully')
            })
        }
    }
}
</script>