// import ReactPlayer from 'react-player'

// const Contact = () => {
//     return (
//         <div className="container">
//             <h1>Contact Page</h1>


//             {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
//             <div className='player-wrapper'>
//                 <iframe
//                     src='https://www.youtube.com/watch?v=LXb3EKWsInQ&t=1s'
//                     frameborder='0'
//                     allow='autoplay; encrypted-media'
//                     allowfullscreen
//                     title='video'
//                 />
//             </div>
//         </div>

//     );
// };

// export default Contact;

import React from "react";
import PropTypes from "prop-types";
import './style.css'

const YoutubeEmbed = ({ embedId }) => (
    <div className="container mt-5">
        {/* <div className="test"> hi how are g</div> */}
        <div className="video-responsive">
            {/* <iframe
                width="853"
                height="480"
                // src={`https://www.youtube.com/embed/${embedId}`}
                src={`https://www.youtube-nocookie.com/embed/HChPH3DnxM8?controls=0&rel=0&modestbranding=1&origin=https://key.bio`}
               
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /> */}

<div class="iframe-wrapper">
  <iframe  width="500" height="280"  src="https://www.youtube.com/embed/pX8s7WF3sC8?autoplay=0&mute=0&controls=1&modestbranding=1&showinfo=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</div>     
           
        </div>
    </div>

);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
