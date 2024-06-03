<script setup>
import { RouterView } from 'vue-router'
import LoadingStart from './components/LoadingStart.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatBox from './components/ChatBox.vue'
</script>

<template>
  <LoadingStart />
  <div class="page-wrapper pinned">
    <Sidebar />
    <div class="page-content">
      <Navbar />
      <div class="main-container">
        <RouterView />
      </div>
      <Footer />
      <ChatBox />
    </div>
  </div>
</template>