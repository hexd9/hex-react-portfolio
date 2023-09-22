import "./hero.css"
import heroimage from "../../images/heroimage.jpg"
export const Hero=() => {

    return (
      <div>
        <h1>Hello</h1>
        <div className="imageContainer">
            <img src={heroimage}/>
        </div>
      </div>
    )
  }