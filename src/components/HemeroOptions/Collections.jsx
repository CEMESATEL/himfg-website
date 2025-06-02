import styles from './hemeroOptions.module.css'

export const Collections = ()=>{
    return (
        <div className={styles.hemeroList}>
            <span>Libros</span>
            <p>Comprende la bibliografía sobre temas específicos de las especialidades del Hospital. </p>
            <p>Se cuenta con aproximadamente 5,700 vols. de libros. </p>
            <span>Revistas</span>
            <p>Se integra con aproximadamente 538 títulos de revistas y boletines desde 1970 a la fecha. </p>
            <p>De estos se tiene la suscripción vigente en formato papel los siguientes títulos: </p>
            <span>Acervo de autores del HIMFG</span>
            <p>Consta de la producción académica, científica y humanística de nuestro Instituto. </p>
            <span>Fisioterapia </span>
            <p>La Hemerobiblioteca cuenta con una colección bibliográfica en como dato de la Facultad de Medicina, de la Universidad Nacional Autónoma de México, con la finalidad de apoyar a los estudiantes de la Licenciatura en Fisioterapia, cubriendo la bibliografía de los planes y programas de estudio. </p>
            <span>Obras de consulta </span>
            <p>Se integra por obras que por su arreglo y tratamiento, permiten la localización directa y rápida de información y datos específicos. Dichas obras son diccionarios, anuarios, enciclopedias, directorios, bibliografías, atlas, índices y abstracs, entre otros. </p>
            <span>Tesis</span>
            <p>Integrada con 3,804 en formato papel y 1,322 en cd, de trabajos de investigación médica que se presentan para obtener un título o grado académico, bien sea de licenciatura o de maestría. </p>
        </div>
    )
}