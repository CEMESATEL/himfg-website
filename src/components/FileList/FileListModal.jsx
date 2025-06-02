import styles from './filelist.module.css'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export const FileListModal = ({filelist, icon, title, children})=>{
    const openFileListModal = ()=> withReactContent(Swal).fire({
        html: 
        <>
            {
                !children && filelist?
                filelist.map((element, i)=>(
                    <>
                        <span>{element.title}</span>
                        <ul>
                        {
                            element.content.map((el)=>(
                                <li>
                                    <a href={el.link}>
                                        {el.title}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </>
                ))
                :
                children
            }
        </>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.fileList
        },width:800

    })
    return (
        <button
            className={styles.fileListOoption}
            onClick={openFileListModal}
        >
            <span>{icon}</span>
            <span>{title}</span>
        </button>
    )
}