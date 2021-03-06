import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AlbumPreview.scss';
const AlbumPreview = (props) => {
  const { link, albumTitle, albumArtist, albumCover, totalSongs } = props;
  return (
    <article>
      <Link to={link} className="album-library-preview">
        <img
          className="album-library-preview__album-image"
          src={albumCover}
          alt={albumCover}
        />
        <div className="album-library-preview__album-details">
          <span className="album-library-preview__album-details__album-title">
            {albumTitle}
          </span>
          <h2 className="album-library-preview__album-details__artist-name">
            {albumArtist}
          </h2>
          <h3 className="album-library-preview__album-details__total-songs">
            Total Songs: {totalSongs}
          </h3>
        </div>
      </Link>
    </article>
  );
};

AlbumPreview.propTypes = {
  link: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired,
  albumArtist: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
  totalSongs: PropTypes.number.isRequired,
};

export default AlbumPreview;
