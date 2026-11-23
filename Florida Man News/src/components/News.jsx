import { useState, useRef, useEffect } from 'react'
import './News.css'

function News() {
  const today = new Date();
  const [date, setDate] = useState(`${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`);
  const [articles, setArticles] = useState(null);
  const inputError = useRef(null);
  const userInput = useRef(null);
  //console.log(date);

  function checkInput() {
    //console.log("check input");
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[01])$/;
    if(regex.test(userInput.current.value)) {
      //console.log("valid input");
      inputError.current.classList.add("hide");
      setDate(userInput.current.value);
      userInput.current.value = "";
    }
    else {
      //console.log("ivalid input");
      inputError.current.classList.remove("hide");
    }
  }

  useEffect(() => {
      async function fetchArticles() {
         const url = `https://juliayxhuang.github.io/florida-man-api/api/${date}.json`;
         const response = await fetch(url);
         if (response.ok) {
            const result = await response.json();
            setArticles(result);
         }
         else {
          setArticles([]);
         }
      }

      fetchArticles();
   }, [date]);


  return (
    <div className="newsBody">
      <input type="text" placeholder="Month/Date" id="input" onKeyDown={(e) => {if(e.key == "Enter") {checkInput()}}} ref={userInput}/>
      <label htmlFor="input"><button onClick={checkInput}>Search</button></label>
      <p className="error hide" ref={inputError}>Bad input, please follow format month (##) / day (##)</p>
      <p className="dayDisplay">Showing articles for {date} (click title to visit)</p>
      <div className="articles">
        <ul>
        {!articles ? <p>Loading...</p>
            :
            articles.length === 0 ?
            <p>No articles available</p>
            :
            articles.map((article, index) =>
              <li key={index}>
                <a href={article.url} target="_blank">{article.title} - {article.source} ({article.date.slice(0, 4)})</a>
              </li>
            )
        }
        </ul>
      </div>
    </div>
  )
}

export default News