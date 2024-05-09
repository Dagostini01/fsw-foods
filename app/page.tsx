import CategoryList from "./components/ui/category-list";
import Header from "./components/ui/header";
import Search from "./components/ui/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
    </>
  );
}
