<template>
<div class="container mx-auto">
    <div class="flex flex-row justify-between">
        <div class="text-2xl text-gray-600"><i class="fas fa-clipboard-list fa-lg"></i> Orders</div>
    </div>
    <div class="flex flex-row justify-center my-8">
        <table class="w-full bg-white shadow-lg rounded mb-4">
            <tbody>
                <tr class="bg-gray-900 text-white ">
                    <th class="text-left p-4">#</th>
                    <th class="text-left p-4">Buyers Name</th>
                    <th class="text-left p-4">Buyers Address</th>
                    <th class="text-left p-4">Order Quantity</th>
                    <th class="text-left p-4">Revenue</th>
                    <th class="text-left p-4">Agent ID</th>
                    <th class="text-left p-4">Status</th>
                    <th></th>
                </tr>
                <tr class="hover:bg-gray-200">
                    <td class="p-4">1</td>
                    <td class="p-4">Mohamad Danial Wafiy Bin Mohd Fairuz</td>
                    <td class="p-4">No 8, Jalan Padi Huma 9, BBU, Johor</td>
                    <td class="p-4">3</td>
                    <td class="p-4">RM30</td>
                    <td class="p-4">#12312</td>
                    <td class="p-4"><div class="bg-orange-600 text-sm px-2 py-1 text-center text-white rounded-full">Pending</div></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>