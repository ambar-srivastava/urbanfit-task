// images
import Logo from "../src/assets/img/header/ulogowhite.png";
import CreatineImg from "../src/assets/img/brands/creatine.png";
import WheyProteinImg from "../src/assets/img/brands/whey.png";
import MassImg from "../src/assets/img/brands/mass.png";
import BCAAsImg from "../src/assets/img/brands/bcaa.png";
import CaseinImg from "../src/assets/img/brands/casein.png";
import GlutamineImg from "../src/assets/img/brands/glutamine.png";
import FishOilImg from "../src/assets/img/brands/fishoil.png";
import PrerequisitesImg1 from "../src/assets/img/prerequisites/img1.png";
import PrerequisitesImg2 from "../src/assets/img/prerequisites/img2.png";
import PrerequisitesImg3 from "../src/assets/img/prerequisites/img3.png";
import PrerequisitesImg4 from "../src/assets/img/prerequisites/img4.png";
import JoinImg from "../src/assets/img/join/last.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import DumbellIcn from "../src/assets/img/brands/icons/dumbell.svg";
import VisionIcn from "../src/assets/img/vision/icons/vision.svg";
import PrerequisitesIcn from "../src/assets/img/prerequisites/icons/prerequisites-icn.svg";
import QuestionMarkIcn from "../src/assets/img/otherFinancials/icons/question-mark.svg";

export const header = {
  logo: Logo,
};

export const banner = {
  titlePart1: "Be your Own Boss",
  titlePart2: "– Profitable Business.",
  subtitle:
    "We have vast customer base already in pune with over 10,000 regular customer",
  textBtn: "Get Francise",
};

export const about = {
  icon: UsersIcn,
  title: "Why UrbanFit",
  subtitle1: `Owning a franchise not only will give you the opportunity to take charge of your own successful business but also allows you to be a part of the movement in the business of health supplements.`,
  subtitle2: `If you are accepted as a UrbanFit Franchise owner, you will be a partner of India’s fastest growing fitness tech brand and the most trustworthy name in the industry`,
  link: "Get Francise Now",
};

export const brands = {
  icon: DumbellIcn,
  title: "Brand Items",
  programs: [
    {
      image: CreatineImg,
      name: "Creatine",
    },
    {
      image: WheyProteinImg,
      name: "Whey Protein",
    },
    {
      image: MassImg,
      name: "Mass gainers",
    },
    {
      image: BCAAsImg,
      name: "BCAAs",
    },
    {
      image: CaseinImg,
      name: "Casein Protein",
    },
    {
      image: GlutamineImg,
      name: "Glutamine",
    },
    {
      image: FishOilImg,
      name: "Fish Oil",
    },
  ],
};

export const vision = {
  icon: VisionIcn,
  title: "Urbanfit Franchies Vision",
  plans: [
    {
      icon: "🛡",
      description:
        "We aim to bring the change in fitness industry by establishing network of state of the art health supplement stores",
      delay: 600,
    },
    {
      icon: "0",
      description:
        "There is no possibility of fake products with UrbanFit due to our vast tie network of premium supplement brands",
      delay: 800,
    },
    {
      icon: "🤝🏻",
      description:
        "Our priority will always be our customer. We aim to build trust, happiness and loyalty for our customers",
      delay: 1000,
    },
  ],
};

export const prerequisites = {
  icon: PrerequisitesIcn,
  title: "Prerequisites",
  testimonials: [
    {
      image: PrerequisitesImg1,
      message: "“People willing to donate time and resources to the business”",
    },
    {
      image: PrerequisitesImg2,
      message:
        "“People with long term vision and the determination to make it happen”",
    },
    {
      image: PrerequisitesImg3,
      message: "“Financial and logistical requirements and guidelines”",
    },
    {
      image: PrerequisitesImg4,
      message:
        "“A sound investor profile with sufficient back up and ability to sustain during adverse scenarios”",
    },
    {
      image: PrerequisitesImg1,
      message:
        "“Attractive space in a high footfall area with a minimum carpet area of 200 sq. ft - 500 sq. ft.”",
    },
    {
      image: PrerequisitesImg2,
      message:
        "“Willingness to adhere to high customer service standards set by UrbanFit.”",
    },
  ],
};

export const otherFinancials = {
  icon: QuestionMarkIcn,
  title: "Other Financials",
  accordions: [
    {
      question: "Franchise Fee 5 Lacs",
      answer:
        "Start your Franchise Business Under Rs.5 Lakh Now. Check out India's most wanted Franchise Opportunity Under Rs.5 Lakh Only",
    },
    {
      question: "Interiors 1800-2200/sqft",
      answer:
        "The would be franchisor should have minimum shop area of 200 sqft",
    },
    {
      question: "Stock 8-15 Lacs",
      answer:
        "Franchisor is only allowed to purchase stock from the parent company",
    },
    {
      question: "Brand Ambassador Fee* 1.5 Lacs",
      answer:
        "The Brand Ambassador Fee is around 1.5 lakh to perform at an event.",
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "Wanna join Us",
  subtitle:
    "We are looking for people who are ready and eager to work with us to successfully launch a franchise and smoothly operate it.",
  btnText: "get francise now",
};

export const footer = {
  logo: Logo,
  copyrightText: "All rights reserved. URBANFIT WELLNESS 2023.",
};
