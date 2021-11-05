import AuthorsIcons from "./AuthorsIcons";
import AuthorsImg from "./AuthorsImg";
import AuthorsFocus from "./AuthorsFocus";
import AuthorBios from "../data/AuthorBios";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react"

function Authors() {
  let location = useLocation();
  const [authorIndex, setAuthorIndex] = useState(
    AuthorBios.findIndex(
      (element) => element.fName + "-" + element.lName === location.pathname.substr(9, 30)
    )
  );

  const changeAuthor = (index) => {
    window.scrollTo(0, 0);
    setAuthorIndex(index);
  };

  return (
    <div className="authors">
      <AuthorsIcons changeAuthor={changeAuthor} />
      <Switch>
        <Route exact path="/authors" >  
          <AuthorsFocus index={1} />
        </Route>
        <Route path="/authors/" >  
          <AuthorsFocus index={authorIndex}/>
        </Route>
      </Switch>
      <AuthorsImg />
    </div>
  );
}

export default Authors;
