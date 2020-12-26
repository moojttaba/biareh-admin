//////////////////////////////////////////// React - Redux
import { lazy, Suspense, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//////////////////////////////////////////// styles
import theme from "./styles/theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
//////////////////////////////////////////// Route
import { Route, Switch } from "react-router-dom";
//////////////////////////////////////////// COMPONENTS
import Spinner from "./components/spinner.component";
import Header from "./layouts/header.layouts";
// import HeaderSaveProduct from "./layouts/HeaderSaveProduct.layouts";
//////////////////////////////////////////// PAGES
const HomePage = lazy(() => import("./pages/home.page"));
const ProductsPage = lazy(() => import("./pages/products.page"));
const ProductsAddPage = lazy(() => import("./pages/productAdd.page"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-up-and-sign-in.page")
);
const ProfilePage = lazy(() => import("./pages/profile.page"));

const App = () => {
  //const [value, setValue] = useState(0);

  // useEffect(() => {
  //   if (window.location.pathname === "/admin/products/new") {
  //     setValue(1);
  //   } else {
  //     setValue(0);
  //   }
  // }, [value]);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {/* {value === 1 ? <HeaderSaveProduct /> : <Header />} */}
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin/products" component={ProductsPage} />
            <Route
              exact
              path="/admin/products/new"
              component={ProductsAddPage}
            />
            <Route
              exact
              path="/SignInAndSignUpPage"
              component={SignInAndSignUpPage}
            />
            <Route exact path="/Profile" component={ProfilePage} />
          </Suspense>
        </Switch>
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
