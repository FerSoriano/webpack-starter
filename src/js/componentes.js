import '../css/componentes.css'


export const saludar = ( nombre) => {
    
    console.log('Creando etiqueta H1, en el HTML');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, como estas,eh?`;

    document.body.append( h1 );
}




