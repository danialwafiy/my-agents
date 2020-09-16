<template>
    <div class="container mx-auto">
        <div class="flex flex-row justify-center text-center">
            <div class="w-1/4 max-w-sm rounded text-gray-700 py-8 px-8 mr-12 justify-center">
                <div class="text-sm font-semibold">Total Revenue (RM)</div>
                <div class="text-4xl font-light py-3 text-blue-700">{{stats.totalRevenue}}</div>
                <button class="bg-transparent border border-blue-700 rounded-full text-xs px-3 py-1 text-gray-600 items-center hover:bg-blue-700 hover:text-white">Show More</button>
            </div>
            <div class="w-1/4 max-w-sm rounded text-gray-700 py-8 px-8 mr-12 justify-center">
                <div class="text-sm font-semibold">Total Agents</div>
                <div class="text-4xl font-light py-3 text-blue-700">{{stats.totalAgents}}</div>
                <button class="bg-transparent border border-blue-700 rounded-full text-xs px-3 py-1 text-gray-600 items-center hover:bg-blue-700 hover:text-white">Show More</button>
            </div>
            <div class="w-1/4 max-w-sm rounded text-gray-700 py-8 px-8 mr-12 justify-center">
                <div class="text-sm font-semibold">Completed Orders </div>
                <div class="text-4xl font-light py-3 text-blue-700">{{stats.completedOrders}}</div>
                <button class="bg-transparent border border-blue-700 rounded-full text-xs px-3 py-1 text-gray-600 items-center hover:bg-blue-700 hover:text-white">Show More</button>
            </div>
            <div class="w-1/4 max-w-sm rounded text-gray-700 py-8 px-8 mr-12 justify-center">
                <div class="text-sm font-semibold">Pending Orders </div>
                <div class="text-4xl font-light py-3 text-blue-700">{{stats.pendingOrders}}</div>
                <button class="bg-transparent border border-blue-700 rounded-full text-xs px-3 py-1 text-gray-600 items-center hover:bg-blue-700 hover:text-white">Show More</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            stats:''
        }
    },
    components: {
    
    },
    methods:{
        getOrders(){
            axios.get('/api/home').then(res=>{
                this.stats = res.data;
            })
        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>
