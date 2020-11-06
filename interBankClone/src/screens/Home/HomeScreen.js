import React, { useRef, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { Extrapolate } from "react-native-reanimated";

import * as S from './styles';

import supportAvatar from "../../assets/images/babi.png";

import Header from "../../components/Header/DefaultHeader";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import CardList from "../../components/CardList";

import { useAuth } from "../../contexts/auth";

const lifeStyleItems = [
  {
    image: { name: "lifestyle_house", width: 55, height: 34 },
    title: "Casa",
  },
  {
    image: { name: "lifestyle_entertainment", width: 55, height: 36 },
    title: "Entretenimento",
  },
  {
    image: { name: "lifestyle_technology", width: 29, height: 55 },
    title: "Tecnologia",
  },
  {
    image: { name: "lifestyle_mobility", width: 55, height: 23 },
    title: "Transporte",
  },
  {
    image: { name: "lifestyle_sport", width: 55, height: 55 },
    title: "Esporte",
  },
  {
    image: { name: "lifestyle_travel", width: 55, height: 38 },
    title: "Viagem",
  },
  {
    image: { name: "lifestyle_drugstore", width: 48, height: 55 },
    title: "Saúde",
  },
  {
    image: { name: "lifestyle_beauty", width: 41, height: 55 },
    title: "Beleza",
  },
  {
    image: { name: "lifestyle_fashion", width: 52, height: 55 },
    title: "Moda",
  },
];

export default function Home() {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef(null);

  function handleScrollToTop() {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  }

  return <View />;
}