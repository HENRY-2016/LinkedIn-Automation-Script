
## Script Testing : 
    The Script Was Tested In Linux OS Environment

## Selenium Version
    The script was tested with selenium version 4

## Install python3.x
    sudo apt install python3.x

## Create a Folder 
    mkdir auto-scripts

## Set Up Virtual Environment in Created Folder
    python3.10 -m venv env

##  Activate the Virtual Environment 
    source env/bin/activate

## Install selenium library
    pip isntall selenium

## Modify The appSettings values
    username ="YOUR_USER_EMAIL"
    password = "YOUR_USER_PASSWORD"
    postMsg = "MESSAGE_TO_BE_POSTED"
    recipient_msg_username = "LINKEDIN_USERNAME"
    message_content = "MESSAGE_TO_BE_SENT"
    connection_username = "LINKEDIN_USERNAME_TO_BE_CONNECTED_TO"
    connection_message = "LINKEDIN_CONNECTION_MESSAGE_TO_BE_SENT"
    scrape_username = "LINKEDIN_USERNAME_PROFILE_TO_BE_SCRAPED"


## Run Script
    python main.py


##  Script Functions 
    log_in() :: Logs In A user
    post_message() :: Posts A Given Message
    scrape_user_profile() :: Scrapes Given User Profile Details And Prints Them On A Screen Console
    send_connection_with_message()  :: Sends A Connection To A Given User
    send_message_to_user() :: Sends A Given Message

## Github Pushing
    it init
    git commit -m "initial commit"
    git branch -M main
    git push -u origin main




