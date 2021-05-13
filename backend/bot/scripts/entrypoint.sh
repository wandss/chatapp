#!/bin/sh

set -e
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
uswgi --socket :8001 --master --enable-threads --module app.wsgi
