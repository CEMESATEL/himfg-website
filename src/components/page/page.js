import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { Title, Menu, PageBanner } from '../../components'
import direccion_general from '../../assets/direccion-general.png'
import banner from '../../assets/page-banner.jpeg'
import styles from "./page.module.css"

export const Page = ({children, title, listMenu, textMenu, route}) => {
  const [isOpen, setIsOpen]= useState(false)
  const showMenu = ()=> setIsOpen(!isOpen)
  return (
    <>
      <PageBanner
        title='Dirección General'
        banner='https://res.cloudinary.com/diuxbqmn5/image/upload/v1708969418/vlqtlfkcmrayfg7rmrsu.png'
        bannerResponsive='https://res.cloudinary.com/diuxbqmn5/image/upload/v1708969418/vlqtlfkcmrayfg7rmrsu.png'
      />
      <div className={styles.texts}>
        <figure>
          <Image src={direccion_general} />
        </figure>
        <div className={styles.text}>
            {children}
        </div>
      </div>
      <br/>
    </>
  );
};
