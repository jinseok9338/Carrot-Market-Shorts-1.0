# Change the customer number to change the size of the Test Data .... but be warned that the test cases can get real big real soon
curl 'http://127.0.0.1:3001/graphql' \
  -X POST \
  -H 'content-type: application/json' \
  --data '{
    "query":"mutation { createTestUsers(customerNumber: 3){ user_id email } }"
  }' | python -m json.tool

  curl 'http://127.0.0.1:3001/graphql' \
  -X POST \
  -H 'content-type: application/json' \
  --data '{
    "query":"mutation { createTestProducts{ product_id } }"
  }' | python -m json.tool

  
  curl 'http://127.0.0.1:3001/graphql' \
  -X POST \
  -H 'content-type: application/json' \
  --data '{
    "query":"mutation { createTestComments{ comment_id message } }"
  }' | python -m json.tool


curl -X POST http://127.0.0.1:3001/signUp -d '{
   "signUpUser":{
       "user_name":"jinseok918111",
       "password":"Lazctlazct93!@",
       "password_confirm":"Lazctlazct93!@",
       "email":"jinseok981222@gmail.com",
       "first_name":"jinseok93",
       "last_name":"Seo",
       "display_pic":"sdad",
       "expiration_email_time": null
   }
}' -H "Content-Type: application/json"


curl -v http://127.0.0.1:3001/confirmEmail/jinseok981222@gmail.com

curl 'http://127.0.0.1:3001/graphql' \
  -X POST \
  -H 'content-type: application/json' \
  --data '{
    "query":"{ users{user_id email} }"
  }' | python -m json.tool