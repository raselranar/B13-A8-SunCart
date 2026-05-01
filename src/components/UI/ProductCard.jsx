import { StarFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, brand, price, originalPrice, rating, image, category } =
    product;
  return (
    <Card className="shadow-xl p-0 pb-4 h-full hover:shadow-2xl">
      {/* top overlay */}
      <div className="absolute px-3 top-3 flex justify-between w-full">
        <Chip className="bg-accent text-white">
          -{Math.floor(((originalPrice - price) / originalPrice) * 100)}%
        </Chip>
        <Chip className="text-gray-600">{category}</Chip>
      </div>
      {/* image */}
      <Image
        src={image}
        width={300}
        className="object-cover w-full h-80"
        height={300}
        alt={name}
      />
      {/* Header */}
      <Card.Header className="text-white px-4">
        <p className="text-accent uppercase text-xs font-semibold">{brand}</p>
        <Card.Title className="font-semibold tracking-wide text-black/70 line-clamp-1 text-lg">
          {name}
        </Card.Title>
      </Card.Header>
      {/* Footer */}
      <Card.Footer className="flex items-start gap-4 flex-col px-4">
        {/* ratings */}
        <div className="flex flex-1 gap-4 items-center">
          <div className="flex gap-1">
            <StarFill className="text-yellow-400" />
            <StarFill className="text-yellow-400" />
            <StarFill className="text-yellow-400" />
            <StarFill className="text-yellow-400" />
            <StarFill className="text-gray-300" />
          </div>
          <div className="text-xs text-gray-500 font-semibold">{rating}</div>
        </div>

        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2 items-center">
            <p className="text-accent font-bold">${price}</p>
            <p className="text-gray-400 text-sm line-through">
              ${originalPrice}
            </p>
          </div>
          <Button>View Details</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
export default ProductCard;
