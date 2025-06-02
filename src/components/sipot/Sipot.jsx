import  styles from './sipot.module.css'

export const Sipot= ()=>{
    return (
        <div className={`flexContainer ${styles.sipotContainer}`}>
            <figure>
                    <a
                        href='https://www.plataformadetransparencia.org.mx/'
                        target='_blank'
                    >
                        <img src='https://himfg.edu.mx/archivos/graficos/SIPOT/bsipot.png' />
                    </a>
            </figure>
            <figure>
                <a
                    href='https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/?idSujetoObigadoParametro=154&idEntidadParametro=33&idSectorParametro=21'
                    target='_blank'
                >
                    <img src='https://himfg.edu.mx/archivos/graficos/SIPOT/sipot2.png' />
                </a>
            </figure>
        </div>
    )
}