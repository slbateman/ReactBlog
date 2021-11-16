import AuthorImage from "../images/authorimage.jpeg"


function AuthorsImg () {
    console.log("--Authors Image--")
    return (
        <div >
            <img className = "authors-img" src={AuthorImage} alt="Monstrous Beast" />
        </div>
    )
};

export default AuthorsImg