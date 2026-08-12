import Image from "next/image";

const phone = "34602034270";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("Hola, me gustaría reservar una mesa en SereKunda. ¿Tenéis disponibilidad?")}`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=serekundarestaurant@gmail.com&su=${encodeURIComponent("Reserva en SereKunda")}&body=${encodeURIComponent("Hola, me gustaría reservar una mesa.\n\nDía:\nHora:\nNúmero de personas:")}`;
const maps = "https://www.google.com/maps/search/?api=1&query=SereKunda+Restaurant+Carretera+de+Collblanc+128+L%27Hospitalet";
const reviews = "https://www.google.com/maps/search/?api=1&query=SereKunda+Restaurant+Collblanc";

const dishes = [
  { number: "01", name: "Maffé", description: "Pollo, arroz y una salsa de cacahuete que pide pan y silencio." },
  { number: "02", name: "Supa kanji", description: "Arroz, cordero y ocra. Cocina lenta, sabor profundo." },
  { number: "03", name: "Chep", description: "Arroz sabroso con pescado y verduras. Un plato que llena la mesa." },
];

const quotes = [
  { text: "Familiar, agradable, comida deliciosa, casera y recién hecha.", author: "Judit", source: "Tripadvisor" },
  { text: "Platos grandes y sabrosos. Muy amables. Recomendable para pasar un buen rato.", author: "Ruth", source: "Tripadvisor" },
  { text: "Muy buena comida, sobre todo la de pescado. Saludable y rica al mismo tiempo.", author: "Cliente verificado", source: "Tripadvisor" },
];

