import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: "#home", text: "anasayfa" },
  { id: 2, href: "#about", text: "hakkimizda" },
  { id: 3, href: "#services", text: "uretim" },
  { id: 4, href: "#tours", text: "urunler" },
  { id: 5, href: "#contact", text: "iletisim" },

];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "KUMLAMA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-wallet fa-fw",
    title: "DOĞALGAZ BORULARI",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-wallet fa-fw",
    title: "GALVANİZ TRAPEZ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 4,
    icon: "fas fa-wallet fa-fw",
    title: "SANDVİÇ PANEL",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 5,
    icon: "fas fa-wallet fa-fw",
    title: "BAKLAVALI ÇETA SAC",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  
  {
    id: 6,
    icon: "fas fa-wallet fa-fw",
    title: "İNŞAAT DEMİRİ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Elektrot (Ark) Kaynağı",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis.",
    location:'kaynak',
    duration:7,
    cost:2100

  },
  {
    id: 2,
    image: tour2,
    date: "august 21th, 2023",
    title: "Gaz Altı Kaynak",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis.",
    location:'kaynak',
    duration:19,
    cost:4500

  },
  {
    id: 3,
    image: tour3,
    date: "july 26th, 2024",
    title: "Toz Altı Kaynak",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis.",
    location:'kaynak',
    duration:9,
    cost:1899

  },
  {
    id: 4,
    image: tour4,
    date: "January 21th, 2022",
    title: "Katı Hal Kaynağı",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis.",
    location:'kaynak',
    duration:21,
    cost:5499

  },
];
