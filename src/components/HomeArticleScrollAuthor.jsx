import { useSelector } from "react-redux";
import { selectUsers } from "../store/Reducer";

const HomeArticleScrollAuthor = ({ userID }) => {
  const users = useSelector(selectUsers);

  return (
    <div className="preview-author">
      {users[users.findIndex((element) => element.userID === userID)].fName +
        " " +
        users[users.findIndex((element) => element.userID === userID)].lName}
    </div>
  );
};

export default HomeArticleScrollAuthor;
