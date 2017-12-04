curl -X POST -H 'Content-Type: application/json' -d '{"foo":"bar"}' "https://postman-echo.com/post" | jq .json > 03_postman_api_post.result
