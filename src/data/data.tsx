import house1 from "../assets/houses/house-1.png";
import house2 from "../assets/houses/house-2.png";
import house3 from "../assets/houses/house-3.png";
import house4 from "../assets/houses/house-4.png";
import house5 from "../assets/houses/house-5.png";
import house6 from "../assets/houses/house-6.png";
import house7 from "../assets/houses/house-7.png";
import house8 from "../assets/houses/house-8.png";

import { FaWifi, FaBath, FaParking, FaSwimmingPool } from "react-icons/fa";

export const houseData = [
  {
    id: 1,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 7,
    price: 190,
    image: house1,
    pets: false,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 2,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 3,
    price: 115,
    image: house2,
    pets: true,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 3,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 4,
    price: 135,
    image: house3,
    pets: true,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 4,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 2,
    price: 115,
    image: house4,
    pets: true,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 5,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 5,
    price: 215,
    image: house5,
    pets: false,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 6,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 8,
    price: 110,
    image: house6,
    pets: false,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 7,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 6,
    price: 118,
    image: house7,
    pets: true,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 8,
    name: "cabins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",

    maxPerson: 1,
    price: 150,
    image: house8,
    pets: false,
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    ],
  },
];
