class AdSizes {
        /* Define Elements */
        get requestAdButton() {return $('//android.widget.Button[@resource-id="net.pubnative.mopubdemo:id/button_request"]')}
        get requestedAdvertisment() {return $("~Advertisement")}

        requestAd() {
          this.requestAdButton.click()
        }

      }
      module.exports = new AdSizes()