<template>
<div class="container mx-auto">
    <div class="flex flex-row justify-between">
        <div class="text-normal font-base text-gray-700"><i class="fas fa-clipboard-list fa-lg"></i> Order Record</div>
    </div>
    <div class="flex flex-row justify-center my-8">
        <table class="w-full bg-white shadow-lg rounded mb-4 text-sm border-separate">
            <tbody>
                <tr class="text-center text-gray-800 ">
                    <td class="text-left p-4"></td>
                    <td class="text-left p-4">Buyers Name</td>
                    <td class="text-left p-4">Buyers Address</td>
                    <td class="text-left p-4">Order Quantity</td>
                    <td class="text-left p-4">Revenue</td>
                    <td class="text-left p-4">Agent ID</td>
                    <td class="text-left p-4">Status</td>
                    <td></td>
                </tr>
                <tr class="hover:bg-gray-200" v-for="(order,index) in orders" :key="order.id">
                    <td class="p-4 rounded-l-lg bg-blue-200 font-semibold">{{index+1}}</td>
                    <td class="p-4">{{order.name}}</td>
                    <td class="p-4">{{order.address}}</td>
                    <td class="p-4">{{order.quantity}}</td>
                    <td class="p-4">RM{{order.revenue}}</td>
                    <td class="p-4">{{order.user_id}}</td>
                    <td class="p-4">
                        <div class="bg-orange-600 text-sm px-2 py-1 text-center text-white rounded-full capitalize" v-if="order.status=='pending'">{{order.status}}</div>
                        <div class="bg-green-600 text-sm px-2 py-1 text-center text-white rounded-full capitalize" v-if="order.status=='completed'">{{order.status}}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            orders:[]
        }
    },
    components: {
    
    },
    methods:{
        getOrders(){
            axios.get('/api/order').then(res=>{
                this.orders = res.data;
            })
        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>