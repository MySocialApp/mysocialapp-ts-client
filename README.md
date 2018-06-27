### npm with docker

````
docker run -v $PWD:/mnt -it --entrypoint /bin/sh node:9-alpine
````

### Generate lib
 ````
./node_modules/.bin/tsc
````

pre alpha version