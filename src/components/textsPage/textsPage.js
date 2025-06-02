'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './textsPage.module.css'
import { PagePortrait } from '../pagePortrait/pagePortrait'

export const TextsPage = ({ page }) => {
    if (!page || typeof page.tipo_departamento === 'undefined') {
        return null; // O podés retornar algo más visible como <p>Cargando...</p>
    }

    return (
        <section className={`${page.tipo_departamento !== 2 ? styles.textsWrapper : styles.directionWrapper}`}>
            <div className={`${styles.texts} ${page.tipo_departamento !== 2 ? 'flexContainer' : styles.textsBackground}`}>
                <h1>{page.page_title}</h1>
                <PagePortrait
                    image={page.page_titular_photo}
                    titular={page.page_titular}
                    titularGrade={page.page_titular_grade}
                />
                <div className={styles.text}>
                    <p>
                        {page.page_first_content}
                    </p>
                    <p>
                        {page.page_second_content}
                    </p>
                </div>
                {
                    page.tipo_departamento !== 2 ?
                        <div className={`${styles.text_image}`}>
                            <img
                                src={page.page_first_image}
                                loading='lazy'
                            />
                            <img
                                src={page.page_second_image}
                                loading='lazy'
                            />
                        </div>
                        :
                        null
                }
            </div>
            {
                !page.page_staff ?
                    null :
                    <div className={styles.directionOptions}>
                        {
                            JSON.parse(page.page_staff).map((item, i) => (
                                <Link
                                    href={`/${item.link}`}
                                    key={i}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
            }
        </section>
    )
}
