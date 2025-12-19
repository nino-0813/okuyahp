import { NewsItem, MenuItem, NavLink } from './types';

export const NEWS_ITEMS: NewsItem[] = [
  { id: 1, date: '2025.11.30更新', title: '12月／2026年年始営業案内', url: '#' },
  { id: 2, date: '2025.11.26更新', title: 'ビール入荷状況について', url: '#' },
  { id: 3, date: '2025.10.30更新', title: '11月の営業案内', url: '#' },
];

export const BLOG_ITEMS: NewsItem[] = [
  { id: 1, date: '2020.01.22更新', title: '手造り塩辛', url: '#' },
  { id: 2, date: '2019.12.19更新', title: 'ホームページをリニューアル！', url: '#' },
];

export const SLIDER_IMAGES = [
  '/images/hero/スクリーンショット 2025-12-17 0.53.46.png',
  '/images/menu/スクリーンショット 2025-12-17 1.40.30.png',
  '/images/menu/スクリーンショット 2025-12-17 1.26.01.png',
  '/images/menu/スクリーンショット 2025-12-17 1.12.21.png',
  '/images/menu/スクリーンショット 2025-12-17 1.06.05.png',
  '/images/menu/スクリーンショット 2025-12-17 0.59.12.png',
  '/images/menu/スクリーンショット 2025-12-17 0.59.53.png',
];

export const NAV_LINKS: NavLink[] = [
  { label: 'おくやのこだわり', href: '#omotenashi' },
  { label: '今月のおすすめ', href: '#osusume' },
  { label: 'メニュー・宴会', href: '#menu' },
  { label: 'お持ち帰り', href: '#takeout' },
  { label: 'お店のご紹介', href: '#contact' },
];

export const CONTACT_INFO = {
  address: '広島県府中市中須町1069－1',
  phone: '0847-44-9240',
  access: '広島県府中市',
  hours: '18:00〜23:00',
  closed: '不定休',
  lunch: 'ランチ・法要・お弁当などご予約にてご対応いたします',
};

// Data for Sections
export const MENU_CATEGORIES = [
  {
    title: "串焼き",
    description: "備長炭でじっくり焼き上げた自慢の串焼きです。",
    items: [
      { name: "もも", price: 180, image: "/images/menu/スクリーンショット 2025-12-17 1.05.47.png" },
      { name: "ねぎま", price: 190, image: "/images/menu/スクリーンショット 2025-12-17 1.06.05.png" },
      { name: "皮", price: 170, image: "/images/menu/スクリーンショット 2025-12-17 1.06.34.png" },
      { name: "ぼんじり", price: 180, image: "/images/menu/スクリーンショット 2025-12-17 1.06.58.png" },
      { name: "自家製つくね", price: 250, image: "/images/menu/スクリーンショット 2025-12-17 1.07.28.png" },
      { name: "ささみ（梅・わさび）", price: 200, image: "/images/menu/スクリーンショット 2025-12-17 1.07.50.png" },
    ]
  },
  {
    title: "オードブル",
    description: "法事・お祝いの席にご利用いただける、お持ち帰り用のオードブルをご用意しております。旬の食材をいかしたこだわりの一品を、ご自宅でもお楽しみいただけます。",
    items: [
      { name: "手造り塩辛オードブル", price: 480, description: "法事やお祝いの席で、お酒と一緒に楽しめる一品としておすすめです。", image: "/images/menu/スクリーンショット 2025-12-17 1.25.26.png" },
      { name: "出汁巻き卵オードブル", price: 580, description: "お子様からご年配の方まで、幅広い年代の方に喜ばれる一品です。", image: "/images/menu/スクリーンショット 2025-12-17 1.25.47.png" },
      { name: "鶏の唐揚げオードブル", price: 680, description: "パーティーやおもてなしの席で、みんなで楽しめる人気の一品です。", image: "/images/menu/スクリーンショット 2025-12-17 1.26.01.png" },
    ]
  },
  {
    title: "お造り",
    items: [
      { name: "三種盛（二人前）", description: "新鮮な旬の魚を使っています。", image: "/images/menu/スクリーンショット 2025-12-17 0.59.53.png" },
      { name: "天然霜降馬刺", image: "/images/menu/スクリーンショット 2025-12-17 1.19.01.png" },
      { name: "馬ハツ刺", image: "/images/menu/スクリーンショット 2025-12-17 1.22.50.png" },
      { name: "たこぶつ", image: "/images/menu/スクリーンショット 2025-12-17 0.59.59.png" },
      { name: "真鯛", image: "/images/menu/スクリーンショット 2025-12-17 1.00.06.png" },
      { name: "寒ぶり", image: "/images/menu/スクリーンショット 2025-12-17 1.00.10.png" },
      { name: "まぐろ", image: "/images/menu/スクリーンショット 2025-12-17 1.21.23.png" },
      { name: "かんぱち", image: "/images/menu/スクリーンショット 2025-12-17 1.21.28.png" },
      { name: "寒ざわら", image: "/images/menu/スクリーンショット 2025-12-17 1.21.34.png" },
      { name: "帆立", image: "/images/menu/スクリーンショット 2025-12-17 1.21.39.png" },
      { name: "平目", image: "/images/menu/スクリーンショット 2025-12-17 1.21.44.png" },
      { name: "鰹タタキ", image: "/images/menu/スクリーンショット 2025-12-17 1.00.17.png" },
    ]
  }
];

