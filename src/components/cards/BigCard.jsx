import React from 'react'
import shirt from '../../assets/shirt.png'
import sportsshoes from '../../assets/sportsshoes.png'
import Flickity from 'react-flickity-component'
import kurti from '../../assets/kurti.png'

const flickityOptions = {
    initialIndex: 1
}

const BigCard = (photo, brand, title, price, offer) => {
    return (

        <div>
            <Flickity
                className='carousel w-full'
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={false}
                reloadOnUpdate
                static
            >
                <div className=''>
                    <div className=''> <img className='h-[20rem] w-[24rem] ' src={shirt} /> </div>
                    <div className='flex flex-col justify-center items-center absolute z-20 top-52 left-20 text-xl font-bold'> <p className='text-black font-extrabold bg-white flex justify-center items-center'>Roadster</p> <p className='font-extrabold text-2xl text-white'>Causual Shirt</p> <p className='text-orange-400 font-extrabold italic text-2xl'>UPTO 30%-70% OFF</p> </div>

                </div>

                <div>

                    <div> <img className='h-[20rem] w-[24rem]' src={sportsshoes} /></div>
                    <div className='flex flex-col justify-center items-center absolute z-20 top-52 left-20 text-xl font-bold'>
                        <p className='text-fuchsia-500 font-extrabold bg-white flex justify-center items-center'>PUMA</p>
                        <p className='font-extrabold text-2xl text-white bg-black'>Sports Shoes</p>
                        <p className='text-red-600 font-extrabold italic text-2xl'>FLAT 20%-30% OFF</p>
                    </div>

                </div>

                <div>

                    <div> <img className='h-[20rem] w-[24rem]' src={kurti} /> </div>
                    <div className='flex flex-col justify-center items-center absolute z-20 top-52 left-20 text-xl font-bold'>
                        <p className='text-yellow-400 font-extrabold bg-black flex justify-center items-center'>Libas</p>
                        <p className='font-extrabold text-2xl text-green-900 bg-white'>Kurti for Party Wear</p>
                        <p className='text-orange-500 font-extrabold italic text-2xl'>UPTO 60% OFF</p>

                    </div>

                </div>

            </Flickity>
        </div>








    )
}

export default BigCard
