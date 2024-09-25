import styled from '@emotion/styled';
import imgHero from '../../img_icon/imgBgHero.png';

// ==============================================================
export const TITLE_SECTION = styled.section`
  max-width: 1520px;
  padding: 0 50px 0 50px;
  margin: 140px auto 0;
`;

export const HERO_DIV = styled.div`
  display: flex;
  margin-top: 50px;
  font-weight: 500;
`;
export const LEFT_HERO_DIV = styled.div`
  width: 430px;
  padding-right: 50px;
  h3 {
    font-family: Noto Serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    margin-top: 65px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    span {
      color: #40c3ba;
    }
  }
`;
export const LINK_LIST_UL = styled.ul`
  margin-top: 118px;
  li + li {
    margin-top: 50px;
  }
  a {
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40px;
    height: 40px;
    background-color: #cbcac4;
    color: #fff;
    transition: 0.5s all;
  }
`;

export const VK_A = styled.a`
  :hover {
    background-color: #306aff;
    border-radius: 50%;
  }
`;
export const WATS_A = styled.a`
  :hover {
    background-color: #30ff5d;
    border-radius: 50%;
  }
`;
export const SMS_A = styled.a`
  :hover {
    background-color: #000;
    border-radius: 50%;
  }
`;

export const CENTER_HERO_DIV = styled.div`
  position: relative;
  width: 460px;
  height: 720px;
  background-image: url(${imgHero});

  button {
    position: absolute;
    bottom: 10px;
    left: -60px;
    background-color: #ff9f47;
    color: #fff;
    border-radius: 50%;
    border: none;
    height: 120px;
    width: 120px;
    font-size: 13px;
    transition: 0.3s all;
    :hover {
      background-color: #f47500;
    }
  }
`;
export const RIGHT_HERO_DIV = styled.div`
  width: 33%;
  padding-left: 40px;
  position: relative;
  p {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: 100px 0 100px 0;
    margin-top: 70px;
    font-weight: 400;
    font-size: 15px;
  }
  p span {
    color: #40c3ba;
  }
  ul {
    position: absolute;
    bottom: 5px;
    right: 5px;
    display: flex;
  }
  ul li {
    display: flex;
  }
  ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40px;
    height: 40px;
    background-color: #cbcac4;
    color: #fff;
    transition: 0.5s all;
  }
  ul li + li {
    margin-left: 40px;
  }
`;

export const BTN_TOP = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #f0f8ff00;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  transition: 0.5s all;
  span {
    transition: 0.5s all;
  }
  :hover span {
    border-radius: 50%;
  }
`;

export const ICON_TELEGRAM_SPAN = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #40c3ba;
  margin-right: 25px;
`;

export const EMAIL_A = styled.a`
  :hover {
    background-color: #000;
    border-radius: 50%;
  }
`;
export const SKYPE_A = styled.a`
  :hover {
    background-color: #2eb5ef;
    border-radius: 50%;
  }
`;

// ==============================================================

export const QUERIES_DIV = styled.div`
  margin-top: 120px;

  h3 {
    font-family: Noto Serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    margin-left: 80px;
  }
  h3::after {
    left: -55px;
    top: -5px;
  }
  h3::before {
    left: 340px;
    top: -5px;
  }
  h3::after,
  h3::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    height: 53px;
    width: 1px; /* Ширина полосы сбоку от заголовка */
    transform: rotate(90deg); /* Поворот на 90 градусов */
    background-color: #333; /* Цвет полосы */
  }

  ul li {
    width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ul li + li {
    margin-left: 30px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  h4 {
    margin-top: 30px;
    font-family: Noto Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
  }
  p {
    margin-top: 20px;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
export const QUERIES_LIST_TOP_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
export const QUERIES_LIST_BTM_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
