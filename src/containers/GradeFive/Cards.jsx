import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_5_books_cover/myanmar.jpg';
import english from '../../assests/grade_5_books_cover/english.jpg';
import math from '../../assests/grade_5_books_cover/math.jpg';
import science from '../../assests/grade_5_books_cover/science.jpg';
import social from '../../assests/grade_5_books_cover/social.jpg';
import civil from '../../assests/grade_5_books_cover/civil.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/1xjJ2rLT7jgJsRQ5YD-0EevrYOf29Nvrh/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/1zyG52tYlEfSZ7Fc2tkBrUKWRxlbnTkU6/view?usp=sharing" />
        <CardItem name='သင်္ချာ' image={math} url="https://drive.google.com/file/d/1_EFIqeLYCpqfpFpN0xmJyrwGTuseBOVJ/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1LUNflbB2m0TpyD9O9iRszadBQdAiDLU-/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={civil} url="https://drive.google.com/file/d/13vm2xm1oQSgcgJ0VN6Nbk_3-R9pe6vlC/view?usp=sharing" />
        <CardItem name='လူမှုရေး' image={social} url="https://drive.google.com/file/d/18tCfMmA4kO8WgStOTpRDX1cMQ_o33aTg/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards