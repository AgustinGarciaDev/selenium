const {Builder, By, Key, until} = require('selenium-webdriver')
// const {describe, it, after, before} = require('mocha')
const assert = require('assert')

const credenciales = [
    {id: 1, username: 'biaus.fh@gmail.com' , password: 'biaus123'},
    {id: 2, username: 'biausfh@gmail.com' , password: 'biaus123'},
]

function miTest() {
    describe('Testeo de Sistema de Login', function() {
        this.timeout(20000)

        this.beforeEach(() => {

        })

        it('Ingreso credenciales correctas - Debe encontrar texto Who s watching Now?', async () => {
            let webDriver = new Builder().forBrowser('chrome').build()
            webDriver.manage().window().maximize()
            await webDriver.get('https://cloud-flix.herokuapp.com/')
            await webDriver.wait(until.elementLocated(By.css('#nav-menu > li:nth-child(4) > a')), 5000)
            await webDriver.findElement(By.css('#nav-menu > li:nth-child(4)')).click()
            await webDriver.findElement(By.name('email')).sendKeys(credenciales[0].username)
            await webDriver.findElement(By.name('password')).sendKeys(credenciales[0].password)
            await webDriver.sleep(3000)
            await webDriver.findElement(By.css('#root > div.siteContainerLogInEma > div > form > p')).click()
            await webDriver.sleep(3000)    
            const texto = await webDriver.findElement(By.css('#root > div > div > h1')).getText()
            assert.strictEqual(texto, "Who's watching Now?")
            webDriver.quit()
        })
        // it('Ingreso credenciales incorrectas - No debe encontrar texto Who s watching Now?', async () => {
        //     let webDriver = new Builder().forBrowser('chrome').build()
        //     webDriver.manage().window().maximize()
        //     await webDriver.get('https://cloud-flix.herokuapp.com/')
        //     await webDriver.wait(until.elementLocated(By.css('#nav-menu > li:nth-child(6)')), 5000)
        //     await webDriver.findElement(By.css('#nav-menu > li:nth-child(6)')).click()
        //     await webDriver.findElement(By.name('email')).sendKeys(credenciales[1].username)
        //     await webDriver.findElement(By.name('password')).sendKeys(credenciales[1].password)
        //     await webDriver.sleep(3000)
        //     await webDriver.findElement(By.css('#root > div.siteContainerLogInEma > div > form > p')).click()
        //     await webDriver.sleep(3000)    
        //     const texto = await webDriver.findElement(By.css('#root > div > div > h1')).getText()
        //     assert.strictEqual(texto, "Who's watching Now?")
        //     webDriver.quit()
        // })
    })
        
    
    
}

miTest()