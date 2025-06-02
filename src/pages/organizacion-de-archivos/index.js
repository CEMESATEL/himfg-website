import styles from './archivos.module.css'
import { Container, Title } from "@/components"

export default function FilesOrganization() {
    const files = [
        {
            id: 1,
            title: 'Grupo Interdisciplinario',
            files: [
                {
                    file: 'Acta de Instalación del Grupo Interdisciplinario',
                    link: 'http://www.himfg.com.mx/descargas/documentos/planeacion/Acta_Instalacion_Grupo_Interdisciplinario.pdf'
                },
                {
                    file: 'Reglas internas de operación del Grupo Interdisciplinario del Hospital Infantil de México Federico Gómez',
                    link: 'http://www.himfg.com.mx/descargas/documentos/planeacion/Reglas_internas_operacion_Grupo_Interdisciplinario_HIMFG.pdf'
                }
            ]
        },
        {
            id: 2,
            title: 'Cuadro general de clasificación archivística',
            files: [
                {
                    file: 'Cuadro General de Clasificación Archivística 2021',
                    link: 'http://www.himfg.com.mx/descargas/documentos/planeacion/CUADRO_GENERAL_CLASIFICACION_ARCHIVISTICA_2021.pdf'
                },
                {
                    file: 'Cuadro General de Clasificación Archivística 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/planeacion/CUADROGENERALDECLASIFICACIONARCHISITICA2014.pdf'
                }
            ]
        },
        {
            id: 3,
            title: 'Catálogo de disposición documental',
            files: [
                {
                    file: ' Dictamen de Validación 2022',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/DictamenValidacion2022.pdf'
                },
                {
                    file: 'Dictamen de Validación 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/DictamenValidacion2018(23).pdf'
                },
                {
                    file: 'Catálogo de Disposición Documental 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CATALOGODEDISPOSICIONDOCUMENTAL2018.pdf'
                },
                {
                    file: 'Catálogo de Disposición Documental 2018 - editable',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CATALOGODEDISPOSICIONDOCUMENTAL2018-2.pdf'
                },
                {
                    file: 'Catálogo de Disposición Documental 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CATALOGODEDISPOSICIONDOCUMENTAL2016.pdf'
                },
                {
                    file: 'Dictamen de Validación 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/DictamenValidacion2016.pdf'
                },
                {
                    file: 'Catálogo de Disposición Documental 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CATALOGODEDISPOSICIONDOCUMENTAL2015.pdf'
                },
                {
                    file: 'Catálogo de Disposición Documental 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CatalogoDispDocumentalFirmado.pdf'
                },
            ]
        },
        {
            id: 4,
            title: 'Inventario documental',
            files: [
                {
                    file: 'Inventario Documental primer trimestre 2025',
                    link: 'https://himfg.edu.mx/hemerobiblioteca/inventario-documental/Inventario_documental_primer_trimestre-2025-1.pdf'
                },
                {
                    file: 'Inventario Documental primer trimestre 2024',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Inventario_Documental_Primer_Trimestre_2024.pdf'
                },
                {
                    file: 'Inventario Documental segundo trimestre 2024',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Inventario_Documental_Segundo_Trimestre_2024.pdf'
                },
                {
                    file: 'Inventario Documental tercer trimestre 2024',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Inventario_Documental_Tercer_Trimestre_2024.pdf'
                },
                {
                    file: 'Inventario Documental cuarto trimestre 2024',
                    link: 'https://himfg.edu.mx/hemerobiblioteca/inventario-documental/Inventario-Documental-cuarto-trimestre-2024.pdf'
                },
                {
                    file: 'Inventario documental 2023',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIO_DOCUMENTAL_2023.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2022',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIO_GENERAL_EXPEDIENTE_2022.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2021',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIO_GENERAL_EXPEDIENTE_2021.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2020',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIO_GENERAL_POR_EXPEDIENTE-2020.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2019',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Inventario_General_Expediente_2019.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2018',
                    link: 'http://www.himfg.com.mx/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIO_2018.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2017',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIO_GENERAL_POR_EXPEDIENTE_2017.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIOGENERALPOREXPEDIENTE2016.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIOGENERALPOREXPEDIENTE2015.pdf'
                },
                {
                    file: 'Inventario General por Expediente 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INVENTARIOGENERALPOREXPEDIENTE2014.pdf'
                },
            ]
        },
        {
            id: 5,
            title: 'Bajas documentales',
            files: [
                {
                    file: 'Acta de Baja Documental No. 0055/18',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/Acta_de_Baja_Documental_No_0055-18.pdf'
                },
                {
                    file: 'Acta de Baja Documental Num. 0126',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/baja_documental_0126.pdf'
                },
                {
                    file: 'Acta de Baja Documental Num. 0126',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/baja_documental_0126.pdf'
                },
                {
                    file: 'Acta de Baja Documental Num. 0390',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/baja_documental_390.pdf'
                },
                {
                    file: 'Acta de Baja Documental Num. 430',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/baja_documental_430.pdf'
                },
                {
                    file: 'Acta de Baja Documental Num. 259',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/baja_documental_259.pdf'
                },
                {
                    file: 'Acta de Baja Documental Folio 3173',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/baja_documental_3173.pdf'
                },
                {
                    file: 'Calendario de recepción de solicitudes de baja documental del Archivo General de la Nación ',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/CALENDARIO_DE_RECEPCION_BAJAS_AGN.pdf'
                }
            ]
        },
        {
            id: 6,
            title: 'Guía de archivo documental',
            files: [
                {
                    file: 'Guía de archivo documental 2024',
                    link: 'https://himfg.edu.mx/hemerobiblioteca/guia-de-archivo-documental/Guia-de-archivo-documental-2024.pdf'
                },
                {
                    file: 'Guía de archivo documental 2023',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_DE_ARCHIVO_DOCUMENTAL_2023.pdf'
                },
                {
                    file: 'Guía de archivo documental 2022',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_ARCHIVO_DOCUMENTAL_2022.pdf'
                },
                {
                    file: 'Guía de archivo documental 2021',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_ARCHIVO_DOCUMENTAL_2021.pdf'
                },
                {
                    file: 'Guía de archivo documental 2020',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_DE_ARCHIVO_DOCUMENTAL_2020.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2019',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Guia_Simple_de_Archivos_2019.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA%20SIMPLE%20DE%20ARCHIVOS%202018.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2017',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_SIMPLE_DE_ARCHIVOS_2017.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_SIMPLE_DE_ARCHIVOS_2016.pdf'
                },
                {
                    file: 'Relación de Archivos 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/Relacion_de_archivos2015.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GuiaSimpleArchivos2014.pdf'
                },
            ]
        },
        {
            id: 7,
            title: 'Sistema institucional de archivos',
            files: [
                {
                    file: 'Responsables del Sistema Institucional de Archivos 2025',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/responsables-del-sistema-institucional-de-archivos-2025.docx'
                },
                {
                    file: 'Responsables del Sistema Institucional de Archivos 2024',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Sistema_Institucional_Archivos_2024.pdf'
                },
                {
                    file: 'Responsables del Sistema Institucional de Archivos 2023',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Sistema_Institucional_Archivos_2023.pdf'
                },
                {
                    file: 'Responsables del Sistema Institucional de Archivos 2022',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/RESPONSABLES_SISTEMA_INSTITUCIONAL_ARCHIVOS_2022.pdf'
                },
                {
                    file: 'Relación de Archivos 2019',
                    link: 'descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/RESPONSABLES_DEL_SISTEMA_INSTITUCIONAL_DE_ARCHIVOS.pdf'
                },
                {
                    file: 'Relación de Archivos 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Relacion_de_archivos2016.pdf'
                },
                {
                    file: 'Relación de Archivos 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/Relacion_de_archivos2015.pdf'
                },
                {
                    file: 'Relación de Archivos 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/RELACIONDEARCHIVOS2014.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GUIA_SIMPLE_DE_ARCHIVOS_2016.pdf'
                },
                {
                    file: 'Relación de Archivos 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/Relacion_de_archivos2015.pdf'
                },
                {
                    file: 'Guía Simple de Archivos 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/GuiaSimpleArchivos2014.pdf'
                }
            ]
        },
        {
            id: 8,
            title: 'Plan anual de desarrollo archivístico',
            files: [
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2025',
                    link: 'https://himfg.edu.mx/hemerobiblioteca/PADA/PADA-2025.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2024',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PADA_2024.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2023',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PADA_2023.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2022',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PADA_2022.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2021',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PADA_2021.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2020',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PLAN_ANUALDE_DESARROLLO_ARCIVISTICO_(PADA)_2020.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2019',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PLAN_ANUAL_DE_DESARROLLO_ARCHIVISTICO_(PADA)_2019.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PLAN_ANUAL_DE_DESARROLLO_ARCHIVISTICO_2018_(PADA).pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2017',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PLANANUALDEDESARROLLOARCHIVISTICO2017.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PLANANUALDEDESARROLLOARCHIVISTICO2016.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PLANANUALDEDESARROLLOARCHIVISTICO2015.pdf'
                },
                {
                    file: 'Plan Anual de Desarrollo Archivístico 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/PlanAnualdeDesarrolloArchivistico2014.pdf'
                },
                {
                    file: 'CRITERIOS ESPECÍFICOS DEL SISTEMA INSTITUCIONAL DE ARCHIVOS (SIAR) DEL HIMFG 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Criterios_Especificos_del_Sistema_Institucional_de_Archivos_(SIAr)_del_HIMFG.pdf'
                }
            ]
        },
        {
            id: 9,
            title: 'Calendario de cumplimiento e informe de actividades archivísticas',
            files: [
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-diciembre 2024',
                    link: 'https://himfg.edu.mx/hemerobiblioteca/informe-de-cumplimiento/INFORME-DE-CUMPLIMIENTO-DEL-PLAN-ANUAL-DE-DESARROLLO-ARCHIVISTICO-2024.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-diciembre 2023',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_CUMPLIMIENTO_PADA_2023.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-diciembre 2022',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_CUMPLIMIENTO_PADA_2022.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-diciembre 2021',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_CUMPLIMIENTO_PADA_2021.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-diciembre 2020',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_CUMPLIMIENTO_PADA_2020.pdf',
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico julio-diciembre 2019',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_DE_CUMPLIMIENTO_DEL_PADA_JULIO-DICIEMBRE_2019.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-junio 2019',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_DE_CUMPLIMIENTO_DEL_PADA_ENERO-JUNIO_2019.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico julio-diciembre 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CALENDARIO_E_INFORME_DE_CUMPLIMIENTO_DEL_PLAN_ANUAL_DE_DESARROOLLO_ARCHIVISTICO_JUL-DIC_2018.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archivistico enero-junio 2018',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CALENDARIO_E_INFORME_DE_CUMPLIMIENTO_DEL_PLAN_ANUAL_DE_DESARROLLO_ARCHIVISTICO_ENE-JUN_2018.pdf'
                },
                {
                    file: 'Calendario Cumplimiento e Informe del Plan Anual de Desarrollo Archivístico Segundo Semestre 2017',
                    ink: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CALENDARIO_DE_CUMPLIMIENTO_E_INFORME_DE_ACTIVIDADES_DEL_PLAN_ANUAL_DE_DESARROLLO_ARCHIVISTICO_JULIO-DICIEMBRE_DE_2017.pdf'
                },
                {
                    file: 'Calendario e Informe de avance de acciones realizadas en el cumplimiento del Plan Anual de Desarrollo Archívistico enero-junio 2017',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CALENDARIO_E_INFORME_DE_AVANCE_DE_LAS_ACCIONES_REALIZADAS_EN_EL_CUMPLIMIENTO_DEL_PLAN_ANUAL_DE_DESARROLLO_ARCHIVISTICO_ENERO-JUNIO_DE_2017.pdf'
                },
                {
                    file: 'Calendario e Informe de Cumplimiento del Plan Anual de Desarrollo Archívistico segundo semestre 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CALENDARIO_E_INFORME_DE_CUMPLIMIENTO_DEL_PLAN_ANUAL_DE_DESARROLLO_ARCHIVASTICO_2016.pdf'
                },
                {
                    file: 'Informe de Avances del Plan Anual de Desarrollo Archivístico Correspondiente al Primer Semestre 2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_DE_AVANCE_DE_PADA_HIMFG_2016.pdf'
                },
                {
                    file: 'Informe de Cumplimiento del Plan Anual de Desarrollo Archivístico 2015',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/InformeAnualdeActividadesArchivisiticas2015.pdf'
                },
                {
                    file: 'Calendario de Cumplimiento e Informe de Avances de Cumplimiento 2015 en Materia de Archivos',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/CalendarioCumplimientoAvances2015.pdf'
                },
                {
                    file: 'Informe de Cumplimiento del Plan Anual de Desarrollo Archivístico 2014',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/INFORME_ANUAL_DE_ACTIVIDADES_ARCHIVISTICA_2014.pdf'
                }
            ]
        },
        {
            id: 11,
            title: 'Normatividad en materia de archivos',
            files: [
                {
                    file: '1. Guía para la Elaboración de Versiones Públicas',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/Guia_Versiones_Publicas.pdf'
                },
                {
                    file: '2. Instructivo para el tramité de baja documental de archivos del Gobierno Federal',
                    link: 'http://www.himfg.com.mx/descargas/documentos/orarchivos/InstructivoBajasDocumentales_24082012.pdf'
                },
                {
                    file: '3. Instructivo Guía Simple de Archivos',
                    link: 'http://www.himfg.com.mx/descargas/documentos/transparencia/transpinfo/instructivo_guia__simple_archivos.pdf'
                },
                {
                    file: '4. Ley Federal de Archivos',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/LeyFederalArchivos.pdf'
                },
                {
                    file: '5. Ley Federal de Transparencia y Acceso a la Información Pública Gubernamental',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/LeyFederalTransparenciaAccesoInformacionPublicaGuber.pdf'
                },
                {
                    file: '6. Ley Federal de Protección de Datos Personales en Posesión de los Particulares',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/LFPDPPP2010.pdf'
                },
                {
                    file: '7. Ley General de Transparencia y Acceso a la Información Pública',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/LGTAIP2015-05.pdf'
                },
                {
                    file: '8. Lineamientos Generales para la Organización y Conservación de los Archivos de las Dependencias y Entidades de la Administración Pública Federal',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/LineaGeneOrgConserArchDependEntidadesAdministracionPublicaFederal.pdf'
                },
                {
                    file: '9. Manual Administrativo de Aplicación General en Materia de Recursos Materiales y Servicios Generales en materia de Archivos',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/ManuaSFParchivos1.pdf'
                },
                {
                    file: '10. Reglamento de la ley Federal de Archivos',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/Reg_LFA_2015.pdf'
                },
                {
                    file: '11. Lineamientos técnicos generales para la publicación, homologación y estandarización de la información de las obligaciones establecidas en el título quinto y en la fracción IV del artículo 31 de la Ley General de Transparencia y Acceso a la Información Pública',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/Lineamientos_obligaciones_transparencia.pdf'
                },
                {
                    file: '12. DECRETO por el que se abroga la LEY Federal de Transparencia y Acceso a la Información Pública Gubernamental y se expide la Ley Federal de Transparencia y Acceso a la Información Pública. DOF: 09/05/2016',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/LeyFederalArchivos2016.pdf'
                },
                {
                    file: '13. Ley General de Archivos Comentada 2024',
                    link: 'http://www.himfg.com.mx/descargas/documentos/ensenanza/hemerobiblioteca/OrganiArchivos/hemero/LeyFederalArchivos2024.pdf'
                }
            ]
        },
        {
            id: 12,
            title: 'Bibliografía en materia de archivos',
            files: [
                {
                    file: 'El Documento Electrónico en la Sociedad de la Información',
                    link: 'http://www.himfg.com.mx/descargas/documentos/planeacion/Documentoelectronico.pdf'
                },
            ]
        }
    ]
    return (
        <Container>
            <Title>Organización de archivos</Title>
            <div className={`flexContainer boxShadow ${styles.fileWrapper}`}>
                <ul className={styles.fileList}>
                    <li className={styles.fileTitle}>Formatos</li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/formato-portada-de-expediente-2025.xls`} download target='_blank'>
                            Portada de expediente 2025
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/formato-relacion-simple-2025.doc`} download target='_blank'>
                            Formato de relación simple de documentación de comprobación administrativa inmediata 2025
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/formato-guia-de-archivo-documental-2025.doc`} download target='_blank'>
                            Formato Guia de archivo documental 2025
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/formato-inventario-documental-2025.doc`} download target='_blank'>
                            Formato e Instructivo de Inventario documental trimestral 2025
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/formato-inventario.doc`} download target='_blank'>
                            Formato de inventario documental trimestral 2024
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Portada_de_expediente_2024.xls`} download target='_blank'>
                            Portada de expediente 2024
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_e_instructivo_del_Inventario_General_por_Expediente_2023.doc`} download target='_blank'>
                            Formato e instructivo del Inventario General por Expediente 2023
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_de_Guia_de_Archivo_Documental_2023.doc`} download target='_blank'>
                            Formato de Guía de archivo documental 2023
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_de_relacion_simple_de_doc_comp_inmediata.doc`} download target='_blank'>
                            Formato de relación simple de documentación de comprobación administrativa inmediata 2023
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_portada_expediente_2023.doc`} download target='_blank'>
                            Formato de Portada para Expediente 2023
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_instructivo_Inventario_General_Expediente_2022.doc`} download target='_blank'>
                            Formato Inventario General de Archivos por Expediente 2022
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_Guia_Archivo_Documental_2022.doc`} download target='_blank'>
                            Formato Guía Simple de Archivos 2022
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/rsdcai.docx`} download target='_blank'>
                            Formato Relación Simple De Documentación De Comprobación Administrativa
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.himfg.edu.mx/hemerobiblioteca/Formato_DCAI.xlsx`} download target='_blank'>
                            Formato DCAI
                        </a>
                    </li>
                </ul>
                {
                    files.map((file) => (
                        <ul key={file.id} className={styles.fileList}>
                            <li className={styles.fileTitle}>{file.title}</li>
                            {
                                file.files.map((file) => (
                                    <li>
                                        <a href={`${file.link}`} download target='_blank'>
                                            {file.file}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        </Container>
    )
}