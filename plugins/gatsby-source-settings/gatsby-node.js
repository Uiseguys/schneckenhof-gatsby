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
      // url: "https://schneckenhof-lb4-live.herokuapp.com/settings",
      url: "http://www.black-pixel.de/schneckenhof/data/settings.json",
    }).then(res => {
      return res.data
    })
    await data.forEach(item => {
      item.showOnHome = item.showOnHome ? item.showOnHome : false
      item.homePageDescription = item.homePageDescription
        ? item.homePageDescription
        : item.shortDescription
      const nodeMeta = {
        id: createNodeId(`settings-${item.id}`),
        parent: null,
        children: [],
        internal: {
          type: "Settings",
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
