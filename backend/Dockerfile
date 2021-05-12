FROM python:3.6.8
ENV PYTHONUNBUFFERED=1
ENV PATH="/scripts:${PATH}"
WORKDIR /chatapp
COPY requirements.txt ./requirements.txt
COPY ./chatapp /chatapp
COPY ./scripts
RUN pip install -r requirements.txt
RUN django-admin collectstatic --noinput
