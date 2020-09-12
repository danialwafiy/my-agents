<template>
<div>
  <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-4">
    <div class="flex items-center flex-shrink-0 text-white pl-5">
      <span class="font-semibold text-xl tracking-tight">My Agents</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex justify-end lg:w-auto pr-5">
      <div>
          <a href="#">
            <img
              src="https://randomuser.me/api/portraits/women/76.jpg"
              class="rounded-full w-10 h-10 mx-auto"
            />
          </a>
      </div>
    </div>
</nav>
<div class="flex flex-row h-full">
    <nav class="bg-gray-900 w-56 justify-between items-start md:flex flex-col hidden text-md ">
          <div class="mt-10 w-full">
            <ul>
              <li class="w-full mb-3 text-white px-5 py-3 hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                <router-link to="/">                
                  <span class="flex justify-start items-center">
                    <i class="fas fa-chalkboard fa-lg"></i>
                      <span class="mx-5 font-medium">Dashboard</span>
                  </span>
                </router-link>
              </li>
              <li class="mb-3 text-white px-5 py-3 hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                <router-link to="/agents">
                  <span class="flex justify-start items-center">
                      <i class="fas fa-users fa-lg"></i>
                      <span class="mx-5 font-medium">Agents</span>
                  </span>
                </router-link>
              </li>
              <li class="mb-3 text-white px-5 py-3 hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                <a href="#" @click.prevent="isOrders=!isOrders">                
                  <span class="flex justify-start items-center">
                    <i class="fas fa-clipboard-list fa-lg"></i>
                    <span class="ml-8 mr-5 font-medium">Orders</span>
                    <span class="text-end">
                      <i class="fas fa-angle-down"></i>
                    </span>
                  </span>
                </a>
                <div v-if="isOrders">
                  <div class="mt-5">
                    <router-link  @click.native="isOrders=!isOrders" to="/orders" class="my-12">                
                      <span class="flex justify-start items-center">
                          <i class="fas fa-history fa-lg"></i>
                          <span class="ml-6 mr-5 font-medium">Records</span>
                      </span>
                    </router-link>
                  </div>
                  <div class="mt-5">
                    <router-link @click.native="isOrders=!isOrders" to="/orders/new" class="my-12">                
                      <span class="flex justify-start items-center">
                          <i class="fas fa-truck fa-lg"></i>
                          <span class="mx-5 font-medium">New Order</span>
                      </span>
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
        </div>
    </nav>
    <div class="p-16  text-gray-700 bg-gray-200 h-screen w-screen">
        <router-view></router-view>
      </div>
    </div>
</div>
</template>
<style scoped>
</style>
<script>
export default {
  data(){
    return{
      isOrders:false,
    }
  }
}
</script>