import { SmallImage, Image } from './ImageGalleryItem.styled';
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

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SmallImage src={webformatURL} alt={tags} onClick={() => setShowModal(true)} />
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
      >
        <Image src={largeImageURL} alt={tags} />
      </Modal>
    </>
  );
};
