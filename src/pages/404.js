import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SubpageHeader from "../components/subpageheader"

const NotFoundPage = () => (
  <>
    <SEO title={"Page Not Found"} />
    <Layout>
      <div className="content-container" id="unsubscribe-body">
        <SubpageHeader />
        <h2>NOT FOUND</h2>
        <div className="subpage-content">
          <div className="text">
            <p>
              <span>😔</span>
              You just hit a route that doesn&#39;t exist... the sadness.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
