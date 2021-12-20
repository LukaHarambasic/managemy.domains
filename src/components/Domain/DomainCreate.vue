<template>
  <div class="domain-create">
    <form @submit="create">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">URL</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input v-model="url" class="input" type="url" placeholder="https://" required>
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Contract until</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input v-model="contractUntil" class="input" type="date" placeholder="">
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Price per year</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input v-model="pricePerYear" class="input" type="number" placeholder="18.02">
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Vendor</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input v-model="vendor" class="input" type="text" placeholder="Namecheap">
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Settings Link</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input v-model="settingsLink" class="input" type="url" placeholder="https://">
            </p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link is-fullwidth" @click.prevent="create">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>import firebase from 'firebase/app'
import { db } from '@/assets/js/firebase'
import { mapState } from 'vuex'

export default {
  name: 'DomainCreate',
  data() {
    return {
      url: 'https://test.com',
      contractUntil: '',
      pricePerYear: 18.02,
      vendor: 'Netcup',
      settingsLink: 'https://www.customercontrolpanel.de/domains.php'
    }
  },
  computed: {
    ...mapState({
      user: 'user',
    })
  },
  methods: {
    async create() {
      console.log('CREATE')
      console.log('TODO: try catch & error handling')
      await db.collection('domains').add({
        url: this.url,
        contractUntil: firebase.firestore.Timestamp.fromDate(new Date(this.contractUntil)),
        pricePerYear: this.pricePerYear,
        vendor: this.vendor,
        settingsLink: this.settingsLink,
        uid: this.user.uid
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
