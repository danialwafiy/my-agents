<template>
<div class="container mx-auto">
    <div class="flex flex-row justify-between">
        <div class="text-2xl text-gray-600 font-bold"><i class="fas fa-truck fa-lg"></i> New Order</div>
    </div>
    <div class="flex flex-row  my-8">
        <form class="w-full bg-white p-5 shadow-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="">
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                        Phone No.
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                        Delivery Address
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-city">
                        Quantity
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="number" placeholder="">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 justify-end px-3">
                <button class="bg-transparent hover:bg-gray-700 text-gray-600 hover:text-white border border-gray-600 py-1 px-4 rounded">
                    <i class="fas fa-paper-plane"></i> Submit
                </button>
            </div>
        </form>
    </div>
</div>
</template>