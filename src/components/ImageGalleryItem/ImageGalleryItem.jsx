import { GalleryItem, SmallImage, Image } from './ImageGalleryItem.styled';
import { useState } from 'react';
import Modal from 'react-modal';

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

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL },
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <GalleryItem onClick={openModal}>
        <SmallImage src={webformatURL} alt="" />
      </GalleryItem>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Image src={largeImageURL} alt="" />
      </Modal>
    </>
  );
};
