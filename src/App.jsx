import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import CardProduk from "./components/CardProduk";
import Footer from "./components/footer"


function App() {
  return (
    <>
      <Header />
      <Hero />
      <h1 className="judul"> Produk Best Seller</h1>
      <div className="cards-container">
        <CardProduk
          name="Nasi Padang"
          price={10000}
          description="Nasi Padang dengan lauk lengkap dan cita rasa khas Minang."
          image="https://cdn.grid.id/crop/0x0:0x0/700x465/photo/2021/12/26/16986136jpg-20211226020021.jpg"

        />

        <CardProduk
          name="Soto Ayam"
          price={10000}
          description="Soto ayam hangat dengan kuah gurih, cocok dinikmati kapan saja."
          image="https://asset.kompas.com/data/photo/2024/07/30/66a874b5caf8b.jpg"
        />

        <CardProduk
          name="Nasi Goreng" 
          price={10000} 
          description="Nasi goreng spesial dengan telur, ayam, dan bumbu rempah lezat."
          image="https://img.youtube.com/vi/i6yHVLgrELQ/maxresdefault.jpg"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
