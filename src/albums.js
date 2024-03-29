import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./albums.css";

const Albums = () => {

  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const user = JSON.parse(localStorage.getItem('current'));

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
      );
      const data = await response.json();
      setAlbums(data);
    };
    fetchAlbums();
  }, []);

  const handleAlbumClick = async (albumId) => {
    setSelectedAlbum(albumId);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_page=${page}&_limit=10`
    );
    const data = await response.json();
    setPhotos(data);
    const liItem = document.getElementsByTagName("li");
    for (let i = 0; i < liItem.length; i++) {
      liItem[i].classList.remove("select");
    }
    const select_p = document.getElementById(albumId);
    select_p.classList.add("select");
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${selectedAlbum}/photos?_page=${nextPage}&_limit=10`
    );
    const data = await response.json();
    setPhotos([...photos, ...data]);
    setPage(nextPage);
  };

  return (
    <div className="albums">
        <div className="albums_list">
            <h1>Albums</h1>
            <ul>
                {albums.map((album) => (
                  <Link to={`${album.id-((user.id-1)*10)}/photos`}>
                    <li id={album.id} key={album.id} onClick={() => handleAlbumClick(album.id)}>
                      {album.title}
                    </li>
                  </Link>
                ))}
            </ul>
        </div>
      {selectedAlbum && (
        <div className="albums_photos">
          <h1>{albums.find((album) => album.id === selectedAlbum).title} Album</h1>
          <div className="albums_photos_list">
            {photos.map((photo) => (
              <div className="albums_photos_item" key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </div>
            ))}
          </div>
          <button className="load_More_button" onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Albums;
