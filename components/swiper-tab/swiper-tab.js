Component({
  data: {
    current: 0
  },
  properties: {
    headerData: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleTabChange(e) {
      const { detail } = e
      const { current } = detail
      this.setData({ current })
    }
  }
})