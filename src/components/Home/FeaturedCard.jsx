import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedCard = ({ product }) => {
  const { name, image, price, _id } = product;

  const discount = parseInt((price * 30) / 100);

  return (
    <div className="flex justify-center items-center px-16 w-96 mx-auto">
      <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
        <div className="relative mx-3 my-3 flex h-60 overflow-hidden " href="#">
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover rounded-xl"
            src={image}
            alt="product image"
          />
          <div className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full  bg-gray-700 transition-all delay-100 duration-1000 hover:right-0 z-50  p-5">
            <div className="mt-2 mb-5  gap-16  flex flex-col justify-between ">
              <div className="">
                <h5 className="text-xl tracking-tight text-white">{name}</h5>

                <p className="text-3xl font-bold flex-grow text-white">
                  ${price}
                </p>
              </div>
              <Link
                to={`/products/${_id}`}
                className="  cursor-pointer font-semibold  rounded-md border  py-2 px-8 text-center text-gray-400   transition duration-150 ease-in-out hover:translate-y-1 hover:bg-gray-500 hover:text-white"
              >
                Details
              </Link>
            </div>
          </div>
          <svg
            className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            ${discount} less
          </span>
        </div>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  product: PropTypes.object,
};

export default FeaturedCard;
