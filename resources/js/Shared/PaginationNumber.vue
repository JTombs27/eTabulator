<template>
    <div>
        <!-- 
            I intend to recreate a simple pagination [simplePaginate()] for performance purpose 
            read https://laravel.com/docs/8.x/pagination#simple-pagination

            If you think you will not have huge dataset in the future you can use
            the paginate() by uncommenting below and in the actual component.
        -->

        <!-- <Component 
            :is="link.url ? 'Link' : 'span'"
            v-for="link in links" 
            :href="link.url" 
            v-html="link.label"
            class="p-3 text-decoration-none"
            :class="{'text-muted' : !link.url, 'fw-bold' : link.active}"
        /> --> 

        <ul class="pagination">
            <li 
                v-for="(link, index) in links"
                :key="index"
                class="page-item"
                :class="{'active' : link.active, 'disabled' : !link.url }"
            >
                <Link 
                    class="page-link" 
                    :href="link.url" 
                    v-html="link.label" 
                    preserve-scroll
                />
            </li>
            
          </ul>

    </div>
</template>

<script>
export default {
    props: {
        links: Array
    }
}
</script>

