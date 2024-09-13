import { connect } from "react-redux";
import Banner from "../../components/pages/home/banner";
import Layout from "../../hocs/layout";
import Servicios from "../../components/pages/home/servicios";
import Doctores from "../../components/pages/home/doctores";

function Home({}) {
  return (
    <Layout>
      <Banner/>
      <Servicios/>
      <Doctores/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
