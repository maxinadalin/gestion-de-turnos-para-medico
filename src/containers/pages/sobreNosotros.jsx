import { connect } from "react-redux";
import Layout from "../../hocs/layout";
import AboutUs from "../../components/sobreNosotros/sobreNosotros"


function About_Us({

}) {
  return (
    <Layout>
    <AboutUs/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(About_Us);
