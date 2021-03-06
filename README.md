# API and Microservice: Url Shortener

## Environment Prerequisites
1. Node.js
2. Express.js
3. Ejs
4. MongoDB + Mongoose
5. HTML
6. Bootstrap

## User Stories
1. I can post a URL to `project_url/api` and I will receive on the same web page both the URL I posted and a shortened URL. 
2. Both the original and the shortened URLs must direct to the same website if clicked.
3. If I post an invalid URL, the form validation mechanism will detect and reject it.
4. As longo as I do not refresh the web page, every URL I can post will be returned with its correspondant shortened URL and added on the same table in the same web page.
5. If I refresh the web page, the table containing all the returned URLs and their shortened URLs will be removed from the web page, but not from the database.

## Examples:
#### Input: 
'https://devlessons.com'
#### Output:
original url: 'https://devlessons.com'  short url: `xhQ4u_`

## Deployment
After the microservice development and its deployment on Heroku are done, any one can test its functionality
by accessing it through the following link: 'https://url-shortener-appli.herokuapp.com'
