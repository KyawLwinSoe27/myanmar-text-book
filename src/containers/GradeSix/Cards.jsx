import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_6_books_cover/myanmar.jpg';
import english from '../../assests/grade_6_books_cover/english.jpg';
import math1 from '../../assests/grade_6_books_cover/math1.jpg';
import math2 from '../../assests/grade_6_books_cover/math2.jpg';
import science from '../../assests/grade_6_books_cover/science.jpg';
import geography from '../../assests/grade_6_books_cover/geography.jpg';
import hist from '../../assests/grade_6_books_cover/history.jpg';
import civil from '../../assests/grade_6_books_cover/civil.jpg';
import life from '../../assests/grade_6_books_cover/life.jpg';
import art_art from '../../assests/grade_6_books_cover/art_art.jpg';
import art_music from '../../assests/grade_6_books_cover/art_music.jpg';
import physical from '../../assests/grade_6_books_cover/physical.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/1KdOqxsvBxhP6YdiJVSkvLUqVgZKFaYxG/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/1bJHNDrTwmAjK3skSTBArT1VckGdwAilk/view?usp=sharing" />
        <CardItem name='သင်္ချာ ၁' image={math1} url="https://drive.google.com/file/d/1OhpSMSgRaQ1NLyzkn14PVFbFPlsdM_OF/view?usp=sharing" />
        <CardItem name='သင်္ချာ ၂' image={math2} url="https://drive.google.com/file/d/1zdiwbnCThT1eLBJMFgU2g9_KFlyIcYCi/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1Yf28EtOsRRg42ZHO5Wmmc_2ks6mI4rjN/view?usp=sharing" />
        <CardItem name='ပထဝီဝင်' image={geography} url="https://drive.google.com/file/d/1AydRdaaFUfmW00AgYG3-_iA9ph_Sxu_m/view?usp=sharing" />
        <CardItem name='သမိုင်း' image={hist} url="https://drive.google.com/file/d/1y9rsVFp3XCoiY3otvPwkJk0BTnO4n48s/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={civil} url="https://drive.google.com/file/d/11qMHHuhv_qFAafqXDZ3SZpPAbFnWLhgQ/view?usp=sharing" />
        <CardItem name='ဘဝတွက်တာ ကျွမ်းကျင်စရာ' image={life} url="https://drive.google.com/file/d/1mfrMLDUnG0vYDYMBDrfqg4HgzRyOeG8U/view?usp=sharing" />
        <CardItem name='ကာယပညာ' image={physical} url="https://drive.google.com/file/d/1ApQSRlAfjUFwd7zaYDBUgGUNS0ixHpKS/view?usp=sharing" />
        <CardItem name='အနုပညာ (ပန်းချီ)' image={art_art} url="https://drive.google.com/file/d/19z9mSltzfjZndtJxXyPk4oMNDRsD3I-6/view?usp=sharing" />
        <CardItem name='အနုပညာ (ဂီတ)' image={art_music} url="https://drive.google.com/file/d/1lhRWpf-kEtUEBohCcA6lpWAV760EE4za/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards