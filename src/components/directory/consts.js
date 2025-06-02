import direccion_general from '../../assets/direccion-general.png'
import direccion_medica from '../../assets/direccion-medica.png'
import direccion_ensenanza from '../../assets/direccion-ensenanza.png'
import direccion_investigacion from '../../assets/direccion-investigacion.png'
import direccion_planeacion from '../../assets/direccion-planeacion.png'
import direccion_administracion from '../../assets/direccion-administracion.png'

export const doctors = [
    {
        image: direccion_general,
        name: 'Dr. Adrián Chávez López',
        description: 'Direccion General',
        link:'/general'
    },
    {
        image: direccion_medica,
        name: 'Dra. Mónica Villa Guillén',
        description: 'Dirección Médica',
        link:'/medica'
    },
    {
        image: direccion_ensenanza,
        name: 'Dr. Sarbelio Moreno Espinosa',
        description: 'Dirección de Enseñanza y Desarrollo Académico',
        link:'/ensenanza'
    },
    {
        image: direccion_investigacion,
        name: 'Dr. Juan Garduño Espinosa',
        description: 'Dirección de Investigación',
        link:'/investigacion'
    },
    {
        image: direccion_administracion,
        name: 'C.P. Cipriano Solís Badillo',
        description: 'Dirección de Administración',
        link:'/administracion'
    },
    {
        image: direccion_planeacion,
        name: 'Dra. Miriam Herrera Segura',
        description: 'Dirección de Planeación',
        link:'/planeacion'
    },
]