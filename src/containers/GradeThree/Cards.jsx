import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_3_books_cover/myanmar.jpg';
import english from '../../assests/grade_3_books_cover/english.jpg';
import math from '../../assests/grade_3_books_cover/math.jpg';
import science from '../../assests/grade_3_books_cover/science.jpg';
import social from '../../assests/grade_3_books_cover/social.jpg';
import physical from '../../assests/grade_3_books_cover/physical.jpg';
import life from '../../assests/grade_3_books_cover/life.jpg';
import civil from '../../assests/grade_3_books_cover/civil.jpg';
import art_art from '../../assests/grade_3_books_cover/art_art.jpg';
import art_music from '../../assests/grade_3_books_cover/art_music.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/1dKrgoFH15z_Sxur5QRX18nOtlsW8hHOf/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/1w8OS76xKJOLXB7XSXiVlhfe4KY4QpdvR/view?usp=sharing" />
        <CardItem name='သင်္ချာ' image={math} url="https://drive.google.com/file/d/1HanVgsPf3nTrWoSzWrt_wsF5kX3Ww083/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1QTh1BlVttZN1UEJFoF9cnh23mR7urh8A/view?usp=sharing" />
        <CardItem name='ကာယပညာ' image={physical} url="https://drive.google.com/file/d/1jrQwehAU0zy_OS4vgubjEfWVfXrO_VJv/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={civil} url="https://drive.google.com/file/d/1V-cHbV8qYiP6u113xIObo1pHPJMOrcbZ/view?usp=sharing" />
        <CardItem name='ဘဝတွက်တာကျွမ်းကျင်စရာ' image={life} url="https://drive.google.com/file/d/1TC1ovonNfBLOcVikG3WCZd9bh4WtVKa2/view?usp=sharing" />
        <CardItem name='လူမှုရေး' image={social} url="https://drive.google.com/file/d/1AQhq1oeEWO7p_aZJkLAL9kwOFd7q24xA/view?usp=sharing" />
        <CardItem name='အနုပညာ(ဂီတ)' image={art_music} url="https://drive.google.com/file/d/19fOjycJD-AAaFscJJ6oGHtlvT23UraWo/view?usp=sharing" />
        <CardItem name='အနုပညာ(ပန်းချီ)' image={art_art} url="https://drive.google.com/file/d/16S0xdvse3aY3JkCN37cFfPtqF5R4yeEB/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards