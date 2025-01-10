<script setup>

</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-navigation-drawer class="bg-black">
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar  elevation="2" title="App bar"></v-app-bar>

      <v-main class="bg-orange h-100">
        <v-container>
          <h1>Main Content</h1>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>

</style>