export const DRINK_MENU = [
  {
    title: "ビール・ハイボール",
    items: [
      { name: "サッポロ黒ラベル（生）", price: 580, image: "https://images.unsplash.com/photo-1608270586621-1a945f5cf72b?auto=format&fit=crop&w=400&q=80" },
      { name: "赤星ラガー（中瓶）", price: 650, image: "https://images.unsplash.com/photo-1608270586621-1a945f5cf72b?auto=format&fit=crop&w=400&q=80" },
      { name: "角ハイボール", price: 450, image: "https://images.unsplash.com/photo-1608270586621-1a945f5cf72b?auto=format&fit=crop&w=400&q=80" },
      { name: "ジンジャーハイボール", price: 500, image: "https://images.unsplash.com/photo-1608270586621-1a945f5cf72b?auto=format&fit=crop&w=400&q=80" },
    ]
  },
  {
    title: "日本酒・焼酎",
    items: [
      { 
        name: "八海山（一合）", 
        price: 800, 
        image: "/images/menu/スクリーンショット 2025-12-17 0.58.52.png",
        reading: "はっかいさん",
        type: "日本酒",
        prefecture: "新潟県"
      },
      { 
        name: "黒霧島（芋）", 
        price: 500, 
        image: "/images/menu/スクリーンショット 2025-12-17 0.59.12.png",
        reading: "くろきりしま",
        type: "芋",
        prefecture: "宮崎県"
      },
      { 
        name: "いいちこ（麦）", 
        price: 500, 
        image: "/images/menu/スクリーンショット 2025-12-17 0.59.01.png",
        reading: "いいちこ",
        type: "麦",
        prefecture: "大分県"
      },
      { 
        name: "月の中（芋）", 
        price: 600, 
        image: "/images/menu/スクリーンショット 2025-12-17 0.58.44.png",
        reading: "つきんなか",
        type: "芋",
        prefecture: "宮崎県"
      },
    ]
  }
];

export const TAKEOUT_MENU = [
  { name: "焼き鳥盛り合わせ（5本）", price: 850, desc: "店長おまかせの5本セット" },
  { name: "焼き鳥盛り合わせ（10本）", price: 1600, desc: "パーティーに最適！" },
  { name: "たるすけ特製唐揚げ弁当", price: 800, desc: "ボリューム満点" },
  { name: "炭火焼き鳥重", price: 900, desc: "香ばしい炭の香り" },
];
