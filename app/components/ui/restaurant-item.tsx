import { formatCurrency } from "@/app/helpers/price";
import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

interface RestaurantProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px]">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageURL}
          fill
          className="rounded-lg object-cover"
          alt={restaurant.name}
        />
        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-white px-2 py-[2px] text-black">
          <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold">5.0</span>
        </div>
        <Button
          className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
          size="icon"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={12} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) == 0
                ? "Entrega Grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={12} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
