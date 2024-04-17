# Linkedin Automation 

# imports 
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import selenium.common.exceptions as exceptions
import time

from appSettings import username, password, postMsg, recipient_msg_username, message_content, connection_username, connection_message,scrape_username

# delay time in seconds
delay_time_1 =  2 
delay_time_2 = 3 
delay_time_3 = 3


def log_in ():
    print ("======== Logging In Linked In Now ========")
    # find inputs
    try:
        usernameInput = driver.find_element(By.ID,"session_key")
        passwordInput = driver.find_element(By.ID,"session_password")
        signInBtn = driver.find_element(By.CLASS_NAME,"sign-in-form__submit-btn--full-width")

        #insert credentials into inputs
        usernameInput.send_keys(username)
        passwordInput.send_keys(password)
        time.sleep(delay_time_1)
        signInBtn.click()
        print ("==> Logged In Well ========")
    except exceptions.NoSuchElementException as Message:
        print ("=================") 
        print ("AN ERROR") 
        print (Message) 
        print ("=================") 






##################### Step 3 - Create Linkedin Post ###########################
def post_message ():
    print ("======== Posting On Linked In Now ========")
    try:
        # find create post btn
        # postCreateBox = driver.find_element(By.ID,"ember28")
        # postCreateBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'ant-btn-primary')]//*[contains(., 'OK')]/..").click()
        postCreateBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'ember-view') and contains(., 'Start a post, try writing with AI')]")
        postCreateBtn.click()
        time.sleep(delay_time_1)
        print ("==> Opened Post Modal Very  Well")
        postInput = driver.find_element(By.CLASS_NAME,"ql-editor.ql-blank")
        postInput.send_keys(postMsg)
        time.sleep(delay_time_1)
        print ("==> Text Typed Very Well")
        postBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'share-actions__primary-action') and contains(., 'Post')]")
        postBtn.click()
        print ("==> Text Posted Very Well")
        time.sleep(delay_time_1)
        # else:
        #     print()
    except exceptions.NoSuchElementException as Message:
        print ("=================") 
        print ("AN ERROR : ") 
        print (Message) 
        print ("=================") 


def send_message_to_user ():
    print ("======== Sending A Message On Linked In Now ========")
    # Navigate to the profile of the user i want to message to
    profile_url = f'https://www.linkedin.com/in/{recipient_msg_username}/'
    driver.get(profile_url)
    # wait for 5 secs
    driver.implicitly_wait(5)

    try:
        time.sleep(delay_time_1)
        messageBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'pvs-profile-actions__action') and contains(., 'Message')]")
        # messageBtn = driver.find_element(By.XPATH,'//button[contains(@aria-label, "Message")]')
        # wait for 5 secs
        driver.implicitly_wait(5)
        messageBtn.click()
        time.sleep(delay_time_1)
        print ("==> Opened Message Modal Very  Well")

        # Find the message input field and enter the message content
        message_input = driver.find_element(By.XPATH,'//div[@role="textbox"]')
        message_input.send_keys(message_content)
        print ("==> Text Typed The Message Very Well")

        # postBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'share-actions__primary-action') and contains(., 'Post')]")
        # postBtn.click()
        # Send the message by pressing Enter
        message_input.send_keys(Keys.ENTER)
        print ("==> Message Sent Very Well")
        # else:
        #     print()
    except exceptions.NoSuchElementException as Message:
        print ("=================") 
        print ("AN ERROR : ") 
        print (Message) 
        print ("=================") 


def send_connection_with_message ():
    print ("======== Sending A Connection Request On Linked In Now ========")

    # Navigate to the profile of the user i want to message to
    profile_url = f'https://www.linkedin.com/in/{connection_username}/'
    driver.get(profile_url)
    # wait for 5 secs
    driver.implicitly_wait(5)

    try:
        connectBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'pvs-profile-actions__action') and contains(., 'Connect')]")
        # wait for 5 secs
        driver.implicitly_wait(5)
        connectBtn.click()
        time.sleep(delay_time_1)
        print ("==> Opened Connect Modal Very  Well")

        addNoteBtn=driver.find_element(By.XPATH, "//button[contains(@class, 'artdeco-button--muted') and contains(., 'Add a note')]")
        # wait for 5 secs
        driver.implicitly_wait(5)
        addNoteBtn.click()
        time.sleep(delay_time_1)

        # Find the "Add a note" input field and enter a personalized message 
        noteInput = driver.find_element(By.ID,"custom-message")
        noteInput.send_keys(connection_message)

        # Find the "Send now" button and click on it
        xpath_expression = f'//button[@aria-label="Send now"]'
        # sendBtn = driver.find_element(By.XPATH,'//button[text()="Send now"]')
        sendBtn = driver.find_element(By.XPATH,xpath_expression)
        sendBtn.click()
        print ("==> Connection Sent Very Well")
        # else:
        #     print()
    except exceptions.NoSuchElementException as Message:
        print ("=================") 
        print ("AN ERROR : ") 
        print (Message) 
        print ("=================") 

def scrape_user_profile():
    print ("======== Scraping User Linked In Profile  Now ========")
    # Navigate to the profile of the user i want to message to
    profile_url = f'https://www.linkedin.com/in/{scrape_username}/'
    # wait for 5 secs
    driver.implicitly_wait(5)
    driver.get(profile_url)

    try:
        profile_name = driver.find_element(By.CLASS_NAME, "text-heading-xlarge").get_attribute("innerText")
        profile_title = driver.find_element(By.CLASS_NAME, "text-body-medium").get_attribute("innerText")
        profile_location = driver.find_element(By.CLASS_NAME, "text-body-small.inline").get_attribute("innerText")

        # Click on Contact Info link
        driver.find_element(By.ID, "top-card-text-details-contact-info").click()
        time.sleep(delay_time_1)
        # profile_email = driver.find_element(By.CLASS_NAME, "link-without-visited-state").get_attribute("innerText")

        # Close the Contact Modal
        # xpath_expression = f'//button[@aria-label="Dismiss"]'
        # closeBtn = driver.find_element(By.XPATH,xpath_expression)
        # closeBtn.click()

        print("")
        print("Profile Name: {}".format(profile_name))
        print("Title: {}".format(profile_title))
        print("Location: {}".format(profile_location))
        # print("Email: {}".format(profile_email))
        print("")
        print ("==> User Data Scraped Very Well")

    except exceptions.NoSuchElementException as Message:
        print ("=================") 
        print ("AN ERROR : ") 
        print (Message) 
        print ("=================") 






# Get webdriver path
try:
    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(options=options)
    # driver.set_window_size(1400, 1400)

except exceptions.webDriverException as Message:
    print ("=================") 
    print ("AN ERROR :  Un Able To Open Browser") 
    print (Message) 
    print ("=================") 

##################### Step 1 - Load Linkedin Homepage ###########################
try:
    # url = "https://www.linkedin.com/login"
    url = "https://www.linkedin.com/home"

    driver.get(url)
except exceptions.WebDriverException as Message:
    print ("=================") 
    print ("AN ERROR ") 
    print (Message) 
    print ("=================") 


# Functions Call 
log_in()
# post_message()
# scrape_user_profile()
# send_connection_with_message() 
send_message_to_user()


# Close the WebDriver
# driver.quit()