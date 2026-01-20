import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '案例',
      href: getPermalink('/projects'),
    },
    {
      text: '文章',
      href: getBlogPermalink(),
    },
    {
      text: '关于',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  socialLinks: [],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Copyright © 2024 Shen Fei · All rights reserved.
  `,
};
