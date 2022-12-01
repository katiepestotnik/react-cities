const SmallImage = ({ handleClick, src, alt, className }) => {
        return(<img
        src={src}
        alt={alt}
        className={className}
        onClick={()=>handleClick(src)}
        >
        </img>)
}
export default SmallImage