import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_2_books_cover/myanmar.jpg';
import english from '../../assests/grade_2_books_cover/english.jpg';
import math from '../../assests/grade_2_books_cover/math.jpg';
import science from '../../assests/grade_2_books_cover/science.jpg';
import social from '../../assests/grade_2_books_cover/social.jpg';
import physical from '../../assests/grade_2_books_cover/physical.jpg';
import life from '../../assests/grade_2_books_cover/life.jpg';
import civil from '../../assests/grade_2_books_cover/civil.jpg';
import art_art from '../../assests/grade_2_books_cover/art_art.jpg';
import art_music from '../../assests/grade_2_books_cover/art_music.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/1w4NCwQGGgSqaXbutPa0Yd6zaLy9PmPbF/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/146WuYvLF5E28Rb5OokcqI5VXrLsC6iRP/view?usp=sharing" />
        <CardItem name='သင်္ချာ' image={math} url="https://drive.google.com/file/d/1CBUeHnkReod-rEakr7FoD1dMooC5Zqxm/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1yJHU7V6P0zlWmXiyVyiU7mWxOAtNR0i9/view?usp=sharing" />
        <CardItem name='ကာယပညာ' image={social} url="https://drive.google.com/file/d/1zTtixDHMV47A1vWbi5jYCx-3f3ujzzdH/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={physical} url="https://drive.google.com/file/d/1QDb86-i1IB3D4MDCXSc1e5EW448tNp9R/view?usp=sharing" />
        <CardItem name='ဘဝတွက်တာကျွမ်းကျင်စရာ' image={life} url="https://drive.google.com/file/d/1i4PdgvN3NsnzQth48WZoxy-IlBf0oBHX/view?usp=sharing" />
        <CardItem name='လူမှုရေး' image={civil} url="https://drive.google.com/file/d/171OjCdp-PvuLc1HdDZnrESS5OMSWB_q6/view?usp=sharing" />
        <CardItem name='အနုပညာ(ဂီတ)' image={art_art} url="https://drive.google.com/file/d/1_RDJjLdhwuAyEUhnH4ZywwZEUZkYAr9B/view?usp=sharing" />
        <CardItem name='အနုပညာ(ပန်းချီ)' image={art_music} url="https://drive.google.com/file/d/1A24HWL1EvZYFed6y6qiR4RBHdPsskSU7/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards