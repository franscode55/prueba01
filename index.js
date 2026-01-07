let usuario = "Frans";
let productoComprado = 1;
const DESCUENTO = 0.1;
let precioDescuento;
const PRODUCTOS=[{
    producto: "Pantalon",
    precio:10, talla: "m",
    imagen:"pantalon.png"
},{
    producto: "Gorra",
    precio:5, talla: "s",
    imagen:"gorra.png" 
}];

document.querySelector("body").innerHTML=`
    <h1>${usuario}</h1>
    <section class="caja">
    <div>${PRODUCTOS[productoComprado].producto} (${PRODUCTOS[productoComprado].precio} S/)</div>
    <div>Descuento: ${calcularDescuento()}/</div>
    <div>Precio final: ${calcularprecio()} S/</div>
    <div>Talla:${PRODUCTOS[productoComprado].talla}</div>
    <img src="img/${PRODUCTOS[productoComprado].imagen}" alt="imagen" />
    </section>`

    function calcularDescuento() {
        precioDescuento=PRODUCTOS[productoComprado].precio*DESCUENTO;
    return precioDescuento;}

    function calcularprecio () {
        return PRODUCTOS[productoComprado].precio-precioDescuento;
    }

