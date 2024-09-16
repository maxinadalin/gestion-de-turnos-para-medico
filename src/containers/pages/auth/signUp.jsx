import { connect } from "react-redux";
import SignUp from "../../../components/auth/signUp"
import Layout from "../../../hocs/layout";


function Register({}) {
  return (
    <Layout>
        <SignUp/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Register);
