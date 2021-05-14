# Notion API

A Serverless backend for interacting with the Notion API

## Deployment

Run the following to deploy this project to AWS

```bash
  npm ci && ./node_modules/.bin/serverless deploy
```

## Environment Variables

To run this project, you will need to add the following environment variables to your AWS Lambda Functions

`NOTION_TOKEN`

`DATABASE_ID` or `PAGE_ID`

## License

[MIT](https://choosealicense.com/licenses/mit/)
