import Container from './Container'
import React from 'react'
import Flex from './Flex'
import Carone from '../assets/cardone.png'
import Cartwo from '../assets/cardtwo.png'
import Carthree from '../assets/cardthree.png'
const Addsale = () => {
  return (
    <section className='pt-[100px]'>
        <Container>
            <Flex className='justify-between'>
                <div className="w-[48%]">
                    <div className="">
                        <a href="#"></a>
                        <img src={Carone} cl alt="" />
                    </div>
                </div>
                <div className="w-[48%]">
                    <div className="">
                        <a href="#"><img src={Cartwo}  alt="" /></a>
                        
                    </div>
                    <div className="pt-10">
                        <a href="#">   <img src={Carthree} alt="" /></a>
                     
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Addsale