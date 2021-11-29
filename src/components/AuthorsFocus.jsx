import { useSelector } from "react-redux";
import { selectUsers, selectIndexStates } from "../store/Reducer";

function AuthorsFocus() {
  console.log("--Authors Focus--");
  const users = useSelector(selectUsers)
  const authorIndex = useSelector(selectIndexStates).authorIndex
  console.log(authorIndex)

  return (
    <div className="authors-focus">
      <img
        className="author-headshot"
        src={users[authorIndex].avatar}
        alt={users[authorIndex].fName + users[authorIndex].lName}
      />
      <h3 className="author-name">
        {users[authorIndex].fName} {users[authorIndex].lName}{" "}
      </h3>
      <div className="author-bio">
        {users[authorIndex].bio.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>
    </div>
  );
}

export default AuthorsFocus;
