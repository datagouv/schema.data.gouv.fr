FROM python:3.9

RUN apt-get update && apt-get -y upgrade

COPY ./dist /dist

EXPOSE 80
RUN apt-get install -y nginx
RUN rm -v /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx/

USER root

ARG CACHEBUST=1
RUN cp -r /dist/* /usr/share/nginx/html/
ARG CACHEBUST=1
RUN cp -r /dist/* /var/www/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

CMD service nginx start
