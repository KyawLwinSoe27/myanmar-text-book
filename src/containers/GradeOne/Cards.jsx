import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_1_books_cover/myanmar.png';
import english from '../../assests/grade_1_books_cover/english.png';
import math from '../../assests/grade_1_books_cover/math.png';
import science from '../../assests/grade_1_books_cover/science.png';
import social from '../../assests/grade_1_books_cover/social.png';
import physical from '../../assests/grade_1_books_cover/physical.jpg';
import life from '../../assests/grade_1_books_cover/life.jpg';
import civil from '../../assests/grade_1_books_cover/civil.png';
import art_art from '../../assests/grade_1_books_cover/art_art.jpg';
import art_music from '../../assests/grade_1_books_cover/art_music.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/15gryV98kukXFkALR9g7EHAp_Fe4VIOcK/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/1bUg0uO568O4a4EkUfweZELhUedvSUQ9_/view?usp=sharing" />
        <CardItem name='သင်္ချာ' image={math} url="https://drive.google.com/file/d/1OYmpSDPQRoDpFMefFLIKv-6PWZ_2iqQ8/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1ZZY965sFfCzq9AtemL1tRAa31U5j4qhI/view?usp=sharing" />
        <CardItem name='ကာယပညာ' image={social} url="https://drive.google.com/file/d/156fVJUmo878O8hYHN2O5kG2m68XvyIhk/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={physical} url="https://drive.google.com/file/d/1MasTlMK1VVocCJ4o6Hdbeoh9UTAGdxOC/view?usp=sharing" />
        <CardItem name='ဘဝတွက်တာကျွမ်းကျင်စရာ' image={life} url="https://drive.google.com/file/d/1JPzxvlGkTfXXt-pm9Lj0B0X_sLsNpiCE/view?usp=sharing" />
        <CardItem name='လူမှုရေး' image={civil} url="https://drive.google.com/file/d/1Zd4IxNi5aU_TTHKsPUYxFnxy1XiIgfq-/view?usp=sharing" />
        <CardItem name='အနုပညာ(ဂီတ)' image={art_art} url="https://drive.google.com/file/d/1by-xaMv7jKAOEDHWoA_qcQI928gVstAB/view?usp=sharing" />
        <CardItem name='အနုပညာ(ပန်းချီ)' image={art_music} url="https://drive.google.com/file/d/1AOW-GcSd4xeCytcwL--YVI2wGee50_aJ/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards