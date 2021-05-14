const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const getPage = async () => {
  const response = await notion.pages.retrieve({
    page_id: process.env.PAGE_ID,
  })
  return response
}

export default async (event) => {
  try {
    const result = await getPage()
    return result
  } catch (err) {
    return { error: err }
  }
}
