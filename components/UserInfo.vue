<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="/noimage.png">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ user.user_id }}
          </p>
          <p class="subtitle is-6">
            {{ user.user_id }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: { Object, default: {}}
})
</script>
