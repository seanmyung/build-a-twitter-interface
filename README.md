# Build a Twittr Interface
Treehouse Techdegree Project #7

#Project Requirements
====================
## Set up a new Express project in the provided app.js file.
- [x] A package.json file that includes your project’s dependencies.
- [x] A Jade/Pug template file to display tweets and messages
- [x] A config.js file that will contain your application’s authentication code
- [x] Program your scraper so that it visits the websitA .gitignore file to add your config. js and node_modules/ folder to. This will prevent these files from being committed and pushed to github
- [x] An app.js file where you will set up your Express app and write your API calls
- [x] An index.html file that provides an example of what the finished project should look like, and some CSS and image files to use with your Jade/Pug template

## Create a new Twitter application. This will generate the keys and access tokens you need to authenticate your application so it can communicate with the Twitter API. You can find a link to a tutorial on how to do this in the project resources. Please note that while the tutorial says to create a Twitter dev account at dev.twitter.com, the url to create a Twitter dev account is now https://apps.twitter.com/

##To use and interact with the Twitter API, you’ll need to set up a way to give the Twitter API the set of keys and access tokens that were generated when you create your Twitter app. It’s a good idea to use an npm module to help you with this part. For this project, you’ll use an npm module called Twit. You can find a link in the project resources. Be sure to look through the documentation and familiarize yourself with how it works.
- [x] Create a file called config.js. In this file, you’ll assign an object literal to the module.exports object, as shown in the Twit documentation. The object literal should have the following properties with their corresponding values from your Twitter application account: consumer_key, consumer_secret, access_token,
access_token_secret
- [x] Import this code into your app.js file to authenticate your application so you can request data from the Twitter API. The config.js file must be listed in the .gitignore file so it won’t be committed to your github repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys / secrets / passwords to Github or other publicly accessible place.

## Make a Pug/Jade template for the main page. The template should have spaces for:
- [x] your 5 most recent tweets
- [x] your 5 most recent friends
- [x] your 5 most recent private messages

## Using Node and Express, request the data you need from Twitter’s API, render it in your template, and send it to the client at the “/” route. Please avoid using Express generator to set up this project. It will be good practice to set up a simple Express app yourself!

## Each rendered result must include all of the information seen in the sample layout:
- [x] tweets -message content -# of retweets -# of likes -date tweeted
- [x] friends -profile image -real name -screenname
- [x] messages -message body -date the message was sent -time the message was sent

## Make sure the application actually renders your correct Twitter information by running it on your local machine and comparing it to your recent Twitter activity.

# Extra Credit
- [x] Add a section to the bottom of your page that allows a user to post a new tweet.
- [x] Add an error page to your application, so that if anything goes wrong with your routes, the user will see a friendly message rendered, instead of the default error code.
- [x] Include your personal background image from Twitter as a background for the page header.