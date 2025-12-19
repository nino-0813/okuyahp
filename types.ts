import React from 'react';

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  url: string;
}

export interface MenuItem {
  name: string;
  price?: number;
  image?: string;
  description?: string;
  reading?: string;
  type?: string;
  prefecture?: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}