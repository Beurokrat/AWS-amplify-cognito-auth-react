import { HeroContainer, HeroText, HeroImage } from './style';

const Home = () => {
  return (
    <div className='wrapper'>
      <HeroContainer>
        <HeroImage>
          <img alt='hero' src='./assets/hero.jpg' />
        </HeroImage>
        <HeroText>
          <div className='title'>
            <h1>
              Whereas a common understanding and freedoms is rights freedoms is.
            </h1>
          </div>
          <br></br>
          <h3>creative, engineer driven, global..</h3>
          <p className='text'>
            <b>Salesphere 🚀</b>, is a creative, engineer driven, global agency
            working on advancing the software, advertising and design
            communities to new heights. is a creative, engineer driven, global
            agency working on advancing the software, advertising and design
            communities to new heights.
          </p>
          <p className='text'>
            Advertising and design communities to new heights. is a creative,
            engineer driven, global agency working on advancing the software,
            advertising and design communities to new heights.
          </p>
        </HeroText>
      </HeroContainer>
    </div>
  );
};

export default Home;
