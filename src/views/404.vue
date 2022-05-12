<template>
  <div class="d-flex flex-column align-items-center justify-content-center" style="height: 100vh">
    <h1 class="display-1">404</h1>
    <p class="h1">{{ $t('notFound') }}</p>
    <router-link to="/">{{ $t('notFoundTxt') }}</router-link>
  </div>
</template>