#!/usr/bin/env bash

echo "Starting PHP internal web server and opening URL in default browser"

php -S localhost:8000 &

open "http://localhost:8000/www/"