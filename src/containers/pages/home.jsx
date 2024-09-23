import { connect } from "react-redux";
import Banner from "../../components/home/banner";
import Layout from "../../hocs/layout";
import Servicios from "../../components/home/servicios";
import Doctores from "../../components/home/doctores";
import Contacto from "../../components/home/contacto";

function Home({}) {
  return (
    <Layout>
      <Banner/>
      <Servicios/>
      <Doctores/>
      <Contacto/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
