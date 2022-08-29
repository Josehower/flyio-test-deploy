# Steps to deploy into fly.io

1. Create your Next,js repo as usual following the learning platform instructions.
2. Get the flyctl auth token:
   - install flyctl https://fly.io/docs/getting-started/installing-flyctl/
   - [login in the flyctl](https://fly.io/docs/getting-started/log-in-to-fly/)
   - get the token with `flyctl auth token`
   - Add The secret to github under the name `FLY_API_TOKEN` https://github.com/<username>/<project-slug>/settings/secrets/actions/new
   - only for the first time you need to deploy with `flyctl launch --remote-only`
   - create a.github/workflows/fly.yml and add the workflow in this repo
   - update the app and push
3. Start an ssh conection with the app with

   - `flyctl ssh console`

   - and create a postgres volume with the flyctl
   - update the fly.toml to mount the volume and link it to an specyfic path
   - add postgres to `Dockerfile` pipeline

   - deploy the app
   - stablish and ssh connection and run the following commands

```sh
mkdir /<volume-path>/run/postgresql
chown postgres:postgres /<volume-path>/run/postgresql
su postgres -
mkdir -p /<volume-path>/var/lib/postgresql/data
chmod 0700 /<volume-path>/var/lib/postgresql/data
initdb -D /<volume-path>/var/lib/postgresql/data
echo "host all all 0.0.0.0/0 md5" >> /<volume-path>/var/lib/postgresql/data/pg_hba.conf
echo "listen_addresses='*'" >> /<volume-path>/var/lib/postgresql/data/postgresql.conf
```

- initialize the database

```
su postgres -c 'pg_ctl start -D /<volume-path>/var/lib/postgresql/data'
```

- setup database as usual but using secure data and test the deployed database with

```
su postgres -c `psql -U <database-name>`
```

- stop the connection and add a prestart script to the app

```txt
 "prestart": "su postgres -c 'pg_ctl start -D /<volume-path>/var/lib/postgresql/data' && yarn migrate up",
```

- create the secrets with new credentials of the setup with `flyctl secret create`

- store the secrets on a .env.production

NOTE: database credentials for migrate up are stored at buildtime

deploy again and thest migrations are being applied

add the secrets to gitgub workflow and update the workflow as needed

---- Alternative but Not viable alternative for postgres since use the second slot app

3. postgres setup
   - create a postgres app using `flyctl postgres create`
   - atach one app to pstgres app https://fly.io/docs/reference/postgres/#attaching-an-app-to-a-postgres-app
     `flyctl postgres attach --app test-deploy-fly postgres-test-database`

401,31 100
400,37
