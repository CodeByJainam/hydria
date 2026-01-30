const ProductCard = ({ image, title, pack, link }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="h-72 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <img
          src={image}
          alt={title}
          className="h-60 object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-6 text-center">

        <h3 className="font-luxury text-lg tracking-wide text-gray-900 mb-1">
          {title}
        </h3>

        <p className="font-modern text-sm text-gray-500 mb-5">
          {pack}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <span className="relative inline-flex items-center justify-center px-8 py-2 text-xs font-modern tracking-widest text-green-700 border border-green-700 rounded-full overflow-hidden transition-all duration-500 group-hover:text-white">

            <span className="absolute inset-0 bg-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

            <span className="relative z-10">
              BUY NOW
            </span>
          </span>
        </a>
      </div>
      
    </div>
    
  );
};

export default ProductCard;
