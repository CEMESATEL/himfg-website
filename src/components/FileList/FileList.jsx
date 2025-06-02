import { FaBook } from "react-icons/fa"
import styles from './filelist.module.css'
import { SiBookstack } from "react-icons/si"
import { MdOutlineChair } from "react-icons/md"
import { FileListModal } from "./FileListModal"
import { FaMoneyBillWave } from "react-icons/fa"
import { BsFileEarmarkRuledFill } from "react-icons/bs"

import { infoContable, infoPresupuestaria, infoProgramatica, infoNormas, infoInventario } from "./const"


export const FileList = ()=>{
    return (
        <div className={`flexContainer ${styles.fileListGrid}`}>
            <FileListModal
                icon={<FaBook />}
                title='Información Contable'
                filelist={infoContable}
            />
            <FileListModal
                icon={<FaMoneyBillWave />}
                title='Información Presupuestaria'
                filelist={infoPresupuestaria}
            />
            <FileListModal
                icon={<SiBookstack />}
                title='Información Programática'
                filelist={infoProgramatica}
            />
            <FileListModal
                icon={<BsFileEarmarkRuledFill />}
                title='Normas del título V de la LGCG'
                filelist={infoNormas}
            />
            <FileListModal
                icon={<MdOutlineChair />}
                title='Inventario de bienes e inmuebles'
                filelist={infoInventario}
            />
        </div>
    )
}