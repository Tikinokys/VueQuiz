<template>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class LogOut extends Vue {
  constructor() {
    super();
  }

  public logout(event: any) {
    event.preventDefault();
    this.$store.dispatch('logout').then(() => {
      this.$router.replace('/signin');
    });
  }

}

</script>