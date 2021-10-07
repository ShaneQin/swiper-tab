Component({
  data: {
    navWidth: 0,
    currentScroll: 0,
    scrollLeft: 0,
  },
  properties: {
    data: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0,
      observer(val) {
        this.moveNavItem()
      }
    }
  },
  methods: {
    handleScroll(e) {
      const { detail } = e
      this.setData({ currentScroll: detail.scrollLeft })
    },
    handleTabTap(e) {
      const { target } = e
      this.triggerEvent(
        'changetab',
        { current: target.dataset.index }
      )
    },
    moveNavItem() {
      tt.createSelectorQuery()
        .select('.swiper-tab-header__item.active')
        .boundingClientRect((res) => {
          const { left } = res
          const { navWidth, currentScroll } = this.data
          const halfWidth = navWidth / 2
          const scrollLeft = currentScroll + left - halfWidth
          this.setData({ scrollLeft })
        })
        .exec()
    }
  },
  ready() {
    tt.createSelectorQuery()
      .select('.swiper-tab-header__scroll')
      .boundingClientRect(({ width }) => {
        this.setData({
          navWidth: width
        })
      })
      .exec()
  },
})