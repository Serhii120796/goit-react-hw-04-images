import { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './pixabay-api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

const per_page = 12;

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  const handleSubmit = value => {
    if (value === query) {
      return;
    }

    setPage(1);
    setImages([]);
    setQuery(value);
  };

  const handleLoadMore = () => setPage(page + 1);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);

        const { hits, totalHits } = await fetchImages(query, page, per_page);

        setImages(prevState => [...prevState, ...hits]);

        if (totalHits < page * per_page) {
          setLoadMore(false);
        } else {
          setLoadMore(true);
        }
      } catch (error) {
        setImages([]);
        setLoadMore(false);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [page, query]);

  return (
    <Layout>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {(loading && <Loader />) ||
        (loadMore && <Button handleClick={handleLoadMore} />)}
      {error && <Error />}
    </Layout>
  );
};
