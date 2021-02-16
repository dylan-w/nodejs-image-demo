# Node + Docker Hello World

A little hello world program to prove to myself that I can get a server up and running. Most of it is from this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker).

Docker build command:

```
docker build -t dylanwesenberg/nodejs-demo .
```

Docker run command:
Replace \</host/sslKeyDirectory\> with host path to a folder containing ssl certs (privKey.pem and fullchain.pem)

```
docker run --name nodejs-image-demo -d -p 8080:80 dylanwesenberg/nodejs-image-demo
```