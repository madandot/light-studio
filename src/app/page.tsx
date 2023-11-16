import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SearchBar from "@/components/SearchBar";
import Communication from "@/components/Communication";
export default async function Home() {
   return (
      <main>
         <SearchBar />
         <Hero />
         <Products />
         <Communication />
      </main>
   );
}
