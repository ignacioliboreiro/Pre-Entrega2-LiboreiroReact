
const products = ([
    {
        id: 1,
        name: 'placa de video',
        stock: 3,
        price: 150.555,
        description: 'placa de video 1660 super',
        imagenUrl:"https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/9/1/912-v375-279_ok.jpg"
    },
    {
        id: 2,
        name: 'Pc Gamer Armada',
        stock: 5,
        price: 200.999,
        description: 'PC AMD RYZEN 5 4600G 8GB',
        imagenUrl:"https://www.venex.com.ar/products_images/1662661172_4600g.jpg"
    },
    {
        id: 3,
        name: 'Silla Gamer',
        stock: 4,
        price: 80.999,
        description: 'SILLA GAMER CORSAIR T3',
        imagenUrl:"https://front.dev.malditohard.com.ar/img/migration/SILLA-GAMER-CORSAIR-T3-RUSH-CHARCOAL-2023.webp"
    },
    {
        id: 4,
        name: 'Monitor',
        stock: 4,
        price: 150.729,
        description: 'MONITOR 24 AOC G2490VX',
        imagenUrl:"https://front.dev.malditohard.com.ar/img/migration/MONITOR-24-AOC-G2490VX-GAMER-FHD.webp"
    },
    {
        id: 5,
        name: 'Notebook Gigabyte Aero',
        stock: 4,
        price: 800.555,
        description: 'NOTEBOOK GIGABYTE AERO 16',
        imagenUrl:"https://front.dev.malditohard.com.ar/img/migration/NOTEBOOK-GIGABYTE-AERO-16-OLED-i7-3060P-16GB-1T.webp"
    },
]);

const mFetch = () =>
    new Promise((res, rej) => {
        const condition = true;
        if (condition) {
            setTimeout(() => {
                res(products)
            },2000);
        } else {
            rej('sin productos');
        }
    })
    
export const mFetchOne = () =>
new Promise((res, rej) => {
    const condition = true;
    if (condition) {
        setTimeout(() => {
            res(products [0])
        },2000);
    } else {
        rej('sin productos');
    }
})

    
    export default mFetch