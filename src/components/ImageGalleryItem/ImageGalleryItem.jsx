import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={styles.galleryItem}>
      <img className={styles.image} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
