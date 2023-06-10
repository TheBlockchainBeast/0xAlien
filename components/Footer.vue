<template>
  <footer class="footer">
    <div class="container">
      <div class="level">
        <div class="level-left">
          <div class="level-item is-column">
            <div class="level-subitem">
              Powered by
              <span class="footer-version__value">0xAlien</span>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item is-column">
            <div class="level-subitem">
              <div class="buttons">
                <b-button
                  tag="a"
                  type="is-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon-right="telegram"
                ></b-button>

                <b-button
                  tag="a"
                  type="is-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon-right="medium"
                ></b-button>
                <b-button
                  tag="a"
                  type="is-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon-right="twitter"
                ></b-button>

                <div class="break"></div>
                <b-dropdown
                  v-model="$i18n.locale"
                  class="dropdown-langs"
                  position="is-top-left"
                  aria-role="list"
                  @change="langChange"
                >
                  <b-button slot="trigger" type="is-icon">
                    <FlagIcon :code="$i18n.locale" :class="'is-active-locale-' + $i18n.locale" />
                  </b-button>

                  <b-dropdown-item
                    v-for="locale in locales"
                    :key="locale"
                    :value="locale"
                    aria-role="listitem"
                  >
                    <FlagIcon :code="locale" />
                    {{ printLang(locale) }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

import { FlagIcon } from '@/components/icons'
import { LOCALES_NAMES } from '@/constants'

export default {
  components: {
    FlagIcon
  },

  computed: {
    ...mapGetters('metamask', ['networkConfig', 'netId']),
    ...mapGetters('txHashKeeper', ['addressExplorerUrl']),

    locales() {
      return this.$i18n.availableLocales
    }
  },
  methods: {
    langChange(lang) {
      localStorage.setItem('lang', lang)

      if (lang === 'zh') {
        lang += '-cn'
      }

      this.$moment.locale(lang)
      this.$numbro.setLanguage(LOCALES_NAMES[lang])
    },
    printLang(lang) {
      let code = lang
      switch (code) {
        case 'zh':
          code = 'cn'
          break
      }
      return code.toUpperCase()
    }
  }
}
</script>
