<template>
    <Head>
        <title>Employees</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Employees</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search Employee">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" href="/employees/create">Add Employee</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter = true" >Filter</button>
                </div>
            </div>
        </div>
        <transition name="slide-fade" mode="in-out">
            <Filter v-if="showFilter" @closeFilter="showFilter = false">

            </Filter>
        </transition>
        <div class="col-md-12 ">
            <div class="table table-responsive bgc-white p-20 bd shadow-sm mh-100">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Office</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in data.data" :key="index">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.office }}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>

<script>
import Filter from '../../Shared/Filter.vue';

export default {
    props: {
        data: Object
    },
    data() {
        return {
            search: "",
            showFilter:false
        };
    },
    methods: {

    },
    components: { Filter }
}
</script>

<style>

</style>