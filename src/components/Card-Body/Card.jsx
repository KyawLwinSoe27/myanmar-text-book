import React from 'react';
import Cards from './Cards';
import gradeOne from '../../assests/img/Grade_1.png';
import gradeTwo from '../../assests/img/Grade_2.png';
import gradeThree from '../../assests/img/Grade_3.png';
import gradeFour from '../../assests/img/Grade_4.png';
import gradeFive from '../../assests/img/Grade_5.png';
import gradeSix from '../../assests/img/Grade_6.png';
import gradeSeven from '../../assests/img/Grade_7.png';
import gradeEight from '../../assests/img/Grade_8.png';
import gradeNine from '../../assests/img/Grade_9.png';
import gradeTen from '../../assests/img/Grade_10.png';
import gradeEleven from '../../assests/img/Grade_11.png';
const card = () => {
  return (
    <>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
        <Cards name={'Grade-1 (သင်ရိုးသစ်)'} image={gradeOne} url="/grade_1"/>
        <Cards name={'Grade-2 (သင်ရိုးသစ်)'} image={gradeTwo} url="/grade_2"/>
        <Cards name={'Grade-3 (သင်ရိုးသစ်)'} image={gradeThree} url="/grade_3"/>
        <Cards name={'Grade-4 (သင်ရိုးသစ်)'} image={gradeFour} url="/grade_4"/>
        <Cards name={'Grade-5 (သင်ရိုးသစ်)'} image={gradeFive} url="/building"/>
        <Cards name={'Grade-6 (သင်ရိုးသစ်)'} image={gradeSix} url="/building"/>
        <Cards name={'Grade-7 (သင်ရိုးသစ်)'} image={gradeSeven} url="/building"/>
        <Cards name={'Grade-8 (သင်ရိုးဟောင်း)'} image={gradeSeven} url="/building"/>
        <Cards name={'Grade-9 (သင်ရိုးဟောင်း)'} image={gradeEight} url="/building"/>
        <Cards name={'Grade-10 (သင်ရိုးသစ်)'} image={gradeTen} url="/building"/>
        <Cards name={'Grade-10 (သင်ရိုးဟောင်း)'} image={gradeNine} url="/building"/>
        <Cards name={'Grade-11 (သင်ရိုးဟောင်း)'} image={gradeTen} url="/building"/>
        <Cards name={'Grade-11 (သင်ရိုးသစ်)'} image={gradeEleven} url="/building"/>
        </div>
    </>
  )
}

export default card