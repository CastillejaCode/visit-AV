interface Props {
  src: string;
  p: string;
}

const Card = ({ src, p }: Props) => {
  return (
    <figure className="card relative rounded-lg ">
      <img src={src} alt="" className="aspect-[4/3] rounded-lg brightness-50" />
      <p className="absolute top-0 w-full px-4 py-2 text-center text-xl text-gray-100">
        {p}
      </p>
    </figure>
  );
};

export default Card;
