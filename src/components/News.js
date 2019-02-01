import React from 'react'

export default ({ news  }) => (
    <div className="news-content">
        {
         news && news.data.allNews.edges.map((newsdata, index)=>{
            return <div key={index} className='c-news'>
              <div className='item'>
               {
                 newsdata.node.startDate!==newsdata.node.endDate?(
                    <div className='date'>
                        <span className='day'>
                        {new Date(newsdata.node.startDate).getUTCDate()}
                        <span className='month'>{new Date(newsdata.node.startDate).toLocaleString('en-us', { month: 'long' })}</span>
                        <span className='separator'>-</span>
                        {new Date(newsdata.node.endDate).getUTCDate()}
                        <br/>
                        <span className='month'>{new Date(newsdata.node.endDate).toLocaleString('en-us', { month: 'long' })}</span>
                        </span>
                    </div>):
                    <div className='date'>
                        <span className='day'>
                            {new Date(newsdata.node.startDate).getUTCDate()}
                        </span>
                        <br />
                        <span className='month'>{new Date(newsdata.node.startDate).toLocaleString('en-us', { month: 'long' })}</span>
                     </div>
                }
                <div className='description'>
                    <h4>{newsdata.node.title.toUpperCase()}</h4>
                    <h6>{newsdata.node.shortDescription} </h6>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{__html: newsdata.node.description}}>
                    </div>
                </div>
               </div>
             </div>
            })  
        }
    </div>
  
)