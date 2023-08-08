FROM python:3.9.7

ENV DJANGO_SUPERUSER_USERNAME jv.sharifi@gmail.com
ENV DJANGO_SUPERUSER_EMAIL jv.sharifi@gmail.com
ENV DJANGO_SUPERUSER_PASSWORD TGKRtFMAXYgVWyCf

WORKDIR /app

RUN pip install --upgrade pip

COPY requirements.txt /var

RUN pip install -r /var/requirements.txt

EXPOSE 8000

CMD gunicorn -b 0.0.0.0:8000 config.wsgi