import { SmallImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image: { webformatURL, tags } }) => (
  <SmallImage src={webformatURL} alt={tags} />
);
