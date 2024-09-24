import { connect } from "react-redux"
import doctores from "../../assets/img/medicos1.jpg"
import doctores2 from "../../assets/img/doctores2.jpg"
const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  

  function Servicios() {
    return (
        <div className="bg-white">
        <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
            <p className="mt-4 text-gray-500 border-b border-gray-200 pb-4">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
          </div>
          <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-8">
           
            <img
              alt="doctores"
              src={doctores}
              className="rounded-lg bg-gray-100"
            />
          </div>

          <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-8">
           
           <img
             alt="doctores2"
             src={doctores2}
             className="rounded-lg bg-gray-100"
           />
         </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
            <p className="mt-4 text-gray-500 border-b border-gray-200 pb-4">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
          </div>

        </div>
      </div>
    )
  }
  
  
  const mapStateToProps = state => ({
  
  })
  
  export default connect (mapStateToProps,{}) (Servicios)
