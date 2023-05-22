import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
return (

    <section className="section" id="about">
      <Title title='NELER' subTitle='YAPIYORUZ'/>


    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={aboutImg}
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>Bizi keşfedin</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
          sapiente odio unde dolor?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
          sapiente odio unde dolor?
        </p>
        <a href="#" className="btn">
          DEVAMI
        </a>
      </article>
    </div>
  </section>
)


}

export default About;