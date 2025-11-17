import { FaRegUser } from "react-icons/fa";
const BasicJSX = () => {
    let carDetails = {
        name: 'Nkhil',
        age: 20,
        profession: 'Software Devloper',
        description:'i love to create webApps and MobileApps'
    }
    return (
      <>
            {/*create a profile card-show you name,profile image, and short bio using jsx  */}
            <div className="card">
                <div  className="icon">
                    {/* i using react icon instead of image */}
                    <FaRegUser className="userIcon"/>
                </div>
                <p>Hy my name is {carDetails.name}</p>
                <p>I am  {carDetails.age} year old</p>
                <p>I am  {carDetails.profession}</p>
                <p>{carDetails.description}</p>
            </div>
      </>
  )
}

export default BasicJSX