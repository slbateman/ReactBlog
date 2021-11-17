import Store from "../store/Store";

function AuthorsFocus({ index }) {
  console.log("--Authors Focus--");
  const state = Store.getState();

  return (
    <div className="authors-focus">
      <img
        className="author-headshot"
        src={state.authors[index].image}
        alt={state.authors[index].fName + state.authors[index].lName}
      />
      <h3 className="author-name">
        {state.authors[index].fName} {state.authors[index].lName}{" "}
      </h3>
      <div className="author-bio">
        {state.authors[index].bio.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>
    </div>
  );
}

export default AuthorsFocus;
