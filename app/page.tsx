import { ChevronRightIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import CategoryList from "./components/ui/category-list";
import Header from "./components/ui/header";
import ProductList from "./components/ui/product-list";
import Search from "./components/ui/search";
import Image from "next/image";
import { db } from "./lib/prisma";
import PromoBanner from "./components/ui/promo-banner";
import RestaurantList from "./components/ui/restaurant-list";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src={"/promo-banner01.png"}
          alt="Até 30% de descontos em pizzas"
        />
      </div>
      <div className="space-y-1 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent"
          >
            Ver todos <ChevronRightIcon size={16} />{" "}
          </Button>
        </div>
        <ProductList products={products} />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src={"/promo-banner02.png"}
          alt="A partir de R$17,90 em lanches"
        />
      </div>
      <div className="space-y-1 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent"
          >
            Ver todos <ChevronRightIcon size={16} />{" "}
          </Button>
        </div>
        <RestaurantList />
      </div>
    </>
  );
};

export default Home;
