import { connect } from "react-redux";
import SignIn from "../../../components/auth/login"
import Layout from "../../../hocs/layout";


function Sign_In({}) {
  return (
    <Layout>
        <SignIn/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Sign_In);
