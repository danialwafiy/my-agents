<template>
<div>
  <div class="flex flex-row h-screen" v-if="isLogin == true || isLogin == 'true'">
        <nav class="bg-white w-64 justify-start items-start md:flex flex-col hidden text-md h-auto border-r-2 border-gray-300">
            <div class="flex bg-blue-200 w-full h-12 border-r-0 items-center justify-center">
              <div class="mr-2"><i class="fas fa-user-circle fa-lg text-blue-800"></i></div>
              <div class="text-sm text-gray-800 font-bold uppercase">{{user.name}}</div>
            </div>
            <div class="mt-6 w-full">
              <ul>
                <li class="my-px text-gray-500">
                  <router-link to="/"
                    class="flex flex-row items-center h-12 px-4 rounded-lg bg-gray-100">
                    <span class="flex items-center justify-center ">
                      <svg fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </span>
                    <span class="ml-3">Dashboard</span>
                  </router-link>
                </li>
                <li class="my-px">
                  <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Orders</span>
                </li>
                <li class="my-px text-gray-500">
                  <router-link to="/orders"
                    class="flex flex-row items-center h-12 px-4 rounded-lg hover:bg-gray-100">
                    <span class="flex items-center justify-center ">
                      <svg fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                      </svg>
                    </span>
                    <span class="ml-3">Records</span>
                  </router-link>
                </li>
                <li class="my-px text-gray-500">
                  <router-link to="/orders/new"
                    class="flex flex-row items-center h-12 px-4 rounded-lg hover:bg-gray-100">
                    <span class="flex items-center justify-center ">
                      <svg fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    </span>
                    <span class="ml-3">Registration</span>
                  </router-link>
                </li>
                <li class="my-px">
                  <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Agents</span>
                </li>
                <li class="my-px text-gray-500">
                  <router-link to="/agents"
                    class="flex flex-row items-center h-12 px-4 rounded-lg hover:bg-gray-100">
                    <span class="flex items-center justify-center ">
                      <svg fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                      </svg>
                    </span>
                    <span class="ml-3">Records</span>
                  </router-link>
                </li>
                <li class="my-px">
                  <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">SETTINGS</span>
                </li>
                <li class="my-px text-gray-500">
                  <router-link to="/change-password"
                    class="flex flex-row items-center h-12 px-4 rounded-lg hover:bg-gray-100">
                    <span class="flex items-center justify-center ">
                      <svg fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">Change Password</span>
                  </router-link>
                </li>
                <li class="my-px text-gray-500">
                  <a href="#" @click.prevent="submitLogout"
                    class="flex flex-row items-center h-12 px-4 rounded-lg hover:bg-gray-100">
                    <span class="flex items-center justify-center  text-red-400">
                      <svg fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">Logout</span>
                  </a>
                </li>
              </ul>
          </div>
      </nav>
      <div class="flex flex-col h-full w-full">
        <nav class="flex items-center justify-between flex-wrap w-full bg-blue-800 p-3 h-12">
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full md:block hidden flex-grow lg:flex justify-end lg:w-auto pr-5">
            <div>
              <div><i class="fas fa-user-circle fa-lg text-white"></i></div>
            </div>
          </div>
        </nav>
        
      <div class="p-16  text-gray-700 bg-white h-full">
          <router-view></router-view>
      </div>
      </div>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</div>
</template>
<style scoped>
li .router-link-exact-active{
  color:#2C5282 !important
}
</style>
<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return{
      isOrders:false,
      user:{
        name:''
      }
    }
  },
  methods:{
        ...mapActions([
            'logout'
        ]),
        submitLogout(){
          this.logout()
              .then(res=>{
                  this.$router.push('/login')
              })
              .catch(e=>{
                  console.log(e)
                  this.$router.push('/login')
              })
        }
  },
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  },
  mounted(){
    this.user.name = this.$store.state.user.name
  }
}
</script>