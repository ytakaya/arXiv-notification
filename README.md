# arXiv-notification

## Description
When a new article is submitted to the registered arxiv search query, you can receive a notification on slack

## Usage
See the [Slack api documentation](https://api.slack.com/authentication/basics) and create a bot.Scope required for Bot is `chat:write`.  

Install the created app in the workspace of slack.  


Launch mongodb.

Enter mongodb URL, slack app credentials and slack channel name in `.env`.

Install packages.
```
$ npm install
```
  

Register search query in `./config/default.json`
```
{
  "options":{
    "option1": {                     
      "search_query": {                 <- here
        "au": "Matt Fredrikson"
      },
      "start": "0",
      "sortBy": "submittedDate",
      "max_results": "3"
    }
  }
}
```
For queries, see `5.1 Details of Query Construction` of [arXiv API User's Manual](https://arxiv.org/help/api/user-manual).

Run the application.
```
$ node src/index.js
```