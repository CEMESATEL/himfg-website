/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized : true
  },
  exportPathMap(){
    return {
      '/': { page : '/'},
      '/cursos2025/[...id]': { page : '/cursos2025/[...id]'},
      '/ensenanza' : { page: '/ensenanza'},
      '/ensenanza/offer' : { page : '/ensenanza/offer'},
      '/investigacion' : { page : '/investigacion'},
      '/general' : { page : '/general'},
      '/medica' : { page : '/medica'},
      '/administracion' : { page : '/administracion'},
      '/planeacion' : { page : '/planeacion'},
      '/register': { page: '/register'},
      '/payment': { page : '/payment'},
      '/userlogin': { page: '/userlogin'},
      '/pdf' : { page: '/pdf' },
      '/profile': { page: '/profile'},
      '/test/[...id]' : { page: '/test/[...id]'},
      '/direccion/[...id]': { page : '/direccion/[...id]'},
      '/voluntariado' : { page: '/voluntariado'},
      '/especialidades': {page: '/especialidades'},
      '/el-instituto-y-su-historia': {page: '/el-instituto-y-su-historia'},
      '/inscripcion-pre-y-posgrado/pregrado' : {page: '/inscripcion-pre-y-posgrado/pregrado'},
      '/inscripcion-pre-y-posgrado/posgrado' : {page: '/inscripcion-pre-y-posgrado/posgrado'},
      '/inscripcion-pre-y-posgrado/internos' : {page: '/inscripcion-pre-y-posgrado/internos'},
      '/convocatoria' : {page: '/convocatoria'},
      //'/convocatoria/registro' : {page: '/convocatoria/registro'},
      '/convocatoria/avisos' : {page: '/convocatoria/avisos'},
      '/convocatoria/descargas' : {page: '/convocatoria/descargas'},
      '/convocatoria/preguntas-frecuentes' : {page: '/convocatoria/preguntas-frecuentes'},
      '/convocatoria/informes' : {page: '/convocatoria/informes'},
      '/dano-cero' : {page: '/dano-cero'},
      '/organizacion-de-archivos' : {page: '/organizacion-de-archivos'},
      '/sesion-clinico-patologica': {page: '/sesion-clinico-patologica'},
      '/galeria': {page: '/galeria'},
      '/dia-del-nino' : {page: '/dia-del-nino'},
      '/donacion' : {page: '/donacion'},
      //'/investigadores/[id]' : { page: '/nvestigadores/[id]'},
    }
  },
  env:{
    BASE_URL_API: 'https://courses-rest-api-hospital.vercel.app/'
  }
}

module.exports = nextConfig
