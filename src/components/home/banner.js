import { connect } from "react-redux"
import family from "../../assets/img/familia.jpg"


  

  function Banner() {
    return (
        <div className="bg-white w-full">
  <div className="relative" style={{ minHeight: 'calc(100vh - 74px)' }}>
    {/* Capa de fondo con opacidad */}
    <div 
      className=" absolute inset-0 bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${family})`, opacity: 0.4, backgroundSize: 'cover' }}
    >
    </div>
    <div className=" relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Take control of your team.
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>
      </div>
    </div>
    </div>
  </div>
    )
  }
  
  
  const mapStateToProps = state => ({
  
  })
  
  export default connect (mapStateToProps,{}) (Banner)
