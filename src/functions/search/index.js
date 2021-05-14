const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_TOKEN })

const searchForPage = async (pageTitle) => {
  const response = await notion.search({
    query: pageTitle,
  })
  return response
}

export default async (event) => {
  try {
    const result = await searchForPage(event.pathParameters.page_title)
    return result
  } catch (err) {
    return { error: err }
  }
}
