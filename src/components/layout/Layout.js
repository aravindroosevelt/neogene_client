import Navbar from '../navbar/Navbar'
import Toast from '../toastify/toast'

const Layout = ({ children }) => {
  return (
    <>
      <Toast />
      <Navbar />
      <main>{children}</main>
    </>
  )
}
export default Layout
