import { useSelector } from "react-redux";
import { selectUsers } from "../store/Reducer";
import { Link } from "react-router-dom";

function AuthorsIcons({ changeAuthor }) {
  const users = useSelector(selectUsers);
  
  let authors = [];
  users.map((data) => {
    if (data.role === "admin" || data.role === "author") {
      authors = [...authors, data];
    }
    return authors;
  });

  return (
    <div className="authors-icons">
      <div className="authors-icons-block">
        {authors.map((data) => (
          <Link
            onClick={() => {
              changeAuthor(
                users.findIndex((element) => element.userID === data.userID)
              );
            }}
            to={`/authors/${data.fName}-${data.lName}`}
            key={data.fName + data.lName}
          >
            <img
              className="author-icon-img"
              src={data.avatar}
              alt={data.fName + data.lName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AuthorsIcons;
