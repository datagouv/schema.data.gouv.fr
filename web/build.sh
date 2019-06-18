#!/usr/bin/env bash
bundle install

cp -r /Users/antoineaugusti/Documents/schema.data.gouv.fr/aggregateur/data/. collections/_schemas/
cp /Users/antoineaugusti/Documents/schema.data.gouv.fr/aggregateur/data/schemas.yml _data/
bundle exec jekyll build

# Add headers' rules for Netlify
cp _headers _site/

# Zip the schemas folder and include it in the published website
cd collections && mv _schemas schemas && zip -r schemas.zip schemas/ && mv schemas _schemas && mv schemas.zip ../_site/schemas/
