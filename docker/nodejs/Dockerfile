FROM node:14.16.0

LABEL maintainer="Satake Ryota <satake00157@gmail.com>" \
    description="nodejsのDockerfile"

WORKDIR /var/www/html

COPY ./docker-entrypoint.sh /tmp
ENTRYPOINT ["/tmp/docker-entrypoint.sh"]
CMD [ "/sbin/init" ]
