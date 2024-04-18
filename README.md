
## Script Testing  
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

## Testing The Script Functionality 

    You can un comment a function name at the bottom and run it one by one as i did when doing final testing.
    RUNNING AS ONCE WAS NOT DONE DE TO ACCOUNT RESTRICTIONS.

    To a chive the script functionality, i opened up a testing account which i used for several days to do the development and did final testings at the same time recording the videos.

    ONLY the login (), post_message (), scrape_user_profile (), send_connection_with_message() WHERE OK AS SHOWN IN THE VIDEO SECTION
    BUT the send_message_to_user() WAS NOT OK DUE TO ACCOUNT RESTRICTED

## Video clips link 
    post_message ()
        https://drive.google.com/file/d/1hwEKsi-tq5BLh8pNxanESsEY3LhzPxO0/view?usp=sharing

    scrape_user_profile ()
        https://drive.google.com/file/d/1S36GFvBYo44Y6l_wepodcWsT1EJXOHl9/view?usp=sharing

    send_connection_with_message()
        https://drive.google.com/file/d/1MHcTlEPet-iWO325bV870xAO7AfUcj15/view?usp=sharing

    send_message_to_user()
        When i was working on this function i did test some of the steps to be taken to a chive the goal and where working ok.
        But due to automated multiple log in for some days, LINKED IN BLOCKED MY TESTING ACCOUNT as the video links below shows 
            Out put 1
                https://drive.google.com/file/d/1_093kQGHZCSu3M4B0ekAjVhKotYgK53u/view?usp=sharing
            Out put 1
                https://drive.google.com/file/d/1SyWe_W7EydQ-YCYn2rpAhsTx1m-eh1Xf/view?usp=sharing


## Github Pushing
    git add .
    git commit -m "updates changes"
    git branch -M main
    git push -u origin main




