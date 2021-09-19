# ubademy-front
Taller 2 - 2c 2021 - Frontend repository

## Requirement

- Node v14 and up (you might want to take a look at https://github.com/nvm-sh/nvm)
- NPM

## Installation

- Clone the project
- Run `npm install`
- Run `npm run start` for development purposes. it should launch a server at 8080.


### Run with docker
- sudo docker build -t ubademy:front .
- sudo docker run \
>     -it \
>     --rm \
>     -v ${PWD}:/app \
>     -v /app/node_modules \
>     -p 3001:3000 \
>     -e CHOKIDAR_USEPOLLING=true \
>     ubademy:front

