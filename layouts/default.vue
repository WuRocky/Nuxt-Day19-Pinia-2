<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/room">Day20 題目</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/room">房型列表</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/booking">預約頁面</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot />
</template>

<style scoped></style>
