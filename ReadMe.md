# H1 361 Microservice Wikipedia Summary Data

Oregon State University 361 - 400 Fall 2022

## How To Request Data

1. cd into restapi folder
2. npm install index.js 
3. npm start inside this folder.. local host is on port 8880
4. send GET request to http://localhost:8880/wiki_request/{subject}


## How To Receive Data 
1. data is received in Json format after sending GET request to api

** EXAMPLE **
{"image_url":"https://upload.wikimedia.org/wikipedia/commons/a/a7/Detroit_Skyline_%28123143197%29.jpeg",
"wiki_url":"https://en.wikipedia.org/wiki/Detroit",
"description":"Detroit is the largest city in the U.S. state of Michigan. It is also the largest U.S. city on the United States–Canada border, and the seat of government of Wayne County. The City of Detroit had a population of 639,111 at the 2020 census, making it the 27th-most populous city in the United States. The metropolitan area, known as Metro Detroit, is home to 4.3 million people, making it the second-largest in the Midwest after the Chicago metropolitan area, and the 14th-largest in the United States. Regarded as a major cultural center, Detroit is known for its contributions to music, art, architecture and design, in addition to its historical automotive background. Time named Detroit as one of the fifty World's Greatest Places of 2022 to explore."}
