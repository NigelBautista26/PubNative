const { expect } = require('chai')
const adUnits = require('../../components/adUnits')
const adSizes = require('../../components/adSizes')

describe("Test The Application...", () => {
    beforeEach(() => { 
        driver.launchApp() 
    })
    it("Request an advertisment...", () => {
        adUnits.goToAdSizes()
        adSizes.requestAd()
        // adSizes.requestedAdvertisment.isDisplayed() // This assertion works as well to check the ad is displayed...
        expect(adSizes.requestedAdvertisment.getText()).to.equal('') // Assertion to check that the ad is generated...

    })
    afterEach(() => { 
        driver.closeApp()
    })

})
