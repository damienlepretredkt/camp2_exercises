curl -X POST -d "foo=bar" "https://postman-echo.com/post" | jq .form > 02_postman_api_post.result
