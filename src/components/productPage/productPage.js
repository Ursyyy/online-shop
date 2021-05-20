import React, {useState, useEffect} from 'react'
import { Button, Typography } from '@material-ui/core'

import useClasses from './classes'
import { getProdyctById } from '../../https/productsAPI'


const ProductPage = () => {
    const classes = useClasses()
    const [product, setProduct] = useState({
        id: 1,
        name: "iPhone 8",
        price: 100000,
        rating: 0,
        img: [
            "dcc775af-89ad-4c95-9c06-1cbffba7709a.jpg",
            "272b9f9f-4c08-432c-9356-82110e436901.jpg",
            "dcc775af-89ad-4c95-9c06-1cbffba7709a.jpg",
            "272b9f9f-4c08-432c-9356-82110e436901.jpg",
            "dcc775af-89ad-4c95-9c06-1cbffba7709a.jpg"
        ],
        description: `Полное погружение в игры благодаря плавным визуальным эффектам и реалистичным цветам. Исследуйте фантастические новые миры с потрясающей графикой, обеспечиваемой дисплеем с разрешением Full HD и технологией AMD Radeon FreeSync.

        Ультра-широкоформатные мониторы нравятся не всем, 4K-гейминг все не может получить достаточно мощное «железо» — так что игровые модели с традиционными пропорциями экрана и более «приземленным» разрешением по-прежнему «в строю», одним из них и является 24-дюймовый Full HD монитор Acer Nitro XV242YPbmiiprx.
        
        Игровая линейка Acer Nitro, в противовес Predator, всегда тяготела к спокойному и даже порой минималистичному дизайну, не стал исключением и Acer Nitro XV242YPbmiiprx: у него тонкий корпус, никакого глянца или ярких элементов с RGB-подсветкой. «Безрамочный» дизайн (экран закрывает защитное стекло, из-за чего в выключенном состоянии кажется, будто его обрамляет лишь тонкая линия боковой грани; после включения становится заметна дополнительная рамка шириной в полсантиметра), аккуратная небольшая круглая подставка, ножка в виде металлического «штыря» с неброским кольцом темно-вишневого цвета в основании – в общем и целом, этот монитор вполне органично впишется в строгий офисный интерьер; на игровую модель чисто внешне он похож, прямо скажем, несильно.
        
        Acer Nitro XV242YPbmiiprx использует 23.8-дюймовую IPS-панель с разрешением 1920х1080 точек (плотность пикселей ~82 PPI). Панель 8-битная, с повышением разрядности до 10 бит с помощью FRC.
        
        Максимальная частота обновления экрана – 165 Гц, у монитора есть поддержка адаптивного изменения частоты AMD Radeon FreeSync. Время отклика – стандартное для IPS 4 мс (при использовании овердрайва), однако наличие Visual Response Boost, практически полностью убирающего смазы в динамике, позволило компании указывать дополнительное значение этого параметра в виде «1 мс (VRB)». У овердрайва два значения степени разгона – «обычный» и «предельный». Смазанность динамичного изображения на «обычном» овердрайве почти не отличается от того, что можно увидеть при его полном отключении, при переходе на «предельный» картинка становится чуть четче, но зато сразу появляются очень сильные артефакты разгона в виде темных шлейфов за движущимися объектами. Так что мы бы рекомендовали либо использовать «обычный» разгон, либо вообще его отключить – тем более что и в таком случае смазанность оказывается более чем умеренная.`,
        typeId: 1, 
        brandId: 1, 
        info: [ 
            { "title": "вес", "description": "5 грамм",}, 
            { "title": "вес", "description": "100500",} ,
            { "title": "вес", "description": "100500",} ,
            { "title": "вес", "description": "100500",} 
        ] 
    })
    const [imgIndex, setImgIndex] = useState(0)


    useEffect(async () => {
        // const id = window.location.pathname.split('/')[2]
        // const prod = await getProdyctById(id)
    }, [])

    return (
        <div className={classes.container}>
            <Typography className={classes.title}>{product.name}</Typography>
            <div className={classes.content}>
                <div className='img-display'>
                    {/* <ul className='img-list'>
                        {product.img.map((image, index) => (
                            <li className='item' onMouseEnter={e => setImgIndex(index)} key={`img-${index}`}>
                                <img src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/${image}`}/>
                            </li>
                        )) }
                    </ul> */}
                    <div className='main-img'>
                        <img  src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/${product.img[imgIndex]}`}/>
                    </div>
                </div>
                <div className='price-display'>
                    <Typography className='price'>{product.price}</Typography>
                    <Button color='primary' className='buy-button'>Buy</Button>
                </div>
            </div>  
        </div>
    )
}


export default ProductPage