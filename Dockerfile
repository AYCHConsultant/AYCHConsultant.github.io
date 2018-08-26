FROM ubuntu:16.04

RUN mkdir -p /app
WORKDIR /app

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y curl
    
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g gulp

EXPOSE 3000

VOLUME ["/app"]
CMD ["gulp", "serve"]