import AuthorBios from "../data/AuthorBios"

function AuthorsFocus ({index}) {
    console.log("--Authors Focus--")
    return (
        <div className = "authors-focus" >
            <img className="author-headshot" src={AuthorBios[index].image} alt={AuthorBios[index].fName + AuthorBios[index].lName} />
            <h3 className="author-name" >{AuthorBios[index].fName} {AuthorBios[index].lName} </h3>
            <div className="author-bio" >
                {AuthorBios[index].bio.map((data) => (
                    <p key={data} >{data}</p>
                ))}
            </div>
        </div>
    )
};

export default AuthorsFocus