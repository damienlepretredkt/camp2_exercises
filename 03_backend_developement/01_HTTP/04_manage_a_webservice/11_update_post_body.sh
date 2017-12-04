#current_userId=$(curl -X GET http://jsonplaceholder.typicode.com/posts/$1 | jq .userId)
#current_title=$(curl -X GET http://jsonplaceholder.typicode.com/posts/$1 | jq .title)
#curl -X PUT -d "body=$2&title=$current_title&userId=$current_userId" "http://jsonplaceholder.typicode.com/posts/$1"

curl -X PUT -d "body=$2" "http://jsonplaceholder.typicode.com/posts/$1"
