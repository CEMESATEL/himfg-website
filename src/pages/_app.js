import '../styles/global.css'
import { Montserrat } from '@next/font/google'
import { Layout, Footer } from '../components'
import { AdminProvider, UserProvider, CourseProvider } from '../contexts'

const montserratFont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <AdminProvider>
      <CourseProvider>
        <UserProvider>
          <Layout>
            <main className={montserratFont.className}>
              <Component {...pageProps} />
              <Footer />
            </main>
          </Layout>
        </UserProvider>
      </CourseProvider>
    </AdminProvider>
  )
}