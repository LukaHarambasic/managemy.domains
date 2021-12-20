<template>
  <div class="domain-list">
   <ul>
     <li v-for="domain in domains" :key="domain.id" class="domain">
       {{domain.url}}<br />
       {{domain.contractUntil}}<br />
       {{domain.pricePerYear}} per Year<br />
       {{domain.vendor}}<br />
       {{domain.settingsLink}}
     </li>
   </ul>
  </div>
</template>

<script>
import { db } from '@/assets/js/firebase'
import { mapState } from 'vuex'

export default {
  name: 'DomainList',
  data() {
    return {
      domains: []
    }
  },
  computed: {
    ...mapState({
      user: 'user',
    })
  },
  async mounted() {
    const querySnapshot = await db.collection('domains').where('uid', '==', this.user.uid).get()
    console.log('MOUNTED')
    querySnapshot.forEach((doc) => {
      this.domains.push({ id: doc.id, ...doc.data() })
    })
  }
}
</script>

<style lang="sass" scoped>
.domain
  margin: 0 0 2rem 0
</style>
