start:
	npm run start

publish:
	npm run build
	rsync -avzr --delete ./_site/ network47.org:/home/n47org/apps.network47.org