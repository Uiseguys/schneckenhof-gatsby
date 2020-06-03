const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    const { createNode } = actions
    const data = await axios({
      method: "get",
      url: "https://schneckenhof-lb4-live.herokuapp.com/news",
      //url: "http://www.black-pixel.de/schneckenhof/data/news.json",
    }).then(res => {
      return res.data
    })
    await data.forEach(item => {
      item.showOnHome = item.showOnHome ? item.showOnHome : false
      item.homePageDescription = item.homePageDescription
        ? item.homePageDescription
        : item.shortDescription
      const nodeMeta = {
        id: createNodeId(`news-${item.id}`),
        parent: null,
        children: [],
        internal: {
          type: "News",
          mediaType: `application/json`,
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      }
      const node = Object.assign({}, item, nodeMeta)
      createNode(node)
      return
    })
  } catch (err) {
    console.log(err)
  }
}
