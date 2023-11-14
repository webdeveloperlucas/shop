import Footer from "../components/Commons/Footer"
import Header from "../components/Commons/Header"

const Layout = ({children}:any) => {
    return (
       <main>
        <Header/>
        {children}
        <Footer/>
       </main>
    )
}

export default Layout