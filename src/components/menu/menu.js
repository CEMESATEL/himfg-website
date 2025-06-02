import { useState } from 'react'
import Link from 'next/link'
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import styles from './menu.module.css'
import { departamentos } from './const'

function Menu() {
  return (
    <div className={styles.menu}>
      {/*general*/}
      <MenuItem
        title="Dirección General"
        href='/general'
      />
      {/*médica*/}
      <MenuItemWithSubMenu
        title="Dirección Médica"
        href='/direccion/medica'
      >
        <SubMenu>
          {/*Subdirección de pediatría ambulatoria*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Pediatría Ambulatoria'
            href='/direccion/subdireccion-de-pediatria-ambulatoria'
          >
            <SubMenu>
            <SubMenuItem
              title="Departamento de Genética"
              href='/direccion/genetica-y-genomica'
            />
            <SubMenuItem
              title="Departamento de Psiquiatría y Medicina del Adolescente"
              href='/direccion/psiquiatria-y-medicina-del-adolescente'
            />
            <SubMenuItem
              title="Departamento de Rehabilitación"
              href='/direccion/departamento-de-rehabilitacion'
            />
            <SubMenuItem
              title="Departamento de Audiología y Foniatría"
              href='/direccion/departamento-de-audiologia-y-foniatria'
            />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de asistencia medica*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Asistencia Médica'
            href='/direccion/subdireccion-de-asistenca-medica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Urgencias"
                href='/direccion/departamento-de-urgencias'
              />
              <SubMenuItem
                title="Departamento de Infectología"
                href='/direccion/departamento-de-infectologia'
              />
              <SubMenuItem
                title="Departamento de Terapia Intensiva"
                href='/direccion/departamento-de-terapia-intensiva'
              />
              <SubMenuItem
                title="Departamento de Cardiología"
                href='/direccion/departamento-de-cardiologia'
              />
              <SubMenuItem
                title="Departamento de Nefrología"
                href='/direccion/departamento-de-nefrologia'
              />
              <SubMenuItem
                title="Departamento de Neonatología"
                href='/direccion/departamento-de-neonatologia'
              />
              <SubMenuItem
                title="Departamento de Hemato-Oncología"
                href='/direccion/departamento-de-hemato-oncologia'
              />
              <SubMenuItem
                title="Departamento de Gastroenterología y Nutrición"
                href='/direccion/gastroenterologia-y-nutricion'
              />
              <SubMenuItem
                title="Departamento de Neurología"
                href='/direccion/departamento-de-neurologia'
              />
              <SubMenuItem
                title="Departamento de Medicina Interna"
                href='/direccion/departamento-de-medicina-interna'
              />
              <SubMenuItem
                title="Departamento de Endocrinología"
                href='/direccion/departamento-de-endocrinologia'
              />
              <SubMenuItem
                title="Departamento de Epidemiología Hospitalaria"
                href='/direccion/departamento-de-epidemiologia-hospitalaria'
              />
              <SubMenuItem
                title="Departamento de Cuidados Paliativos y Calidad de Vida"
                href='/direccion/cuidados-paleativos-y-calidad-de-vida'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de asistencia quirúrgica*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Asistencia Quirúrgica'
            href='/direccion/subdireccion-de-asistencia-quirurgica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Trasplantes"
                href='/direccion/departamento-de-trasplantes'
              />
              <SubMenuItem
                title="Departamento de Ortopedia"
                href='/direccion/departamento-de-ortopedia'
              />
              <SubMenuItem
                title="Departamento de Neurocirugía"
                href='/direccion/departamento-de-neurocirugia'
              />
              <SubMenuItem
                title="Departamento de Urología"
                href='/direccion/departamento-de-urologia'
              />
              <SubMenuItem
                title="Departamento de Cirugía Cardiovascular, Tórax y Endoscopía"
                href='/direccion/cirugia-cardiovascular-torax-y-endoscopia'
              />
              <SubMenuItem
                title="Departamento de Anestesia y Algología"
                href='/direccion/anestesia-y-algologia'
              />
              <SubMenuItem
                title="Departamento de Estomatología"
                href='/direccion/departamento-de-estomatologia'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de servicios auxiliares y diagnostico*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Servicios Auxiliares de Diagnóstico'
            href='/direccion/servicios-auxiliares-de-diagnostico'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Imagenología"
                href='/direccion/departamento-de-imagenologia'
              />
              <SubMenuItem
                title="Departamento de Laboratorio Clínico"
                href='/direccion/laboratorio-clinico'
              />
              {/*<SubMenuItem
                title="Departamento de Patología Clínica y Experimental"
                href='/medica'
              />*/}
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de atención integral al paciente*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Atención Integral al Paciente'
            href='/direccion/subdireccion-atencion-integral-al-paciente'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Enfermería"
                href='/direccion/departamento-de-enfermeria'
              />
              <SubMenuItem
                title="Departamento de Trabajo Social"
                href='/direccion/departamento-de-trabajo-social'
              />
              <SubMenuItem
                title="Departamento de Relaciones Públicas"
                href='/direccion/departamento-de-relaciones-publicas'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Enseñanza*/}
      <MenuItemWithSubMenu
        title="Dirección de Enseñanza y Desarrollo Académico"
        href='/direccion/ensenanza'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Enseñanza"
            href='/direccion/subdireccion-de-ensenanza'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Educación de Pre y Posgrado"
            href='/direccion/pre-y-posgrado'
          />
          <SubMenuItem
            title="Departamento de Educación Médica Contínua"
            href='/direccion/educacion-medica-continua'
          />
          <SubMenuItem
            title="Departamento de Comunicación Social y CEMESATEL"
            href='/direccion/comunicacion-social-y-cemesatel'
          />
          <SubMenuItem
            title="Departamento de Hemerobiblioteca"
            href='/direccion/hemerobiblioteca'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Investigación*/}
      <MenuItemWithSubMenu
        title="Dirección de Investigación"
        href='/direccion/investigacion'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Gestión de la Investigación"
            href='/direccion/subdireccion-de-gestion-de-la-investigacion'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Investigación Epidemiológica"
            href='/direccion/investigacion-epidemiologica'
          />
          <SubMenuItem
            title="Departamento de Ediciones Médicas"
            href='/direccion/departamento-de-ediciones-medicas'
          />
            {/*Departamento de Investigación Biomédica*/}
          <SubMenuItemWithSubMenu
            title="Departamento de Investigación Educativa"
            href='/direccion/investigacion-biomedica'
          >
            <SubMenu>
              <SubMenuItem
              title="Servicio de Investigación Clínica y Básica"
              href='/direccion/servicio-de-investigacion-clinica-y-basica'
              />
              {/*<SubMenuItem
              title="Unidad Habilitada de Apoyo al Predictamen (UHAP)"
              href='/investigacion'
              />
              */}
              <SubMenuItem
              title="Unidad de Investigación en Enfermedades Oncológicas"
              href='/investigadores/3'
              />
              {/*<SubMenuItem
                title="Unidad de Investigación en Virología y Cáncer"
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Inmunología y Proteómica'
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Biología Computacional y Diseño de Fármacos'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Biología del Desarrollo y Teratogénesis Experimental'
                href='/investigacion'
              />
              */}
              
              <SubMenuItem
                title='Laboratorio de Investigación en Patología Experimental'
                href='/investigadores/9'
              />
              {/*
              <SubMenuItem
                title='Laboratorio de Investigación en Genómica, Genética y Bioinformática'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Enfermedades Metabólicas: Obesidad y Diabetes'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Farmacología'
                href='/investigacion'
              />*/}
              <SubMenuItem
                title='Laboratorio de Investigación en Neurociencias'
                href='/investigadores/10'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Obesidad y Asma'
                href='/investigadores/7'
              />
              {/*<SubMenuItem
                title='Biobanco de Investigación en Células Leucémicas'
                href='/investigacion'
              />
              <SubMenuItem
                title='Servicio de Bioterio'
                href='/investigacion'
            />*/}
            </SubMenu>
          </SubMenuItemWithSubMenu>
          <SubMenuItem
            title="Departamento de Administración de Control y Gestión a la Investigación"
            href='/direccion/departamento-administrativo-de-control-y-gestion'
          />
          <SubMenuItem
            title="Departamento Auxiliar Administrativo de Proyectos de Investigación"
            href='/direccion/departamento-auxiliar-de-proyectos-de-investigacion'
          />
          <SubMenuItem
            title="Departamento de Información Estratégica en Investigación"
            href='/direccion/departamento-de-infrmacion-estrategica-en-investigacion'
          />
          {/*Departamento de Investigación Clínica*/}
          {/*<SubMenuItemWithSubMenu
            title="Departamento de Investigación Clínica"
            href='/investigacion'
          >
            <SubMenu>
              <SubMenuItem
              title="Departamento de Investigación Epidemiológica en Endocrinología y Nutrición"
              href='/investigacion'
              />
              <SubMenuItem
              title="Unidad de Investigación en Enfermedades Neurológicas"
              href='/investigacion'
              />
              <SubMenuItem
              title="Unidad de Investigación en Medicina Basada en Evidencias"
              href='/investigacion'
              />
              <SubMenuItem
                title="Unidad de Investigación en Epidemiología Clínica"
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación y Diagnóstico en Nefrología y Metabolismo Mineral Óseo'
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Enfermedades Emergentes'
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Enfermedades Infecciosas'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Parasitología'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Bacteriología Intestinal'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Patogenicidad Bacteriana'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Cardiopatías Congénitas'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Ingeniería de Tejidos'
                href='/investigacion'
              />
              <SubMenuItem
                title=' Laboratorio de Investigación en Inmunoquímica'
                href='/investigacion'
              />
              <SubMenuItem
                title='Centro de Estudios Económicos y Sociales en Salud (CEESES)'
                href='/investigacion'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>*/}
          
          </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Administración*/}
      <MenuItemWithSubMenu
        title="Dirección de Administración"
        href='/direccion/administracion'
      >
        <SubMenu>
          {/*Subdirección de recursos humanos*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Recursos Humanos"
            href='/direccion/subdireccion-recursos-humanos'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Selección, Contratación y Seguimiento de Capital Humano"
            href='/direccion/seleccion-capital-humano'
          />
          <SubMenuItem
            title="Departamento de Sueldos"
            href='/direccion/departamento-de-sueldos'
          />
          <SubMenuItem
            title="Departamento de Atención y Desarrollo de Capital Humano"
            href='/direccion/atencion-y-desarrollo-del-capital-humano'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de recursos materiales*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Recursos Materiales"
            href='/direccion/subdireccion-recursos-materiales'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Compras Gubernamentales Generales"
            href='/direccion/compras-gubernamentales-generales'
          />
          <SubMenuItem
            title="Departamento de Compras Gubernamentales Farmacéuticas"
            href='/direccion/compras-gubernamentales-farmaceuticas'
          />
          <SubMenuItem
            title="Departamento de Almacenes"
            href='/direccion/departamento-almacenes'
          />
          <SubMenuItem
            title="Departamento de Inventario y Activo Fijo"
            href='/direccion/inventario-y-activo-fijo'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de mantenimiento*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Mantenimiento"
            href='/direccion/subdireccion-de-mantenimiento'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Servicios Generales"
            href='/direccion/servicios-generales'
          />
          <SubMenuItem
            title="Departamento de Mantenimiento"
            href='/direccion/departamento-de-mantenimiento'
          />
          <SubMenuItem
            title="Departamento de Ingeniería Biomédica"
            href='/direccion/ingenieria-biomedica'
          />
          <SubMenuItem
            title="Departamento de Obra Pública"
            href='/direccion/departamento-obra-publica'
          />
          <SubMenuItem
            title="Departamento de Protección Civil"
            href='/direccion/departamento-proteccion-civil'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de recursos financieros*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Recursos Financieros"
            href='/direccion/subdireccion-recursos-financieros'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Tesorería"
            href='/direccion/departamento-tesoreria'
          />
          <SubMenuItem
            title="Departamento de Contabilidad"
            href='/direccion/departamento-contabilidad'
          />
          <SubMenuItem
            title="Departamento de Presupuesto"
            href='/direccion/departamento-presupuesto'
          />
          <SubMenuItem
            title="Departamento de Control y Análisis Económico"
            href='/direccion/departamento-control-analisis-economico'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Planeación*/}
      <MenuItemWithSubMenu
        title="Dirección de Planeación"
        href='/direccion/planeacion'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Seguimiento Programático y Diseño Organizacional"
            href='/direccion/seguimiento-programatico-y-diseno-organizacional'
          >
          <SubMenuRight>
          <SubMenuItem
            title="Departmamento de Seguimiento Programático y Organización Institucional"
            href='/direccion/desempeno-y-organizacion-institucional'
          />
          <SubMenuItem
            title="Departamento de Tecnologías de la Información y Comunicaciones"
            href='/direccion/tecnologias-de-la-informacion-y-comunicaciones'
          />
          <SubMenuItem
            title="Departamento de Bioestadística y Archivo Clínico"
            href='/direccion/bioestadistica-y-archivo-clinico'
          />
          </SubMenuRight>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
    </div>
  );
}

