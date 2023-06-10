<template>
  <b-navbar wrapper-class="container" class="header">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/" data-test="tornado_main_page" active-class="">
        <!-- <Logo /> -->
        <h2 style="font-weight: 900">0xAlien</h2>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/" target="_blank" data-test="docs_link" rel="noopener noreferrer" class="has-tag">
        <b-icon icon="open-book" size="is-small" class="mr-1" />
        <span>{{ $t('Whitepaper') }}</span>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <network-navbar-icon />
          <metamask-navbar-icon data-test="metamask_connection_state" />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import Logo from '@/components/Logo'
import MetamaskNavbarIcon from '@/components/MetamaskNavbarIcon'
import NetworkNavbarIcon from '@/components/NetworkNavbarIcon'

export default {
  components: {
    // Logo,
    NetworkNavbarIcon,
    MetamaskNavbarIcon
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters('metamask', ['netId', 'isLoggedIn']),
    ...mapGetters('governance/gov', ['isEnabledGovernance']),
    ...mapState('governance/gov', ['hasActiveProposals'])
  },
  methods: {
    onAccount() {
      this.$router.push('/account')
    }
  }
}
</script>
