#! /bin/bash

mongoimport --host 0.0.0.0 --db amibook --collection users --type json --file /mongo-seed/users.json --jsonArray

