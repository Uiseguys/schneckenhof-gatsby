import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SubpageHeader from "../components/subpageheader"

const Shop = () => {
  const iFrame = useRef(null)
  useEffect(() => {
    iFrame.current.style.height = `${iFrame.current.contentWindow.document.body.scrollHeight}px`
    console.log(iFrame.current.contentWindow.document.body.scrollHeight)
  }, [])
  return (
    <>
      <SEO title={"Shop"} />
      <Layout>
        <div className="content-container">
          <SubpageHeader />
          <iframe
            style={{ width: "100%", height: "80vh" }}
            frameborder="0"
            id="wboshopframe"
            src="https://nephele-s5.de/webshop/13.0/shop_core.php?user_id=X1oilwAOdeKJeYXf4OVkqA==&shop_id=X1oilwAOfu5bUG42C9AU7Q=="
            ref={iFrame}
          ></iframe>
        </div>
      </Layout>
    </>
  )
}

export default Shop
