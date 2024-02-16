#!/bin/bash

latest_tag=$(git describe --tags --abbrev=0)
tag_parts=($(echo "$latest_tag" | tr '.' ' '))
docker_registry="registry.gitlab.com/etalab/data.gouv.fr/infra"
docker_image="simple-scaffold"

function git_tag() {
    version="$1"

    git tag -a "$version" -m "release $version"
    git push origin "$version"
    echo "version '$version' created successfully"
}

function docker_image() {
    version="$1"
    docker build -t "$docker_registry/$docker_image:$version" .
}

case $1 in
    "patch")
        new_patch=$((tag_parts[2]+1))
        new_version="${tag_parts[0]}.${tag_parts[1]}.$new_patch"
        git_tag $new_version
        docker_image $new_version
        ;;
    "minor")
        new_minor=$((tag_parts[1]+1))
        new_version="${tag_parts[0]}.$new_minor.0"
        git_tag $new_version
        docker_image $new_version
        ;;
    "major")
        new_major=$((tag_parts[0]+1))
        new_version="$new_major.0.0"
        git_tag $new_version
        docker_image $new_version
        ;;
    *)
        echo "Usage: $0 [patch|minor|major]"
        exit 1
        ;;
esac

