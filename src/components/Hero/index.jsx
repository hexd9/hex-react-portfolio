import "./hero.css"
import heroimage from "../../images/subject.png"
export const Hero=() => {

    return (
      <div className="herowrapper">
        <h1>Hello! My name is Hector Delgado</h1>
        <div className="imageContainer">
            <img src={heroimage}/>
        </div>
      </div>
    )
  }