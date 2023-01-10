#!/bin/bash 

wait-for $MYSQL_HOST:$MYSQL_PORT -t 40 -- "$@"