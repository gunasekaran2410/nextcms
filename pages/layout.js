import Footer from 'components/Footer';
import Nav from 'components/Nav';


function Layout(props)
{
    return <div>
             <Nav/>
             {props.children}
             <Footer/>
        </div>
}
export default Layout;