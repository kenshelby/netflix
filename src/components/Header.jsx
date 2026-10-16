import { LOGO_URL } from "../utils/constants"


const Header = () => {

    return (
        <div className="flex justify-between bg-linear-to-t from-black-900 to-gray-900">
            <img src={LOGO_URL} className=" w-32"></img>
            <div className="m-2">profile</div>
        </div>
    )
}
export default Header;