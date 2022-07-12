<template>
    <Head>
        <title> Drivers Vehicle</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Drivers Vehicle</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-success btn-sm" href="/drivers/create">Add Drivers</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white">Filter</button>
                </div>
            </div>
        </div>
            <div class="col-12">
                <div class="bcg-white p-20 bd">
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Vehicle Name</th>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Date From</th>
                                <th scope="col">Date To</th>
                                <th scope="col">Office Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    </div>
</template>