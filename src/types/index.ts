export type Brand = {
  image: string;
};

export interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

export type ServiceTabs = {
  label: string;
};

export type ServiceContent = {
  label: string;
  imageSrc: string;
  data: string[];
};

export type ServiceImage = {
    images: string[];
}


export type Features = {
  icon: string;
  title: string;
}