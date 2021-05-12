#!/bin/sh

set -e
django-admin collectstatic --noinput
uswgi --socket :8000 --master --enable-threads --module app.wsgi

