import React from 'react';
import axios from 'axios';
import MovieItem from './components/album/MovieItem';
import Filter from './components/Filter';
import './App.css';

function App() {
  let [responseData, setResponseData] = React.useState('');
  let [filter_by, setFilter_by] = React.useState('');
  let [count, setCount] = React.useState('');

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
        "limit": "15"
      }
    })
      .then((response) => {
        setResponseData(response.data.docs)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const filterHandler = (value) => {
    console.log(value)
    setFilter_by(value)

  };

  const countHandler = (value) => {
    console.log(value)
    //responseData.filter(movie_item => movie_item.rating.kp)
    setCount(value);
  };

  const saveFilterHandler = () => {

    if (count && filter_by) {
      const res = responseData.filter(movie_item => movie_item.rating.kp >= count)

      setResponseData(res);
      console.log(res)
    }


  };

  return (
    <div className="App">
      <Filter orderBy={filterHandler} count={countHandler} saveFilter={saveFilterHandler} />
      <div className="movie-list">
        {
          responseData && responseData.map((movie) =>
            <MovieItem
              key={movie.id}
              movie_name={movie.name}
              movie_desc={movie.shortDescription}
              movie_img_url={movie.poster.url}
              movie_rating={movie.rating.kp}
            // movie_video_url={movie.watchability && movie.watchability.items[0].url}
            />
          )
        }
      </div>

    </div>
  );
}

export default App;