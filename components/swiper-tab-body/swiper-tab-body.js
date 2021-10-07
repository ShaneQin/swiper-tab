Component({
  data: {
    height: 0,
  },
  properties: {
    current: {
      type: Number,
      value: 0
    }
  },
  methods: {
    handlSwiperChange(e) {
      const { detail } = e
      const { current, source } = detail
      if (source !== 'touch') return
      this.triggerEvent(
        'changetab',
        { current }
      )
    },
    setHeight() {
      tt.createSelectorQuery()
        .select('.swiper-tab-header')
        .boundingClientRect((headerRes) => {
          const headerHeight = headerRes.height
          tt.createSelectorQuery()
            .selectViewport()
            .boundingClientRect((res) => {
              const windowHeight = res.height
              this.setData({
                height: windowHeight - headerHeight
              })
            })
            .exec()
        })
        .exec()
    }
  },
  ready() {
    this.setHeight()
  }
})