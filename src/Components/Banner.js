// import {movies} from './getMovies'

// import React, { Component } from 'react'

// export default class Banner extends Component {
  
//   render() {
//     // console.log(movies);
//     // let movie=movies.results;
//     let movie=' ';
//     return (
//       <>
//         {
//           movie==''?
//           <div className='spinner-border text-primary' role='status'>
//                 <span className='visually-hidden'>Loading...</span></div> :
//           <div className="card banner-card" >
//           <img src={`https://image.tmdb.org/t/p/original$`} className="card-img-top banner-img" alt="..."/>
//           {/* <div className="card-body"> */}
//             <h1 className="card-title banner-title">Card title</h1>
//             <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             {/* <h5 className="card-title banner-title">{movie.original_title}</h5>
//             <p className="card-text banner-text">{movie.overview}</p> */}
//             {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//           {/* </div> */}
//         </div>
//         }
//       </>
//     )
//   }
// }


import {movies} from './getMovies';
import React, { Component } from 'react'

export default class Banner extends Component {
    
    render() {
        let movie = movies.results[0]
        // let movie=''
        return (
            <>
            {   movie == ''?
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
                {/* <div className="card-body"> */}
                    <h1 className="card-title banner-title">{movie.original_title}</h1>
                    <p class="card-text banner-text">{movie.overview}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
                </div>
            }
            </>
        )
    }
}