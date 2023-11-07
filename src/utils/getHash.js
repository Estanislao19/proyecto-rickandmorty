const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'//me permite obtener la uicacion donde se encuentre, le paso para eliminar el primer elemento de la ubicacion que seria el #


export default getHash;