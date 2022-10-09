import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_4_books_cover/myanmar.jpg';
import english from '../../assests/grade_4_books_cover/english.jpg';
import math from '../../assests/grade_4_books_cover/math.jpg';
import science from '../../assests/grade_4_books_cover/science.jpg';
import social from '../../assests/grade_4_books_cover/social.jpg';
import physical from '../../assests/grade_4_books_cover/physical.jpg';
import life from '../../assests/grade_4_books_cover/life.jpg';
import civil from '../../assests/grade_4_books_cover/civil.jpg';
import art_art from '../../assests/grade_4_books_cover/art_art.jpg';
import art_music from '../../assests/grade_4_books_cover/art_music.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/1X03-SYbhFC7C5hSS2caqs4pHeyIUXe6J/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/1FpM39Vkv6dgyL8SZIJSZEpllMgk7nFA6/view?usp=sharing" />
        <CardItem name='သင်္ချာ' image={math} url="https://drive.google.com/file/d/1Z0V0SLiRwLrW5-1ZoJWaPpsIcIfI3pgg/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1cHhjOZAafF0BFW-BD9IEWqinHR1t2OBg/view?usp=sharing" />
        <CardItem name='ကာယပညာ' image={physical} url="https://drive.google.com/file/d/1j0EHhH_w6ApasaOP2bixemojxNLjdZdT/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={civil} url="https://drive.google.com/file/d/1hGFYr7PZZlOLPJfFdIFbQNof0oTKyreu/view?usp=sharing" />
        <CardItem name='ဘဝတွက်တာကျွမ်းကျင်စရာ' image={life} url="https://drive.google.com/file/d/1_cxHBy8ORitlgWOym8lhKqB8l2u4FIdT/view?usp=sharing" />
        <CardItem name='လူမှုရေး' image={social} url="https://drive.google.com/file/d/1A77tLw_bxYrQ6zw-inAxFcknaH-u_equ/view?usp=sharing" />
        <CardItem name='အနုပညာ(ဂီတ)' image={art_music} url="https://drive.google.com/file/d/1iq0QgP48dgx7hBVqfp4LNHx3sIitjhKM/view?usp=sharing" />
        <CardItem name='အနုပညာ(ပန်းချီ)' image={art_art} url="https://drive.google.com/file/d/1g-fWFY1IwOMHfo0k82TqLXrhJ07yoDhQ/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards