import React, {useEffect} from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import Report from "./containers/Dashboard";
import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { getUser } from "./reducks/users/selectors";
import Transaction from "./containers/Transaction";
import MyProfile from "./containers/MyProfile";
import SignUp from "./containers/Signup";


const Router = () => {
  const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
    }, []);
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={token ?Report : Home} />
        <Route exact path={"/sign-in"} component={token ? Report : SignIn} />
        <Route exact path={"/sign-up"} component={token ? Report : SignUp} />
        <Route exact path={"/transaction"} component={token ? Transaction : SignIn} />
        <Route exact path={"/profile"} component={token ? MyProfile : SignIn} />
      </Switch>
    </>
  );
};
export default Router;
