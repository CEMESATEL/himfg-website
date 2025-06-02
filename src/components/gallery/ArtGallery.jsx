import { useState } from "react"
import { images } from "./consts"
import styles from './artgallery.module.css'
import { Gallery } from "react-grid-gallery"
import Swal from "sweetalert2"

export const ArtGallery = ()=>{
    const [currentImage, setCurrentImage] = useState(0);
    const openLightbox = (index) => {
        const image = images[index];
        Swal.fire({
          title: image.caption,
          imageUrl: image.src,
          imageAlt: image.caption,
          showCloseButton:true,
          showClass: {
            popup: 'animate__animated animate__zoomIn',
          },
          grow:'fullscreen'
        });
      };
    return(
        <div className='flexContainer'>
            <Gallery
                images={images} enableImageSelection={false}
                onClick={openLightbox}
            />
        </div>
    )
}