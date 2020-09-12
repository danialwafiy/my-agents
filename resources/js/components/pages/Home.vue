<template>
    <div>
        <div class="flex flex-row justify-center text-center">
            <div class="max-w-sm rounded bg-white shadow-md py-8 px-12 mr-12 justify-center">
                <div class="text-lg text-gray-600">Total Revenue <i class="fas fa-coins"></i></div>
                <div class="text-3xl text-gray-700 font-bold">RM4000</div>
            </div>
            <div class="max-w-sm rounded bg-white shadow-md py-8 px-12 mr-12">
                <div class="text-lg text-gray-600">Total Agents <i class="fas fa-users"></i></div>
                <div class="text-3xl text-gray-700 font-bold">2000</div>
            </div>
            <div class="max-w-sm rounded bg-white shadow-md py-8 px-12 mr-12">
                <div class="text-lg text-gray-600">Completed Orders <i class="fas fa-box"></i></div>
                <div class="text-3xl text-gray-700 font-bold">205</div>
            </div>
            <div class="max-w-sm rounded bg-white shadow-md py-8 px-12 mr-12">
                <div class="text-lg text-gray-600">Uncompleted Orders <i class="fas fa-box-open"></i></div>
                <div class="text-3xl text-gray-700 font-bold">15</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
