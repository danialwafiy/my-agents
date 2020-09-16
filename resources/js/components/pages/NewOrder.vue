<template>
<div class="container mx-auto">
    <div class="flex flex-row justify-between">
        <div class="text-normal font-base text-gray-700"><i class="fas fa-truck fa-lg"></i> New Order</div>
    </div>
    <div class="flex flex-row  my-8">
        <form class="w-full bg-white" @submit.prevent="submit()">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-300  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-sm placeholder-gray-600 font-light"  type="text" v-model="name" placeholder="Enter customer name" required>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2">
                        Phone No.
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-300  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-sm placeholder-gray-600 font-light"  type="text" placeholder="Enter customer phone no">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2">
                        Delivery Address
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-300  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-sm placeholder-gray-600 font-light"  type="text" placeholder="Enter customer address" v-model="address" required>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="grid-city">
                        Quantity
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-300  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-sm placeholder-gray-600 font-light"  type="number" placeholder="" v-model="quantity" required>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 justify-end px-3">
                <button class=" bg-blue-700 rounded-full text-xs px-4 py-2 text-white items-center hover:bg-blue-600"  :disabled="isLoading"><i class="fas fa-paper-plane"></i>  SUBMIT</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            address:'',
            quantity:'',
            isLoading:false
        }
    },
    components: {
    
    },
    methods:{
        submit(){
            this.isLoading = true
            let form = new FormData
            form.append('name',this.name)
            form.append('address',this.address)
            form.append('quantity',this.quantity)
            axios.post('/api/order',form).then(res=>{
                toast.fire({
                    icon: 'success',
                    title: '<div class="text-white font-normal">Order has been submitted.</div>',
                })
                this.name=''
                this.address=''
                this.quantity=''
                this.isLoading = false
            })
        }
    },
    mounted(){
    }
}
</script>
