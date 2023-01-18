import React ,{useEffect, useState}from 'react'

const Recommended= (props) => {
  const [articles, setArticles] = useState([])
  const updateNews = async ()=> {
      // props.setProgress(10);
      const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d301853975b425f9ddca8d585f6051c&page=1&pageSize=4"; 
      // setLoading(true)
      let data = await fetch(url);
      // props.setProgress(30);
      let parsedData = await data.json()
      // props.setProgress(70);
      setArticles(parsedData.articles)
      // setTotalResults(parsedData.totalResults)
      // setLoading(false)
      // props.setProgress(100);
  }
  useEffect(() => {
 
      updateNews(); 
      
  }, [])

  return (
    <div className='row'>
    <h4 className="font-bold">Recommended Topics</h4>
      <div className="row ">
      {
      articles.map((element) => {
       return <div className="grid grid-cols-3 gap-1 justify-evenly "  key={element.url}>
        <div>
          <h5 className="col small">
            {
            element.title?element.title.slice(0,40):""
            }
            </h5></div>
               <img src={element.urlToImage} alt="XX"  className="object-cover col " width='100px' height='50px' />
            <div className="col">
            {/* <div className="space-y-2"> */}
                {/* <div className=""> */}
                <div> 
                  <p className="text-">{element.publishedAt}</p>
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>

        </div>
          })}
          
      </div>
      <hr className="my-4 h-px bg-black border-0 dark:bg-black"/>
    </div>
  )
}
export default Recommended;