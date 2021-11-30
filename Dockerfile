FROM python:3.9

RUN apt-get update && apt-get -y upgrade

RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

COPY ./aggregateur /aggregateur
COPY ./api /api
COPY ./web /web
COPY ./site /site

RUN ls -ah

WORKDIR /aggregateur

RUN pip install -r requirements.txt

WORKDIR /site
RUN python prepareSite.py

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
