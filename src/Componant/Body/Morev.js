import React ,{useState, useEffect}from 'react'

const Morev = () => {
    const [articles, setArticles] = useState([])
    const updateNews = async ()=> {
        // props.setProgress(10);
        const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d301853975b425f9ddca8d585f6051c&page=1&pageSize=1"; 
        
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
        // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])
  return (
    <>
    <div>
    <div className="w-2/3">
        <div className="flex flex-col">
            <div>
                
            <h2 className="font-bold">More V</h2>
            {articles.map((element) => {
                return <div key={element.url}>
                 
                    <img className="ml-15 object-cover" src={element.urlToImage} alt="XX" width='650px' height='350px' />
                    <div><h6 className="font-semibold ">{element.title}</h6></div>
                    <div> <p className="text-xs">{element.publishedAt}</p></div>
                    <div className='small'>{element.description}</div>
                </div>
            })}
            </div>
            <hr className="my-4 h-px bg-black border-0 dark:bg-black"/>
            <div>
                
                
                <hr className="my-4 h-px bg-black border-0 dark:bg-black"/>
            </div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Morev
