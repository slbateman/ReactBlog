import Store from "../store/Store";
import { Link } from "react-router-dom";

function AuthorsIcons({ changeAuthor }) {
  console.log("--Authors Icons--")
  const state = Store.getState();
  
  return (
    <div className="authors-icons">
      <div className="authors-icons-block">
        {state.authors.map((data) => (
          <Link
            onClick={() => {
              changeAuthor(state.authors.indexOf(data));
            }}
            to={`/authors/${data.fName}-${data.lName}`}
            key={data.fName+data.lName}
          >
            <img
              className="author-icon-img"
              src={data.image}
              alt={data.fName + data.lName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AuthorsIcons;
