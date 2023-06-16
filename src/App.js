import React from 'react';
import axios from 'axios';
import MovieItem from './components/album/MovieItem';
import './App.css';

function App() {
  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://api.kinopoisk.dev/v1.3/movie",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "X-API-KEY": "P7QQEVN-YJ046X7-H4CJN17-BKV6EYN"
      }, "params": {
        "page": "1",
        "limit": "5"
      }
    })
      .then((response) => {

        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


  console.log(responseData.docs)
  return (
    <div className="App">
      {
        responseData && responseData.docs.map((movie) =>
          <MovieItem
            key={movie.id}
            movie_name={movie.name}
            movie_desc={movie.shortDescription}
            movie_img_url={movie.poster.url}
            movie_video_url={movie.watchability.items[0].url}
          />
        )
      }

    </div>
  );
}

export default App;