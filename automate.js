

/* ==============  ASSIGN YOUR TARGET VALUES ============== */


const USER_EMAIL =  "user@gmail.com"; // "USER_EMAIL_LOG_IN"
const USER_PASSWORD = "userpass"; // "USER_PASSWORD_LOG_IN"


const SCRAPE_USERNAME = "kamoga-henry-4a2b1415b"; //"USERNAME_TO_BE_SCRAPED"
const CONNECTION_USERNAME = "kamoga-henry-4a2b1415b"; // "USERNAME_TO_CONNECT_TO"
const RECIPIENT_MSG_USERNAME = "kamoga-henry-4a2b1415b"; // "YOUR_RECIPIENT_USERNAME"


//   Text Message Goes In Here
const POST_MSG = "How Is Ai and ML Today ???"
const MESSAGE_CONTENT = "Hello! How Are You Today! And Hope You Are Doing Well!";
const CONNECTION_MESSAGE = "Hello, I'd like to connect with you on LinkedIn";



/* ======================   APP AUTOMATION START ======================  */
const {By,Builder,until, Browser} = require('selenium-webdriver');
const assert = require('assert');

const APP_URL = "https://www.linkedin.com/home";


//  waits in seconds 
const EXPLICIT_WAITS_1 = 3000;


const IMPLICIT_WAITS_1 = 3000;
const IMPLICIT_WAITS_2 = 10000;


async function automate () {
    let driver;

    try{
        // define a browser 
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get(APP_URL)

        /*
                ======================
                ACCOUNT LOG IN
                ======================
        */
        console.log();
        console.log();
        console.log("======== Logging In Linked In Now ========");
        console.log();
        console.log("::: " + USER_EMAIL + USER_PASSWORD)
        await driver.findElement(By.id("session_key")).sendKeys(USER_EMAIL);
        await driver.findElement(By.id("session_password")).sendKeys(USER_PASSWORD);
        let signInBtn = await driver.findElement(By.className("sign-in-form__submit-btn--full-width"));
        await driver.wait(until.elementIsVisible(signInBtn),EXPLICIT_WAITS_1).click();
        console.log("==> Logged In Well")


        // let navBar = await driver.findElement(By.css("nav"));
        // let navBarLinks = await navBar.findElements(By.css("a"));
        // let name;
        // for (name of navBarLinks){
        //     let text = await name.getText();
        //     console.log(" :: "+text)
        // }




        // Compare the page title with the expected title
        /*
            ======================
            POSTING 
            ======================
        */
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_2});
        console.log();
        console.log();
        console.log("======== Posting On Linked In Now ========");
        console.log();
        let postCreateBtn = await driver.findElement(By.xpath("//button[contains(@class, 'ember-view') and contains(., 'Start a post, try writing with AI')]"));
        await driver.wait(until.elementIsVisible(postCreateBtn),EXPLICIT_WAITS_1).click();
        console.log ("==>Opened Post Modal Very  Well");
        await driver.findElement(By.className("ql-editor")).sendKeys(POST_MSG);
        console.log ("==> Text Typed Very Well");
        let postBtn= await driver.findElement(By.xpath("//button[contains(@class, 'share-actions__primary-action') and contains(., 'Post')]"));
        await driver.wait(until.elementIsVisible(postBtn),EXPLICIT_WAITS_1).click();
        console.log ("==> Text Posted Very Well");


        /*
                ======================
                SCRAPING USER PROFILE
                ======================
        */
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_2});
        console.log();
        console.log();
        console.log("======== Scrapping  User Profile On Linked In Now ========");
        console.log();
        let scrap_profile_url = "https://www.linkedin.com/in/"+SCRAPE_USERNAME+"/"
        await driver.get(scrap_profile_url)
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_1});
        let profile_name = await driver.findElement(By.className("text-heading-xlarge")).getAttribute("innerText")
        let profile_title = await driver.findElement(By.className("text-body-medium")).getAttribute("innerText")
        let profile_location = await driver.findElement(By.className("text-body-small inline t-black--light break-words")).getAttribute("innerText")
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_1});
        console.log("========> User Profile Details");
        console.log("Profile Name :: " + profile_name);
        console.log("Title :: "+ profile_title);
        console.log("Location :: "+ profile_location);
        console.log();
        console.log("==> Scraped User Data Very Well")


        /*
                ======================
                SENDING A CONNECTION 
                ======================
        */
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_2});
        console.log();
        console.log();
        console.log ("======== Sending A Connection With Message On Linked In Now ========");
        console.log();
        let connection_profile_url = "https://www.linkedin.com/in/"+CONNECTION_USERNAME+"/"
        await driver.get(connection_profile_url)
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_2});
        let connectBtn= await driver.findElement(By.xpath("//button[contains(@class, 'pvs-profile-actions__action') and contains(., 'Connect')]"));
        await driver.wait(until.elementIsVisible(connectBtn),EXPLICIT_WAITS_1).click();
        let addNoteBtn= await driver.findElement(By.xpath("//button[contains(@class, 'artdeco-button--muted') and contains(., 'Add a note')]"));
        await driver.wait(until.elementIsVisible(addNoteBtn),EXPLICIT_WAITS_1).click();
        // # Find the "Add a note" input field and enter a personalized message 
        let noteInput = await driver.findElement(By.id("custom-message"));
        noteInput.sendKeys(CONNECTION_MESSAGE)
        await driver.wait(until.elementLocated(By.xpath('//button[@aria-label="Send invitation"]')),EXPLICIT_WAITS_1).click();
        console.log ("==> Connection Sent Very Well");


        /*
            =================
            SENDING A MESSAGE
            =================
        */
        
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_2});
        console.log();
        console.log();
        console.log ("======== Sending A Message On Linked In Now ========");
        console.log();
        // # Navigate to the profile of the user i want to message to
        let recipient_profile_url = "https://www.linkedin.com/in/"+RECIPIENT_MSG_USERNAME+"/"
        await driver.get(recipient_profile_url)
        await driver.manage().setTimeouts({implicit: IMPLICIT_WAITS_2});
        // get message btn
        let messageBtn= await driver.findElement(By.xpath("//button[contains(@class, 'pvs-profile-actions__action') and contains(., 'Message')]"));
        await driver.wait(until.elementIsVisible(messageBtn),EXPLICIT_WAITS_1).click();
        console.log (": Opened model Very Well");
        // # Find the message input field and enter the message content
        // await driver.wait(until.elementLocated(By.xpath('//button[@aria-label="Write a message…"]')),EXPLICIT_WAITS_1).click();
        await driver.findElement(By.xpath("//button[contains(@class, 'msg-gai-smart-action__button') and contains(., 'Write with AI')]")).sendKeys(MESSAGE_CONTENT);
        // await driver.findElement(By.xpath('//div[@aria-label="Write a message…"]')).sendKeys(MESSAGE_CONTENT);
        console.log("==> Text Typed The Message Very Well");
        let messageSendBtn= await driver.findElement(By.xpath("//button[contains(@class, 'msg-form__send-button') and contains(., 'Send')]"));
        // await driver.wait(until.elementIsVisible(messageSendBtn),EXPLICIT_WAITS_1).click();
        console.log ("==> Message Sent Very Well");


    }
    catch ( error){
            console.error('An Error ::', error);
            console.error();
            // Log stack trace to capture line numbers
            console.error('Stack trace:', error.stack);
    }
    finally{
        // await driver.quit();
    }

}

automate();


