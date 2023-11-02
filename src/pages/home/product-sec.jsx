import Card from "./card";
const Productsec = ({data}) => {
  const cards = data.map(card => <Card title={card.title} price={card.price} img={card.img}/>)

  return (
    <>
      <section class="product-sec-new">
        <div class="row">
          {cards}
        </div>
      </section>
    </>
  );
};

export default Productsec;
