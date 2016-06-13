install:
	npm install
	typings install --save

run:
	docker-compose up -d
	gulp watch-app

watch:
	gulp watch-app

stop:
	docker-compose stop