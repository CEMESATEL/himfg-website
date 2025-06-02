import { PageBanner, TextsPage } from "@/components"
import { investigacion } from '../../consts'
const Investigacion = ()=>{
    return (
      <>
        {
          investigacion.map((page)=>(
            <>
              <PageBanner
              title={page.page_title}
              banner={page.page_banner_image}
              bannerResponsive={page.banner_image_responsive}
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

export default Investigacion