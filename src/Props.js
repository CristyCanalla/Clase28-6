const TarjetaPresentacion = ({name,description,img}) => {

 return(
    <div>
    <img src={img} width="200px" height="200px"alt="nombre"/>
    <h3>{name}</h3> 
    <p>{description}</p>
    </div>
 )
}

export default TarjetaPresentacion;