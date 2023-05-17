<template>
   
   <nav class="navbar navbar-expand-lg navbar-light grad1">
        <div class="container-fluid">
            <a class="navbar-brand" href="/panel-judging" style="color:white !important;padding-top: 5px;" ><h4><b>Welcome to U-Vote</b></h4></a>
           
            <div class="d-flex">
                <Link  method="POST" href="/logout" class="btn btn-outline-success text-white" type="button">Logout</Link>
            </div>
        </div>
    </nav>
    <div class="row">
        <div class="col-lg-12">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.grad1 {
    background-color: rgb(2 65 150); /*background-color: red; /* For browsers that do not support gradients */
  /* background-image: linear-gradient(160deg, #2e10d8 10%, #f71d1d 70%, #e3fc55 95%); */
    color:white;
}
body{
  /* background-color: rgb(86, 34, 1); For browsers that do not support gradients */
  /* background-image: linear-gradient(160deg, #2e10d8 10%, #f71d1d 70%, #e3fc55 95%); */
  height: 100% !important;
}
</style>
<script>
import Nav from "@/Shared/Nav";
export default {
    components: {
        Nav
    }
}
</script>