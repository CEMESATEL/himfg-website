import { Title } from '@/components'
import styles from '../galeria/index.module.css'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Galeria() {
    const images = [
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/1.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-nino-2025/1.jpg",
        },
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/2.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-nino-2025/2.jpg",
        },
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/3.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-nino-2025/3.jpg",
        },
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/4.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-2025/4.jpg",
        },
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/5.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-nino-2025/5.jpg",
        },
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/6.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-nino-2025/6.jpg",
        },
        {
            original: "https://himfg.edu.mx/dia-del-nino-2025/7.jpg",
            thumbnail: "https://himfg.edu.mx/dia-del-nino-2025/7.jpg",
        },
    ]
    return (
        <section className={styles.galleryContainer}>
            <Title>Chiquitúnel de la CIENCIA</Title>
            <ImageGallery
                items={images}
                showThumbnails
                loading='lazy'
            />
        </section>
    )
}