function Mark() {
  return <span className="mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Icon({ name }: { name: "whatsapp" | "pin" | "phone" | "utensils" | "star" }) {
  const paths = {
    whatsapp: <><path d="M12 21a9 9 0 1 0-7.8-4.5L3 21l4.65-1.2A9 9 0 0 0 12 21Z"/><path d="M8.6 7.6c.2-.5.4-.5.7-.5h.5l.8 2c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.8 1.5 2 2.6 3.6 3.2.3.1.5.1.7-.1l.9-1c.2-.2.4-.3.7-.1l1.9.9c.3.1.4.3.3.6-.2 1.1-1 2-2.1 2.2-1 .2-2.4-.1-4.3-1.1-1.4-.8-2.7-1.9-3.6-3.2-.8-1.1-1.5-2.6-1.3-3.8.1-.5.4-.9.9-1.2Z"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    phone: <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1.5-1.3 2.1c-3.8-1.5-6.8-4.5-8.3-8.3L9.5 8 8 4Z"/>,
    utensils: <><path d="M7 3v7M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c3 0 4 3 4 6v3h-4"/></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>,
  };
  return <svg className={`icon icon-${name}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#inicio" className="brand" aria-label="SereKunda, inicio">SERE<Mark />KUNDA</a>
        <nav aria-label="Navegación principal">
          <a href="#sabores">Qué se come</a>
          <a href="#opiniones">Opiniones</a>
          <a href="#visitanos">Dónde estamos</a>
        </nav>
        <a className="headerCta" href={whatsapp} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" /> Reservar
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="heroCopy">
          <p className="eyebrow">COCINA GAMBIANA · COLLBLANC</p>
          <h1>HAY SABORES QUE NO SE EXPLICAN.</h1>
          <p className="heroScript">Se prueban.</p>
          <p className="intro">Recetas de África Occidental hechas como en casa: sin atajos, con tiempo y con una mesa preparada para compartir.</p>
          <div className="heroActions">
            <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Quiero reservar</a>
            <a className="textLink" href="#sabores">Ver qué se cocina <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="heroVisual">
          <Image src="https://media.timeout.com/images/105516367/1920/1080/image.webp" alt="Plato servido en SereKunda" fill priority sizes="(max-width: 800px) 100vw, 52vw" />
          <div className="heroBadge"><strong>4,9</strong><span><Icon name="star" /> +50 reseñas</span></div>
          <p className="photoNote">Foto real de SereKunda</p>
        </div>
        <div className="ticker" aria-hidden="true"><span>GAMBIA EN COLLBLANC · GAMBIA EN COLLBLANC · GAMBIA EN COLLBLANC · </span></div>
      </section>

      <section className="manifesto">
        <p className="sectionIndex">01 / LA COCINA</p>
        <div className="manifestoText">
          <h2>La receta viene de lejos. El plato sale de aquí.</h2>
          <p>Yussef cocina los platos que aprendió de su madre. Comida gambiana casera, generosa y recién hecha, en un restaurante de barrio donde siempre cabe alguien más.</p>
        </div>
        <div className="pattern" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
      </section>

      <section className="dishes" id="sabores">
        <div className="sectionTop">
          <div><p className="sectionIndex light">02 / TRES PUERTAS DE ENTRADA</p><h2>EMPIEZA<br />POR AQUÍ.</h2></div>
          <p className="sectionLead">Si es tu primera vez con la cocina gambiana, estos nombres merecen un sitio en tu mesa.</p>
        </div>
        <div className="dishList">
          {dishes.map((dish) => (
            <article className="dish" key={dish.name}>
              <span>{dish.number}</span><h3>{dish.name}</h3><p>{dish.description}</p><Icon name="utensils" />
            </article>
          ))}
        </div>
        <p className="menuNote">La disponibilidad puede variar. Pregunta por los platos del día al reservar.</p>
      </section>

      <section className="storyGrid">
        <div className="storyImage first"><Image src="https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/53582/1500x750/466088.jpg" alt="Mesa preparada en SereKunda" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="storyCopy mango"><p className="sectionIndex">03 / VEN CON HAMBRE</p><h2>Una mesa sin protocolo.</h2><p>Pide para compartir, pregunta qué hay hoy y deja que la comida haga el resto.</p><a href={whatsapp} target="_blank" rel="noreferrer">Preguntar por WhatsApp</a></div>
        <div className="storyCopy cream"><p className="sectionIndex">04 / QUÉDATE UN RATO</p><h2>Comer bien también es bajar el ritmo.</h2><p>Platos recién hechos, conversación y un lugar donde la cocina no necesita disfrazarse.</p></div>
        <div className="storyImage second"><Image src="https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/53582/750x375/466089.jpg" alt="Plato preparado en el restaurante" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      </section>

      <section className="reviews" id="opiniones">
        <div className="reviewTitle"><p className="sectionIndex">05 / LO DICE LA MESA</p><h2>QUIEN VIENE,<br /><em>VUELVE.</em></h2><a href={reviews} target="_blank" rel="noreferrer">Ver reseñas en Google</a></div>
        <div className="quoteList">
          {quotes.map((quote, index) => (
            <a className="quote" href="https://www.tripadvisor.es/Restaurant_Review-g187497-d15855784-Reviews-SereKunda_Restaurant-Barcelona_Catalonia.html" target="_blank" rel="noreferrer" key={quote.author}>
              <div className="stars" aria-label="5 estrellas">★★★★★</div>
              <blockquote>“{quote.text}”</blockquote>
              <p>{quote.author} <span>· {quote.source}</span></p>
              <b aria-hidden="true">0{index + 1}</b>
            </a>
          ))}
        </div>
      </section>

      <section className="visit" id="visitanos">
        <div className="visitHeadline"><p className="sectionIndex light">06 / NOS VEMOS EN COLLBLANC</p><h2>LA PRÓXIMA<br />MESA PUEDE<br />SER LA TUYA.</h2></div>
        <div className="visitInfo">
          <a href={maps} target="_blank" rel="noreferrer"><Icon name="pin" /><span>Carretera de Collblanc, 128–130<br />L’Hospitalet de Llobregat</span></a>
          <a href="tel:+34602034270"><Icon name="phone" /><span>602 03 42 70</span></a>
          <div className="visitActions">
            <a className="button primary yellow" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Reservar por WhatsApp</a>
            <a className="button outline" href={gmail} target="_blank" rel="noreferrer">Escribir por email</a>
          </div>
        </div>
      </section>

      <footer>
        <a href="#inicio" className="footerBrand">SERE<Mark />KUNDA</a>
        <p>Cocina gambiana · Collblanc</p>
        <div><a href={maps} target="_blank" rel="noreferrer">Abrir mapa</a><a href="tel:+34931450349">931 45 03 49</a></div>
        <small>Imágenes del negocio publicadas en <a href="https://www.timeout.es/barcelona/es/restaurantes/serekunda" target="_blank" rel="noreferrer">Time Out</a> y <a href="https://www.privateaser.es/local/53582-serekunda-restaurant" target="_blank" rel="noreferrer">Privateaser</a>.</small>
      </footer>
    </main>
  );
}
