<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <CommonNavigation />
      </div>
      <div class="column is-9 section">
        <div>
          <CommonErrorCard :error="error" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});
</script>
