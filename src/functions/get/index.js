const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const readDB = async () => {
  const response = await notion.databases.retrieve({
    database_id: process.env.DATABASE_ID,
  })
  return response
}

export default async (event) => {
  try {
    const result = await readDB()
    return result
  } catch (err) {
    return { error: err }
  }
}
