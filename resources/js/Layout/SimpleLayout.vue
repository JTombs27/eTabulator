<template>
   
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/panel-judging" ><h4><b>Welcome to U-Vote</b></h4></a>
            <div class="collapse navbar-collapse " id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex" style="--bs-scroll-height: 100px;">
                </ul>
              
            </div>
            <div class="d-flex">
                <Link  method="POST" href="/logout" class="btn btn-outline-success text-dark" type="button">Logout</Link>
            </div>
        </div>
    </nav>
    <div class="row">
        <div class="col-lg-12">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Nav from "@/Shared/Nav";
export default {
    components: {
        Nav
    }
}
</script>