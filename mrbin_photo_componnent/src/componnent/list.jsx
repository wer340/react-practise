import React from "react";
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
const Actress=[ {
    name:'Zoe Kravitz' ,
    src:'./images/100_Zoe_Kravitz.jpg' 
    }, 
    {
    name:'Megan Fox' ,
    src:'./images/10_Megan_Fox.jpg' 
    }, 
    {
    name:'Emily Blunt' ,
    src:'./images/11_Emily_Blunt.jpg' 
    }, 
    {
    name:'Angelina Jolie' ,
    src:'./images/12_Angelina_Jolie.jpg' 
    }, 
    {
    name:'Jessica Alba' ,
    src:'./images/13_Jessica_Alba.jpg' 
    }, 
    {
    name:'Kristen Stewart' ,
    src:'./images/14_Kristen_Stewart.jpg' 
    }, 
    {
    name:'Brie Larson' ,
    src:'./images/15_Brie_Larson.jpg' 
    }, 
    {
    name:'Lea Seydoux' ,
    src:'./images/16_Lea_Seydoux.jpg' 
    }, 
    {
    name:'Rachel McAdams' ,
    src:'./images/17_Rachel_McAdams.jpg' 
    }, 
    {
    name:'Ellen Pompeo' ,
    src:'./images/18_Ellen_Pompeo.jpg' 
    }, 
    {
    name:'Mila Kunis' ,
    src:'./images/19_Mila_Kunis.jpg' 
    }, 
    {
    name:'Scarlett Johansson' ,
    src:'./images/1_Scarlett_Johansson.jpg' 
    }, 
    {
    name:'Paula Patton' ,
    src:'./images/20_Paula_Patton.jpg' 
    }, 
    {
    name:'Eva Green' ,
    src:'./images/21_Eva_Green.jpg' 
    }, 
    {
    name:'Chloe Grace Moretz' ,
    src:'./images/22_Chloe_Grace_Moretz.jpg' 
    }, 
    {
    name:'Zendaya' ,
    src:'./images/23_Zendaya.jpg' 
    }, 
    {
    name:'Mary Elizabeth Winstead' ,
    src:'./images/24_Mary_Elizabeth_Winstead.jpg' 
    }, 
    {
    name:'Hailee Steinfeld' ,
    src:'./images/25_Hailee_Steinfeld.jpg' 
    }, 
    {
    name:'Elisabeth Moss' ,
    src:'./images/26_Elisabeth_Moss.jpg' 
    }, 
    {
    name:'Haley Bennett' ,
    src:'./images/27_Haley_Bennett.jpg' 
    }, 
    {
    name:'Olga Kurylenko' ,
    src:'./images/28_Olga_Kurylenko.jpg' 
    }, 
    {
    name:'Rebecca Ferguson' ,
    src:'./images/29_Rebecca_Ferguson.jpg' 
    }, 
    {
    name:'Jennifer Lawrence' ,
    src:'./images/2_Jennifer_Lawrence.jpg' 
    }, 
    {
    name:'Anna Paquin' ,
    src:'./images/30_Anna_Paquin.jpg' 
    }, 
    {
    name:'Alicia Vikander' ,
    src:'./images/31_Alicia_Vikander.jpg' 
    }, 
    {
    name:'Michelle Monaghan' ,
    src:'./images/32_Michelle_Monaghan.jpg' 
    }, 
    {
    name:'Emmy Rossum' ,
    src:'./images/33_Emmy_Rossum.jpg' 
    }, 
    {
    name:'Mia Wasikowska' ,
    src:'./images/34_Mia_Wasikowska.jpg' 
    }, 
    {
    name:'Britt Robertson' ,
    src:'./images/35_Britt_Robertson.jpg' 
    }, 
    {
    name:'Jessica Biel' ,
    src:'./images/36_Jessica_Biel.jpg' 
    }, 
    {
    name:'Sienna Miller' ,
    src:'./images/37_Sienna_Miller.jpg' 
    }, 
    {
    name:'Viola Davis' ,
    src:'./images/38_Viola_Davis.jpg' 
    }, 
    {
    name:'Amber Heard' ,
    src:'./images/39_Amber_Heard.jpg' 
    }, 
    {
    name:'Emma Watson' ,
    src:'./images/3_Emma_Watson.jpg' 
    }, 
    {
    name:'Teresa Palmer' ,
    src:'./images/40_Teresa_Palmer.jpg' 
    }, 
    {
    name:'Olivia Munn' ,
    src:'./images/41_Olivia_Munn.jpg' 
    }, 
    {
    name:'Camilla Belle' ,
    src:'./images/42_Camilla_Belle.jpg' 
    }, 
    {
    name:'Alexa Davalos' ,
    src:'./images/43_Alexa_Davalos.jpg' 
    }, 
    {
    name:'Gemma Arterton' ,
    src:'./images/44_Gemma_Arterton.jpg' 
    }, 
    {
    name:'Olivia Wilde' ,
    src:'./images/45_Olivia_Wilde.jpg' 
    }, 
    {
    name:'Odeya Rush' ,
    src:'./images/46_Odeya_Rush.jpg' 
    }, 
    {
    name:'Elisha Cuthbert' ,
    src:'./images/47_Elisha_Cuthbert.jpg' 
    }, 
    {
    name:'Abigail Breslin' ,
    src:'./images/48_Abigail_Breslin.jpg' 
    }, 
    {
    name:'Sandra Bullock' ,
    src:'./images/49_Sandra_Bullock.jpg' 
    }, 
    {
    name:'Anne Hathaway' ,
    src:'./images/4_Anne_Hathaway.jpg' 
    }, 
    {
    name:'Amanda Seyfried' ,
    src:'./images/50_Amanda_Seyfried.jpg' 
    }, 
    {
    name:'Nicole Kidman' ,
    src:'./images/51_Nicole_Kidman.jpg' 
    }, 
    {
    name:'Blake Lively' ,
    src:'./images/52_Blake_Lively.jpg' 
    }, 
    {
    name:'Ellen Page' ,
    src:'./images/53_Ellen_Page.jpg' 
    }, 
    {
    name:'Elle Fanning' ,
    src:'./images/54_Elle_Fanning.jpg' 
    }, 
    {
    name:'Emilia Clarke' ,
    src:'./images/55_Emilia_Clarke.jpg' 
    }, 
    {
    name:'Cara Delevingne' ,
    src:'./images/56_Cara_Delevingne.jpg' 
    }, 
    {
    name:'Rebecca Hall' ,
    src:'./images/57_Rebecca_Hall.jpg' 
    }, 
    {
    name:'Rachel Bilson' ,
    src:'./images/58_Rachel_Bilson.jpg' 
    }, 
    {
    name:'Ana de Armas' ,
    src:'./images/59_Ana_de_Armas.jpg' 
    }, 
    {
    name:'Natalie Portman' ,
    src:'./images/5_Natalie_Portman.jpg' 
    }, 
    {
    name:'Zoey Deutch' ,
    src:'./images/60_Zoey_Deutch.jpg' 
    }, 
    {
    name:'Jaimie Alexander' ,
    src:'./images/61_Jaimie_Alexander.jpg' 
    }, 
    {
    name:'Jordana Brewster' ,
    src:'./images/62_Jordana_Brewster.jpg' 
    }, 
    {
    name:'Felicity Jones' ,
    src:'./images/63_Felicity_Jones.jpg' 
    }, 
    {
    name:'Kaya Scodelario' ,
    src:'./images/64_Kaya_Scodelario.jpg' 
    }, 
    {
    name:'Alice Braga' ,
    src:'./images/65_Alice_Braga.jpg' 
    }, 
    {
    name:'Natalie Martinez' ,
    src:'./images/66_Natalie_Martinez.jpg' 
    }, 
    {
    name:'Dakota Fanning' ,
    src:'./images/67_Dakota_Fanning.jpg' 
    }, 
    {
    name:'Katheryn Winnick' ,
    src:'./images/68_Katheryn_Winnick.jpg' 
    }, 
    {
    name:'Summer Glau' ,
    src:'./images/69_Summer_Glau.jpg' 
    }, 
    {
    name:'Emma Stone' ,
    src:'./images/6_Emma_Stone.jpg' 
    }, 
    {
    name:'Vanessa Kirby' ,
    src:'./images/70_Vanessa_Kirby.jpg' 
    }, 
    {
    name:'Vanessa Hudgens' ,
    src:'./images/71_Vanessa_Hudgens.jpg' 
    }, 
    {
    name:'Lily Collins' ,
    src:'./images/72_Lily_Collins.jpg' 
    }, 
    {
    name:'Zoe Saldana' ,
    src:'./images/73_Zoe_Saldana.jpg' 
    }, 
    {
    name:'AnnaSophia Robb' ,
    src:'./images/74_AnnaSophia_Robb.jpg' 
    }, 
    {
    name:'Maggie Grace' ,
    src:'./images/75_Maggie_Grace.jpg' 
    }, 
    {
    name:'Dakota Johnson' ,
    src:'./images/76_Dakota_Johnson.jpg' 
    }, 
    {
    name:'Selena Gomez' ,
    src:'./images/77_Selena_Gomez.jpg' 
    }, 
    {
    name:'Maggie Q' ,
    src:'./images/78_Maggie_Q.jpg' 
    }, 
    {
    name:'Michelle Rodriguez' ,
    src:'./images/79_Michelle_Rodriguez.jpg' 
    }, 
    {
    name:'Gal Gadot' ,
    src:'./images/7_Gal_Gadot.jpg' 
    }, 
    {
    name:'Emily VanCamp' ,
    src:'./images/80_Emily_VanCamp.jpg' 
    }, 
    {
    name:'Lauren Cohan' ,
    src:'./images/81_Lauren_Cohan.jpg' 
    }, 
    {
    name:'Emily Ratajkowski' ,
    src:'./images/82_Emily_Ratajkowski.jpg' 
    }, 
    {
    name:'Anna Kendrick' ,
    src:'./images/83_Anna_Kendrick.jpg' 
    }, 
    {
    name:'Genesis Rodriguez' ,
    src:'./images/84_Genesis_Rodriguez.jpg' 
    }, 
    {
    name:'Odette Annable' ,
    src:'./images/85_Odette_Annable.jpg' 
    }, 
    {
    name:'Emily Browning' ,
    src:'./images/86_Emily_Browning.jpg' 
    }, 
    {
    name:'Nina Dobrev' ,
    src:'./images/87_Nina_Dobrev.jpg' 
    }, 
    {
    name:'Victoria Justice' ,
    src:'./images/88_Victoria_Justice.jpg' 
    }, 
    {
    name:'Saoirse Ronan' ,
    src:'./images/89_Saoirse_Ronan.jpg' 
    }, 
    {
    name:'Alexandra Daddario' ,
    src:'./images/8_Alexandra_Daddario.jpg' 
    }, 
    {
    name:'Jessica Lucas' ,
    src:'./images/90_Jessica_Lucas.jpg' 
    }, 
    {
    name:'Caitlin Stasey' ,
    src:'./images/91_Caitlin_Stasey.jpg' 
    }, 
    {
    name:'Yvonne Strahovski' ,
    src:'./images/92_Yvonne_Strahovski.jpg' 
    }, 
    {
    name:'Astrid Berges-Frisbey' ,
    src:'./images/93_Astrid_Berges-Frisbey.jpg' 
    }, 
    {
    name:'Malin Akerman' ,
    src:'./images/94_Malin_Akerman.jpg' 
    }, 
    {
    name:'Lily James' ,
    src:'./images/95_Lily_James.jpg' 
    }, 
    {
    name:'Elizabeth Gillies' ,
    src:'./images/96_Elizabeth_Gillies.jpg' 
    }, 
    {
    name:'Keira Knightley' ,
    src:'./images/97_Keira_Knightley.jpg' 
    }, 
    {
    name:'Cobie Smulders' ,
    src:'./images/98_Cobie_Smulders.jpg' 
    }, 
    {
    name:'Melissa Benoist' ,
    src:'./images/99_Melissa_Benoist.jpg' 
    }, 
    {
    name:'Margot Robbie' ,
    src:'./images/9_Margot_Robbie.jpg' 
    }
   ];
shuffle(Actress)
export default Actress;