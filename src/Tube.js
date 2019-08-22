






import Axios from 'axios';

const API='AIzaSyCYjqVR0riyIvIM-iOyVDZ_3gmyRUgSyM8';
export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        max:10,
        key:API
    }
})







// import React, { Component } from 'react';

// const result =10;
// class Youtube extends Component {
//     render() { 
//         return ( 
//             <div>
//                 <button>Get Videos</button>
//             <div className="youtube">
                
//                <iframe width="560" height="315" 
//                src="https://www.youtube.com/embed/IFncZA5k_1k" 
//                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allow="fullscreen"></iframe> 
//             </div>
//             </div>
//          );
//     }
// }
 
// export default Youtube;