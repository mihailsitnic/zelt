import { useEditProfile } from "../store";
import img from "img";

function Breadcrumbs() {
    const { isEditing } = useEditProfile();

    return (
        <section className="breadcrumbs">
            <div className="wrap">
                <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__li">
                        <span className="breadcrumbs__span">
                            <img className="breadcrumbs__img" src={img.home} alt="Home" />
                        </span>
                    </li>
                    <li className="breadcrumbs__li">
                        <span className="breadcrumbs__span">{isEditing ? "Edit profile" : "My profile"}</span>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Breadcrumbs;