import Link from 'next/link';
import styles from './hemeroOptions.module.css'
import { Container } from "../container/container"
import { HiMiniClipboardDocumentList } from "react-icons/hi2"
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import { BsCollectionFill } from "react-icons/bs"
import { GrCatalog } from "react-icons/gr"
import { IoBook } from "react-icons/io5"
import { GoDatabase } from "react-icons/go"
import { HiLink } from "react-icons/hi2"
import { IoMdContact } from "react-icons/io"
import { showHemeroOption } from './ModalOptions'
import { Rules } from './Rules'
import { Services } from './Services'
import { Collections } from './Collections'
import { Catalogue } from './Catalogue'
import { Magazines } from './Magazines'
import { DataBases } from './DataBases'
import { InterestedLinks } from './InterestedLinks'
import { Contact } from './Contact';

export const HemeroOptions = ()=>{
    return (
        <Container>
                <div className={`flexContainer ${styles.hemeroOptionsGrid}`}>
                    <button
                        className={styles.hemeroOption}
                        href='/'
                        onClick={()=>showHemeroOption({
                            html: <Rules/>,
                            className: 'hemeroList'
                        })}
                    >
                        <HiMiniClipboardDocumentList/>
                        <span>Reglamento</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Services/>,
                            className: 'hemeroList'
                        })}
                    >
                        <MdOutlineMiscellaneousServices/>
                        <span>Servicios</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Collections/>,
                            className: 'hemeroList'
                        })}
                    >
                        <BsCollectionFill/>
                        <span>Colecciones</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Catalogue/>,
                            className: 'hemeroList'
                        })}
                    >
                        <GrCatalog/>
                        <span>Catálogo</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Magazines/>,
                            className: 'hemeroList'
                        })}
                    >
                        <IoBook/>
                        <span>Revistas en línea</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <DataBases/>,
                            className: 'hemeroList'
                        })}
                    >
                        <GoDatabase/>
                        <span>Bases de datos</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <InterestedLinks/>,
                            className: 'hemeroList'
                        })}
                    >
                        <HiLink/>
                        <span>Ligas de interés</span>
                    </button>
                    <button
                        className={styles.hemeroOption}
                        onClick={()=>showHemeroOption({
                            html: <Contact/>,
                            className: 'hemeroList'
                        })}
                    >
                        <IoMdContact/>
                        <span>Contacto</span>
                    </button>
                </div>
                    <div className={styles.fileLink}>
                        <Link
                            href="/organizacion-de-archivos"
                            target='_blank'
                        >
                            Coordinación general de archivos
                        </Link>
                    </div>
        </Container>
    )
}