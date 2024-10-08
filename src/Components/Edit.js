import Nav from "./Nav";
import links from "../video-links/links.json";

const Edit = () => (
  <div className="edit-unit">
    {links.edit.map((video, i) => {
      return (
        <div className="video-div" id={video.title} key={i} align="right">
          <h1>{video.title}</h1>
          <iframe
            className="video "
            id={video.title}
            title={video.title}
            src={video.url}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen="true"
          />
          <p className="video-info" align="right">
            {video.description}
          </p>
          <br />
          <br />
        </div>
      );
    })}
  </div>
);
export default Edit;
