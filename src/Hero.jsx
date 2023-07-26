import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Edison bulb unicorn four dollar toast, viral narwhal farm-to-table pug flannel 3 wolf moon. Flannel poke
            enamel pin tonx heirloom tousled. Cloud bread pop-up snackwave selvage, chia hashtag messenger bag big mood
            cliche distillery poke kogi. Post-ironic jean shorts vexillologist, kinfolk poutine swag pabst single-origin
            coffee paleo knausgaard.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
