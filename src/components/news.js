import React, { useCallback, memo } from "react"
import PropTypes from "prop-types"

const createMarkup = html => {
  return { __html: html }
}

const News = ({ data }) => {
  const renderNews = useCallback(() => {
    if (data.allNews.edges.length > 0) {
      const news = data.allNews.edges.sort((a, b) => {
        if (new Date(a.node.startDate) < new Date(b.node.startDate)) return -1
        if (new Date(a.node.startDate) > new Date(b.node.startDate)) return 1
        return 0
      })
      const introNews = data.allSettings.edges.filter(
        news => news.node.key == "introtext"
      )

      return (
        <div className="subpage-content news">
          <div
            style={{ padding: "1rem 2rem" }}
            dangerouslySetInnerHTML={createMarkup(introNews[0].node.value.text)}
          ></div>
          {/* <div style={{ padding: "1rem 2rem" }}>
            <span style={{ textTransform: "uppercase" }}>
              Der Blog vom Schneckenhof!
            </span>{" "}
            Begleiten Sie uns durch das Jahr im Weinberg und Keller, auf
            Weinfestesten und Veranstaltungen. Auf unserem Blog informieren wir
            Sie immer wieder was es Neues im Schneckenhof gibt:
            <a
              href="http://www.weingut-schneckenhof.blogspot.com/"
              target="_blank"
            >
              www.weingut-schneckenhof.blogspot.com
            </a>
	    </div> */}
          <br />
          <br />
          <br />
          <br />
          {/* <h2 className='aktuelles'>Vorschau und Termine 2018:</h2> */}

          <div className="news-content">
            {news.map((newsdata, index) => {
              return (
                <div key={index} className="c-news">
                  <div className="item">
                    {newsdata.node.startDate !== newsdata.node.endDate ? (
                      <div className="date">
                        <span className="day">
                          {new Date(newsdata.node.startDate).getUTCMonth() ==
                          new Date(newsdata.node.endDate).getUTCMonth() ? (
                            new Date(newsdata.node.endDate).getUTCDate() -
                              new Date(newsdata.node.startDate).getUTCDate() ==
                            1 ? (
                              <span>
                                {new Date(newsdata.node.startDate).getUTCDate()}
                                <span className="separator"> + </span>
                                {new Date(newsdata.node.endDate).getUTCDate()}
                                <br />
                                <span className="month">
                                  {new Date(
                                    newsdata.node.endDate
                                  ).toLocaleString("de", { month: "short" })}
                                </span>
                              </span>
                            ) : (
                              <span>
                                {new Date(newsdata.node.startDate).getUTCDate()}
                                <span className="separator"> - </span>
                                {new Date(newsdata.node.endDate).getUTCDate()}
                                <br />
                                <span className="month">
                                  {new Date(
                                    newsdata.node.endDate
                                  ).toLocaleString("de", { month: "short" })}
                                </span>
                              </span>
                            )
                          ) : (
                            <span>
                              {new Date(newsdata.node.startDate).getUTCDate()}
                              <span className="separator">-</span>
                              {new Date(newsdata.node.endDate).getUTCDate()}
                              <br />
                              <span className="month">
                                {new Date(
                                  newsdata.node.startDate
                                ).toLocaleString("de", { month: "short" })}
                              </span>
                              <span className="separator">-</span>
                              <span className="month">
                                {new Date(newsdata.node.endDate).toLocaleString(
                                  "de",
                                  { month: "short" }
                                )}
                              </span>
                            </span>
                          )}
                        </span>
                      </div>
                    ) : (
                      <div className="date">
                        <span className="day">
                          {new Date(newsdata.node.startDate).getUTCDate()}
                        </span>
                        <br />
                        <span className="month">
                          {new Date(newsdata.node.startDate).toLocaleString(
                            "de",
                            { month: "short" }
                          )}
                        </span>
                      </div>
                    )}
                    <div className="description">
                      <h4>{newsdata.node.title.toUpperCase()}</h4>
                      <h6>{newsdata.node.shortDescription} </h6>
                      <br />
                      <br />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: newsdata.node.description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div className="news-content">
          <h5>Wir haben keine Nachrichten verfügbar.</h5>
        </div>
      )
    }
  })

  // console.log(this.props.news)
  return <>{renderNews()}</>
}

News.propTypes = {
  data: PropTypes.object,
}

export default memo(News)
