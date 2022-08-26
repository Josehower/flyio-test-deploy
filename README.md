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
3. postgres setup
   - create a postgres app using `flyctl postgres create`
   - atach one app to pstgres app https://fly.io/docs/reference/postgres/#attaching-an-app-to-a-postgres-app
     `flyctl postgres attach --app test-deploy-fly postgres-test-database`
