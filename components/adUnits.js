class AdUnits {
    /* Define Elements */
    get addSizes() {return $('//android.widget.TextView[@resource-id="net.pubnative.mopubdemo:id/smallLabel"]')}

    goToAdSizes() {
      this.addSizes.click()
    }

  }
  module.exports = new AdUnits()