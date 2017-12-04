# current_userId=$(curl -X GET http://jsonplaceholder.typicode.com/posts/$1 | jq .userId)
# current_body=$(curl -X GET http://jsonplaceholder.typicode.com/posts/$1 | jq .body)
#
# curl -X PUT -d "body=$current_body&title=$2&userId=$current_userId" "http://jsonplaceholder.typicode.com/posts/$1"

curl -X PUT -d "title=$2" "http://jsonplaceholder.typicode.com/posts/$1"
