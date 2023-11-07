const resolveRoutes = (route) => {
  if (route.length <= 3){ //para preguntarle cuanto elementos tiene de longitud  
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
}
return `/${route}`;
};

export default resolveRoutes;