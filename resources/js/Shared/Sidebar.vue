<template>
    <div class="sidebar" >
        <div class="sidebar-inner">
            <!-- ### $Sidebar Header ### -->
            <div class="sidebar-logo">
                <div class="peers ai-c fxw-nw">
                    <div class="peer peer-greed">
                        <a class="sidebar-link td-n" href="index.html">
                            <div class="peers ai-c fxw-nw">
                                <div class="peer">
                                    <div class="logo">
                                        <img src="/images/aceslogo.png" alt="" class="img-fluid p-5" />
                                    </div>
                                </div>
                                <div class="peer peer-greed">
                                    <h5 class="lh-1 mB-0 logo-text text-white">
                                        ACES UVOTE
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="peer">
                        <div class="mobile-toggle sidebar-toggle">
                            <a href="" class="td-n">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"
                                    class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ### $Sidebar Menu ### -->
            <ul class="sidebar-menu scrollable pos-r">
                <li class="nav-item mT-30 actived">
                    <Link class="sidebar-link" href="/" :class="{'active': $page.url === '/'}"><span
                        class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path
                                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                        </svg>
                    </span><span class="title">Dashboard</span></Link>
                </li>


                <li class="nav-item">
                    <Link class="sidebar-link" href="/event-header" :class="{'active': $page.url.startsWith('/event-header')}" >
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </span>
                        <span class="title">School Events</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="sidebar-link" href="/event-participants" :class="{'active': $page.url.startsWith('/event-participants')}" >
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>
                        </span>
                        <span class="title">School Event Participants</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="sidebar-link" href="/panel" :class="{'active': $page.url.startsWith('/panel')}">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-video2" viewBox="0 0 16 16">
                            <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z"/>
                            </svg>
                        </span>
                        <span class="title">School Event Panel</span>
                    </Link>
                </li>
                <li class="nav-item"  v-if="$page.props.auth.user.role == 'RO' || $page.props.auth.user.role == 'Admin' || $page.props.auth.user.role == 'PGO' || $page.props.auth.user.role == 'PG-Head'">
                    <Link class="sidebar-link" href="/criteria" :class="{'active': $page.url.startsWith('/criteria')}">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-spreadsheet" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1H4zm9 6h-3v2h3V7zm0 3h-3v2h3v-2zm0 3h-3v2h2a1 1 0 0 0 1-1v-1zm-4 2v-2H6v2h3zm-4 0v-2H3v1a1 1 0 0 0 1 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2zm3-2v2h3V7H6zm3 3H6v2h3v-2z"/>
                            </svg>
                        </span>
                        <span class="title">Creteria For Judging</span>
                    </Link>
                </li>
                <li class="nav-item dropdown" v-if="$page.props.auth.user.role == 'Admin'">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
                            </svg>
                        </span>
                            <span class="title">Admin Panel</span>
                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg></span></a>
                            <ul class="dropdown-menu">
                        <li>
                            <Link class="sidebar-link" href="/users" :class="{'active': $page.url.startsWith('/users')}"><span class="icon-holder"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-people" viewBox="0 0 16 16">
                                    <path
                                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                </svg>
                            </span><span class="title">&nbsp;Users</span></Link>
                        </li>
                        <!-- <li>
                            <Link class="sidebar-link" href="/employees" :class="{'active': $page.url.startsWith('/employees')}">
                                <span class="icon-holder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-universal-access-circle" viewBox="0 0 16 16">
                                    <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"/>
                                    </svg>
                            </span><span class="title">&nbsp;Registered Students</span></Link>
                        </li> -->
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
     data() {
        return {
            syncingEmployees:false,
            syncingOffices:false,
            syncingDivisions:false,
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
        },

        syncDivisions() {
            this.syncingDivisions = true;
            axios.post('/sync/divisions').then((response) => {
                this.syncingDivisions = false;
                alert('Divisions synced successfully')
            })
            // axios.post('http://122.54.19.172:91//api/PGDDO_Divisions_tbl').then((response) => {
            //     this.syncingDivisions = false;
            //     alert('Offices synced successfully')
            // })
        },

        // syncOffices() {
        //     this.syncingOffices = true
        //      axios.post('/sync/offices').then((response) => {
        //         this.syncingOffices = false;
        //         alert('Offices synced successfully')
        //     })
        // }
    }
}
</script>