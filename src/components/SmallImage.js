// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "../imageData"
const SmallImage = ({ handleClick, bigImage }) => {
      // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
    const images = imagesArr.map((ele, idx)=>{
        return(<img
        key={idx}
        src={ele.img}
        alt={ele.city}
        className={ele.img === bigImage ? 'thumb border': 'thumb'}
        onClick={()=>handleClick(ele.img)}
        >
        </img>)
      })
    return (
        <div id="thumbnails">
            {images}
        </div>
    )
}
export default SmallImage