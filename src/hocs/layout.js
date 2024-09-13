import { connect } from "react-redux";
import NavBar from "../components/navigation/navBar";
import Footer from "../components/navigation/footer";

function Layout({
  children
}){
    return(
       <div>
         <NavBar/>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {children}
         </div>
         <Footer/>

       </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{

}) (Layout)