## Trybe-Task-List-Frontend

## Requirements
* Linux / WSL Environment

## Setup with docker-compose
# Clone the repo
If you prefere SSH:
```bash
git clone git@github.com:AlessandroFMello/trybe-task-list-frontend.git
cd trybe-task-list-frontend
```
If you prefere HTTP:
```bash
git clone https://github.com/AlessandroFMello/trybe-task-list-backend.git
cd trybe-task-list-frontend
```

Create your .env file accordingly to the provided .env.example file
```bash
cp .env.example .env
```

Building the containers should automagically install all the needed dependencies
```bash
docker-compose up -d
```

Opening [http://localhost:8080/status](http://localhost:8080/status) should show you the application status

Run the migrations using knex inside the api container
```bash
docker exec -it qrmenu-api npx knex migrate:latest
```

## Setup with Makefile
An alternative way to build the app is using the Makefile, but the requirements are the same and the make command installed

To build and run the app:
```bash
make up
```

To stop the app
```bash
make stop
```

To run the migrations
```bash
make migrate
```

Now you`re good to go
