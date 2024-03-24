import realMadridJerseyPic from "../assets/Real Madrid jersey pic.webp";
import fcBarcelonaJerseyPic from "../assets/fc barcelona jersey pic.png";
import manUnitedJerseyPic from "../assets/Manchester United home jersey.avif";
import liverpoolJerseyPic from "../assets/mohamed-salah-liverpool-2023-24-stadium-home-mens-dri-fit-soccer-jersey-qmNTQN.jpeg";
import psgJerseyPic from "../assets/shopping.webp";
import bayernMunichJerseyPic from "../assets/munich__52325.jpg";

interface JerseyData {
  id: number;
  name: string;
  league: string;
  img: string;
  price: string;
}

export const jerseysData: JerseyData[] = [
  {
    id: 1,
    name: "Real Madrid Home Jersey",
    league: "La Liga",
    img: realMadridJerseyPic,
    price: "$90",
  },
  {
    id: 2,
    name: "FC Barcelona Home Jersey",
    league: "La Liga",
    img: fcBarcelonaJerseyPic,
    price: "$90",
  },
  {
    id: 3,
    name: "Manchester United Home Jersey",
    league: "Premier League",
    img: manUnitedJerseyPic,
    price: "$90",
  },
  {
    id: 4,
    name: "Liverpool FC Home Jersey",
    league: "Premier League",
    img: liverpoolJerseyPic,
    price: "$90",
  },
  {
    id: 5,
    name: "Paris Saint-Germain Home Jersey",
    league: "Ligue 1",
    img: psgJerseyPic,
    price: "$90",
  },
  {
    id: 6,
    name: "Bayern Munich Away Jersey",
    league: "Bundesliga",
    img: bayernMunichJerseyPic,
    price: "$90",
  },
];