function MenuItem({ title, children, href }) {
  return (
    <Link
      className={styles.menu_item}
      href={`${href}`}
    >
      <span>{title}</span>
      {children}
    </Link>
  );
}

function MenuItemWithSubMenu({ title, children, href }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <Link
      className={styles.menu_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={`${href}`}
    >
      <span>{title}</span>
      {children}
      {isSubMenuOpen && children}
    </Link>
  );
}

function SubMenu({ children }) {
  return <div className={styles.submenu}>{children}</div>;
}

function SubMenuItem({ title, href }) {
  return (
    <>
      <Link
        className={styles.sub_menu_item}
        href={`${href}`}
      >
        {title}
      </Link>
    </>
  )
}

function SubMenuItemWithSubMenu({ title, children, href }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  

  return (
    <Link
      className={styles.sub_menu_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={`${href}`}
    >
      <span>{title}</span>
      {isSubMenuOpen && children}
    </Link>
  );
}

function SubMenuRight({ children }) {
  return <div className={styles.submenu_right}>{children}</div>;
}

function MenuMobile(){
  const [isOpen, setIsOpen] = useState(false)
    const open = ()=> setIsOpen(!isOpen)
  return (
    <div className={styles.menuMobileWrapper}>
      <button
        onClick={open}
        className={styles.buttonMenu}
      >
        <span>Submenú</span>
        <MdArrowForwardIos />
      </button>
      <ul
        className={`${styles.menuMobileList} ${!isOpen ? '' : styles.active}`}>
          <div>
            <button
              onClick={open}
              className={styles.closeButton}
            >
              <MdOutlineArrowBackIos/>
              <span>Regresar</span>
            </button>
          </div>
          <li>
            <Link
              href='/general'
              onClick={open}
              className={styles.isPrincipal}
            >
              Dirección General
            </Link>
          </li>
          {
            departamentos.map(({name, link, isPrincipal})=>(
              <li>
              <Link
                href={`/direccion/${link}`}
                className={`${!isPrincipal ? '' : styles.isPrincipal}`}
                onClick={open}
                key={link}
              >
                {name}
              </Link>
            </li>
            ))
          }
      </ul>
    </div>
  )
}
export {Menu, MenuMobile};
