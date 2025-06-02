import styles from './hemeroOptions.module.css'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export const showHemeroOption = ({
    html,
    className
})=>{
    withReactContent(Swal).fire({
        html: html,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.hemeroList
        },width:800

    })
}