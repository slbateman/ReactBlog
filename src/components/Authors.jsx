import AuthorsIcons from "./AuthorsIcons";
import AuthorsImg from "./AuthorsImg";
import AuthorsFocus from "./AuthorsFocus";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, updateAuthorIndex } from "../store/Reducer";
import { Switch, Route, useLocation } from "react-router-dom";

function Authors() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  let location = useLocation();
  dispatch(
    updateAuthorIndex(
      users.findIndex(
        (element) =>
          element.fName + "-" + element.lName ===
          location.pathname.substr(9, 30)
      )
    )
  );

  const changeAuthor = (index) => {
    window.scrollTo(0, 0);
    dispatch(updateAuthorIndex(index));
  };

  return (
    <div className="authors">
      <AuthorsIcons changeAuthor={changeAuthor} />
      <Switch>
        <Route exact path="/authors">
          <AuthorsFocus />
        </Route>
        <Route path="/authors/">
          <AuthorsFocus />
        </Route>
      </Switch>
      <AuthorsImg />
    </div>
  );
}

export default Authors;
