#!/usr/bin/env bash
wget https://github.com/AntoineAugusti/schema-agg/archive/master.zip -O /tmp/schema-agg.zip
unzip /tmp/schema-agg.zip -d /tmp
cp -r /tmp/schema-agg-master/data/. collections/_schemas/
cp /tmp/schema-agg-master/data/schemas.yml _data/
bundle exec jekyll build

# Add headers' rules for Netlify
cp _headers _site/

# Zip the schemas folder and include it in the published website
cd collections && mv _schemas schemas && zip -r schemas.zip schemas/ && mv schemas _schemas && mv schemas.zip ../_site/schemas/
