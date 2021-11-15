import AuthorBios from "../data/AuthorBios";
import { Link } from "react-router-dom";

function AuthorsIcons({ changeAuthor }) {
  return (
    <div className="authors-icons">
      <div className="authors-icons-block">
        {AuthorBios.map((data) => (
          <Link
            onClick={() => {
              changeAuthor(AuthorBios.indexOf(data));
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
