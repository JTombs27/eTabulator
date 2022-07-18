<template>
     <Head>
        <title>Users</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Travels</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
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
                            <th scope="col">Actual Driver</th>
                            <th scope="col">Date From</th>
                            <th scope="col">Date To</th>
                            <th scope="col" style="width: 30%"></th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in travels" :key="index">
                            <td>{{item.FDESC}} <strong>({{ item.PLATENO}})</strong></td>
                            <td>{{`${item.first_name} ${mi(item.middle_name)} ${item.last_name}`}}</td>
                            <td>{{item.actual_driver}}</td>
                            <td>{{item.date_from}}</td>
                            <td>{{item.date_to}}</td>
                            <td></td>
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
        travels:Object
    },

    computed: {
        mi() {
            return value => value ? `${value.charAt(0)}.` : "";
        }
    }
}
</script>

<style>

</style>