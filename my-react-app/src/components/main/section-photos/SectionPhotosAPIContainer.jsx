import { useState, useEffect } from 'react';
import axios from 'axios';
import photoURL from '../../../assets/images/photo.jpeg';
import SectionPhotos from './SectionPhotos';

export default function SectionPhotosAPIContainer({ photos, getPhotos }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${num}/todos`)
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        data = data.map((item) => {
          item.photoURL = photoURL;

          return item;
        });

        getPhotos(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionPhotos
      photos={photos}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading}
    />
  );
}
