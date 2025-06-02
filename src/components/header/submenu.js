'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6"
import styles from './submenu.module.css';

export const Submenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={styles.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className={styles.dropbtn}>
                <span>
                    Menú
                </span>
                <FaBars />
            </button>

            {isOpen && (
                <div className={styles.dropdownContent}>
                    <Link href="/general">Dirección General</Link>

                    <div className={styles.submenuContainer}>
                        <Link href="/direccion/medica" className={styles.submenuTitle}>Dirección Médica ▸</Link>
                        <div className={styles.submenu}>
                            <Link href="/direccion/subdireccion-de-pediatria-ambulatoria" className={styles.submenuTitle}>Subdirección de Pediatría Ambulatoria</Link>
                            <Link href="/direccion/subdireccion-de-asistenca-medica" className={styles.submenuTitle}>Subdirección de Asistencia Médica</Link>
                            <Link href="/direccion/subdireccion-de-asistencia-quirurgica" className={styles.submenuTitle}>Subdirección de Asistencia Quirúrgica</Link>
                            <Link href="/direccion/servicios-auxiliares-de-diagnostico" className={styles.submenuTitle}>Subdirección de Servicios Auxiliares de Daignóstico</Link>
                            <Link href="/direccion/subdireccion-atencion-integral-al-paciente" className={styles.submenuTitle}>Subdirección de Atención Integral al Paciente</Link>
                        </div>
                    </div>
                    <div className={styles.submenuContainer}>
                        <Link href="/direccion/ensenanza" className={styles.submenuTitle}>Dirección de Enseñanza y Desarrollo Académico ▸</Link>
                        <div className={styles.submenu}>
                            <Link href="/direccion/subdireccion-de-ensenanza" className={styles.submenuTitle}>Subdirección Enseñanza</Link>
                        </div>
                    </div>
                    <div className={styles.submenuContainer}>
                        <Link href="/direccion/investigacion" className={styles.submenuTitle}>Dirección de Investigación ▸</Link>
                        <div className={styles.submenu}>
                            <Link href="/direccion/subdireccion-de-gestion-de-la-investigacion" className={styles.submenuTitle}>Subdirección de Gestión de la Investigación</Link>
                        </div>
                    </div>
                    <div className={styles.submenuContainer}>
                        <Link href="/direccion/administracion" className={styles.submenuTitle}>Dirección de Administración ▸</Link>
                        <div className={styles.submenu}>
                            <Link href="/direccion/subdireccion-recursos-humanos" className={styles.submenuTitle}>Subdirección de Recursos Humanos</Link>
                            <Link href="/direccion/subdireccion-recursos-materiales" className={styles.submenuTitle}>Subdirección de Recursos Materiales</Link>
                            <Link href="/direccion/subdireccion-de-mantenimiento" className={styles.submenuTitle}>Subdirección de Mantenimiento</Link>
                            <Link href="/direccion/subdireccion-recursos-financieros" className={styles.submenuTitle}>Subdirección de Recursos Financieros</Link>
                        </div>
                    </div>
                    <div className={styles.submenuContainer}>
                        <Link href="/direccion/planeacion" className={styles.submenuTitle}>Dirección de Planeación ▸</Link>
                        <div className={styles.submenu}>
                            <Link href="/direccion/seguimiento-programatico-y-diseno-organizacional" className={styles.submenuTitle}>Subdirección de Seguimiento Programático y Diseño Organizacional</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
