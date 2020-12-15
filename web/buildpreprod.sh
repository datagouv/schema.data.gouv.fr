#!/usr/bin/env bash
bundle install

wget https://github.com/etalab/schema.data.gouv.fr/archive/preprod.zip -O /tmp/schema.data.gouv.fr.zip
unzip /tmp/schema.data.gouv.fr.zip -d /tmp
rm assets/images/*
cp -r /tmp/schema.data.gouv.fr-preprod/aggregateur/assets/. assets/images/
cp -r /tmp/schema.data.gouv.fr-preprod/aggregateur/data/. collections/_schemas/
cp /tmp/schema.data.gouv.fr-preprod/aggregateur/data/schemas.yml _data/
cp /tmp/schema.data.gouv.fr-preprod/aggregateur/data/issues.yml _data/
bundle exec jekyll build

# Add headers' rules for Netlify
cp _headers _site/
# Add redirection rules for Netlify
cp _redirects _site/

# Add API files
mkdir _site/api
cp /tmp/schema.data.gouv.fr-preprod/api/data/* _site/api

# Zip the schemas folder and include it in the published website
cd collections && mv _schemas schemas && zip -r schemas.zip schemas/ && mv schemas _schemas && mv schemas.zip ../_site/schemas/
