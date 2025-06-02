import { videos } from './consts'
import styles from './styles.module.css'
import { Container, Title } from "@/components"

export default function DanoCero(){
    return (
        <Container>
            <Title>Daño Cero</Title>
            <div className={`flexContainer ${styles.videosWrapper}`}>
                {
                    videos.map((video, i)=>(
                        <div>
                            <iframe
                            key={i}
                            width="100%"
                            height="350"
                            src={video.link}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen="allow"
                            />
                            <center>
                                <span>{video.title}</span>
                            </center>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}