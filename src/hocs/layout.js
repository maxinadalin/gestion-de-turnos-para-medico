import { connect } from "react-redux";
import NavBar from "../components/navigation/navBar";
import Footer from "../components/navigation/footer";
import { useEffect } from "react";
import { check_authenticated, Load_user, Refresh } from "../redux/actions/auth";

function Layout({
  children,
  Load_user,
  check_authenticated

}){

  useEffect (() =>{
    Load_user();
    check_authenticated();
    Refresh();
  },[check_authenticated,Load_user,Refresh])
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
Load_user,
check_authenticated,
Refresh
}) (Layout)