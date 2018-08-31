### npm with docker

````
docker run -v $PWD:/mnt -it --entrypoint /bin/sh node:9-alpine
````

- Get node modules

```
cd /mnt && npm install
```


```
#compile ts files
cd /mnt && npm run build

# exec example file
cd mnt && node lib/examples/feed/xxx.js

# exec tests
cd /mnt && ./node_modules/.bin/jest test
```




### Generate lib
 ````
./node_modules/.bin/tsc
````

pre alpha version