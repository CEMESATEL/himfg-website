import { FaBook } from "react-icons/fa"
import styles from '../FileList/filelist.module.css'
import { FileListModal } from "../FileList/FileListModal"

export const Lititations = ()=>{
    return (
        <div className={`flexContainer ${styles.fileListGrid}`}>
            <FileListModal
                icon={<FaBook />}
                title='Licitaciones'
            >
                <span>Licitaciones</span>
                <br/>
                <ul>
                    {
                        <li>
                            <a
                                href='https://himfg.edu.mx/descargas/documentos/licitaciones/bases/bases-imprenta.pdf'
                                target='_blank'
                            >
                                BASES DE LA INVITACIÓN A CUANDO MENOS TRES PERSONAS ELECTRONICA NACIONAL - MATERIALES Y ÚTILES DE IMPRESIÓN Y REPRODUCCIÓN PARA EL EJERCICIO 2025
                            </a>
                        </li>
                    }
                </ul>
            </FileListModal>
            <FileListModal
                icon={<FaBook />}
                title='Informe de Gestión Gubernamental del HIMFG'
            >
                <span>Informe de Gestión Gubernamental del HIMFG</span>
                <br/>
                <ul>
                    <li>
                        <a
                            href='https://himfg.edu.mx/administracion/LINEAMIENTOS_GENERALES_ADMINISTRACION_PUBLICA_FEDERAL.pdf'
                            target='_blank'
                        >
                            Consultar Informe
                        </a>
                    </li>
                </ul>
            </FileListModal>
            <FileListModal
                icon={<FaBook />}
                title='Programas anuales de adquisiciones, arrendamientos y servicios'
            >
                <span>Programas anuales</span>
                <br/>
                <ul>
                    <li>
                        <a
                            href='https://docs.google.com/spreadsheets/d/1GSaEe1hNr3039U5VyAEnXT42e1N_c5qS/edit?usp=sharing&ouid=106634988259917360936&rtpof=true&sd=true'
                            target="_blank"
                        >
                            2025
                        </a>
                    </li>
                </ul>
            </FileListModal>
        </div>
    )
}