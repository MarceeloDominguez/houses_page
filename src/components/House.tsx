interface House {
  id: number;
  name: string;
  description: string;
  size: number;
  maxPerson: number;
  price: number;
  image: string;
}

type Props = {
  house: House;
};

export default function House({ house }: Props) {
  const { name, image } = house;

  return (
    <div className="bg-white shadow-lg min-h-[500px] group">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full bg-red-500"
          src={image}
          alt="house-img"
        />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
