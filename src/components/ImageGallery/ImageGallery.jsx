import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryItem, Image } from './ImageGallery.styled';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
  },
  content: {
    border: 'none',
    padding: '0',
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
  },
};

Modal.setAppElement('#root');

export const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Gallery>
      {images.map(image => (
        <GalleryItem key={image.id} onClick={openModal}>
          <ImageGalleryItem image={image} />
          <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <Image src={image.largeImageURL} alt={image.tags} />
          </Modal>
        </GalleryItem>
      ))}
    </Gallery>
  );
};
