const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const searchForPage = async (page_title) => {
  const response = await notion.search({
    query: page_title,
  })
  return response
}

export default async (event) => {
  try {
    const result = await searchForPage(event.pathParameters.pageTitle)
    return result
  } catch (err) {
    return { error: err }
  }
}
