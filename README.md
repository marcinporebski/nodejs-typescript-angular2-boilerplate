# NodeJS TypeScript+Hapi.JS+Angular2 boilerplate

## Abstract
This simple boilerplate demonstrates how to use **Hapi.JS** along with **Angular2 Dependency Injection** module in **TypeScript**. There's also a proposal how to structure the modules using **di.ts** files as plugins.

## What do you need
In order to use this boilerplate you'll need:
 - **docker**
 - **npm**
 - **make**
 - **typings** (https://www.npmjs.com/package/typings, ```npm install -g typings```)

## How to run
Simply:

1. ```make install```

2. ```make run```

First command will install *npm packages* and *ts.d* typings. After successfull installation you run the application in docker environment with ```make run```, which will start docker-compose solution and a gulp-watcher afterwards.

## "Live reload"
Running ```make run``` starts gulp watcher automatically. This watcher compiles every code changes and triggers server reload inside docker container. If you want to restart the watcher you can do it by ```make watch```.

## Stopping
In order to stop the server, simply type```make stop```.
