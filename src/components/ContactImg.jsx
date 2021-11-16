import ContactImage from "../images/contactimage.png"

function ContactImg () {
    console.log("--Contact Image--")

    return (
        <div >
            <img className = "authors-img" src={ContactImage} alt="Monstrous Beast" />
        </div>

    )
};

export default ContactImg