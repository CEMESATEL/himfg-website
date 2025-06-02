import { PageBanner, TextsPage } from "@/components"
import { administracion } from '../../consts'
const Administracion = ()=>{
    return (
      <>
        {
          administracion.map((page)=>(
            <>
              <PageBanner
              title={page.page_title}
              banner={page.page_banner_image}
              bannerResponsive={page.banner_image_responsive}
              textLeft
              >
              <p>{page.page_banner_content}</p>
              </PageBanner>
              <TextsPage
                  firstText={page.page_first_content}
                  secondText={page.page_second_content}
                  firstImage={page.page_first_image}
                  secondImage={page.page_second_image}
              />
            </>
          ))
        }
      </>
    )
}
export default Administracion