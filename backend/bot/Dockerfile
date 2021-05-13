FROM python:3.6.8
ENV PYTHONUNBUFFERED=1
ENV PATH="/scripts:${PATH}"
WORKDIR /botapp
COPY ./requirements.txt ./requirements.txt
COPY ./ /botapp
COPY ./scripts /scripts
RUN \
  pip install -r requirements.txt && \
  python manage.py makemigrations && \
  python manage.py migrate && \
  python manage.py collectstatic --noinput && \
  rm -rf scripts/ && \
  rm requirements.txt
CMD ["entrypoint.sh"]
