<template>
  <div class="view">
    <domain-list />
    <domain-create />
  </div>
</template>

<script>
import DomainCreate from '@/components/Domain/DomainCreate.vue'
import DomainList from '@/components/Domain/DomainList.vue'
export default {
  name: 'ViewOverview',
  components: { DomainList, DomainCreate }
}
</script>

<style lang="sass" scoped>

</style>
