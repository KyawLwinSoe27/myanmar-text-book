import React from 'react';
import CardItem from './CardItem';

//
import myanmar from '../../assests/grade_7_books_cover/myanmar.jpg';
import english from '../../assests/grade_7_books_cover/english.jpg';
import math1 from '../../assests/grade_7_books_cover/math1.jpg';
import math2 from '../../assests/grade_7_books_cover/math2.jpg';
import science from '../../assests/grade_7_books_cover/science.jpg';
import geography from '../../assests/grade_7_books_cover/geography.jpg';
import hist from '../../assests/grade_7_books_cover/history.jpg';
import civil from '../../assests/grade_7_books_cover/civil.jpg';
import life from '../../assests/grade_7_books_cover/life.jpg';
import art_art from '../../assests/grade_7_books_cover/art_art.jpg';
import art_music from '../../assests/grade_7_books_cover/art_music.jpg';
import physical from '../../assests/grade_7_books_cover/physical.jpg';
//
const Cards = () => {
  return (
    <>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <CardItem name='မြန်မာစာ' image={myanmar} url="https://drive.google.com/file/d/1oemTnyid_st5t_BIzCw2pNH92_h2g1Mp/view?usp=sharing" />
        <CardItem name='အင်္ဂလိပ်စာ' image={english} url="https://drive.google.com/file/d/14yWk5P1AyHantbc1cfLowlUl_-o6bVbF/view?usp=sharing" />
        <CardItem name='သင်္ချာ ၁' image={math1} url="https://drive.google.com/file/d/1_25PsoV1fOAYTGbJKZKtPIqoes4fakzW/view?usp=sharing" />
        <CardItem name='သင်္ချာ ၂' image={math2} url="https://drive.google.com/file/d/1bsgaxq9obJS9r7n8kDSf833DRKis__p5/view?usp=sharing" />
        <CardItem name='သိပ္ပံ' image={science} url="https://drive.google.com/file/d/1bwsg6TdW5ZuaeUdpWd0okCm1StV-0o1F/view?usp=sharing" />
        <CardItem name='ပထဝီဝင်' image={geography} url="https://drive.google.com/file/d/12O6kbLnRcfCZr0lYOqZTAUbIlQg56hOL/view?usp=sharing" />
        <CardItem name='သမိုင်း' image={hist} url="https://drive.google.com/file/d/1wm_CIWK7YsBfxYfv68wqt2LbaqSu0vvN/view?usp=sharing" />
        <CardItem name='စာရိတ္တနှင့်ပြည်သူ့နီတိ' image={civil} url="https://drive.google.com/file/d/1WmGMvL460RRv5uVh0I21OJ37_m08ih_U/view?usp=sharing" />
        <CardItem name='ဘဝတွက်တာ ကျွမ်းကျင်စရာ' image={life} url="https://drive.google.com/file/d/1ZvEkafyzAmis-smibCE6nOqhdVqoTE1-/view?usp=sharing" />
        <CardItem name='ကာယပညာ' image={physical} url="https://drive.google.com/file/d/1lrY2uB_eXvPKoixO0HCkF-A1NfkFwVmD/view?usp=sharing" />
        <CardItem name='အနုပညာ (ပန်းချီ)' image={art_art} url="https://drive.google.com/file/d/1NdZ963sbSrx-49Yt8-YA9_taX2RIfbxs/view?usp=sharing" />
        <CardItem name='အနုပညာ (ဂီတ)' image={art_music} url="https://drive.google.com/file/d/1nwb90CjV89Xgwou6W5KXNwW_bDLgUJLt/view?usp=sharing" />
    </div>
    </>
    
  )
}

export default Cards