interface Slides {
  title: string;
  btnText: string;
  image: string;
}

type Props = {
  slide: Slides;
};

export default function Slides({ slide }: Props) {
  const { title, btnText, image } = slide;

  return (
    <>
      <div className="z-20 text-white text-center">
        <p className="uppercase font-third tracking-[6px] mb-5">
          Just Enjoy end relax
        </p>
        <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
          {title}
        </h1>
        <button className="btn btn-lg bg-primary mx-auto">{btnText}</button>
      </div>
      <div className="absolute top-0 w-full h-full">
        <img
          className="object-cover h-full w-full"
          src={image}
          alt="img_slide"
        />
      </div>
      <div className="absolute w-full h-full bg-black/70" />
    </>
  );
}
