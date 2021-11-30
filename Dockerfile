FROM python:3.9

RUN apt-get update && apt-get -y upgrade

COPY ./aggregateur /aggregateur
COPY ./api /api
COPY ./web /web
COPY ./site /site

RUN ls -ah

WORKDIR /aggregateur

RUN pip install -r requirements.txt

WORKDIR /site
RUN python prepareSite.py


RUN apt-get install nodejs -y
RUN apt-get install npm -y

RUN node -v
RUN npm -v

RUN npm install npm@latest -g

RUN npm install

RUN npm run build

USER root

ARG CACHEBUST=1
RUN cp -r /dist/* /usr/share/nginx/html/
ARG CACHEBUST=1
RUN cp -r /dist/* /var/www/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

CMD service nginx start
