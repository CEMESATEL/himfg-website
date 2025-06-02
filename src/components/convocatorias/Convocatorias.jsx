import { FaBook } from "react-icons/fa"
import styles from '../FileList/filelist.module.css'
import { FileListModal } from "../FileList/FileListModal"

export const Convocatorias = ()=>{
    return (
        <div className={`flexContainer ${styles.fileListGrid}`}>
            <FileListModal
                icon={<FaBook />}
                title='Convocatorias'
            >
                <span>Convocatorias</span>
                <br/>
                <ul>
                    <li>
                        <a
                            href='https://himfg.edu.mx/archivos/graficos/investigacion/convocatoria-financiamiento.pdf'
                            target='_blank'
                        >
                            Convocatoria para financiar proyectos de investigación para la salud con fondos federales 2026
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://himfg.edu.mx/archivos/graficos/investigacion/Convocatoria_para_Financiar_Proyectos_de_Investigación_para_la_Salud_con_Fondos_Federales_2025.pdf'
                            target='_blank'
                        >
                            Resultados de la Convocatoria para financiar proyectos de investigación para la salud con fondos federales 2025
                        </a>
                    </li>
                </ul>
            </FileListModal>
        </div>
    )
}