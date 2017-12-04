# current_userId=$(curl -X GET http://jsonplaceholder.typicode.com/posts/$1 | jq .userId)
#
# curl -X PUT -d "body=$3&title=$2&userId=$current_userId" "http://jsonplaceholder.typicode.com/posts/$1"
curl -X PUT -d "body=$3&title=$2" "http://jsonplaceholder.typicode.com/posts/$1"
