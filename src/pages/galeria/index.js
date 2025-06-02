import { Title } from '@/components'
import styles from './index.module.css'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Galeria() {
    const images = [
        {
            original: "https://himfg.edu.mx/galeria/1.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/1.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/2.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/2.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/3.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/3.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/4.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/4.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/5.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/5.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/6.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/6.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/7.jpg",
            thumbnail: "https://himfg.edu.mx/galeria/7.jpg",
        },
        {
            original: "https://himfg.edu.mx/galeria/10.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/10.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/11.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/11.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/12.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/12.JPG",
        },
        {
            original: "https://himfg.edu.mx/galeria/13.JPG",
            thumbnail: "https://himfg.edu.mx/galeria/13.JPG",
        },
    ]
    return (
        <section className={styles.galleryContainer}>
            <Title>Open house de la Dirección de Enseñanza</Title>
            <ImageGallery
                items={images}
                showThumbnails
                loading='lazy'
            />
        </section>
    )
}