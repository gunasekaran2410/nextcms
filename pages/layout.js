import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Social from 'components/Social';


function Layout(props)
{
    return <div>
             <Nav/>
             <Social/>
             {props.children}
             <Footer/>
        </div>
}
export default Layout;