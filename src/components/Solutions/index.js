import styled from 'styled-components';
export const Design = () => {
  return (
    <Card>
      <h3> Brainstorm.. Try .. error! </h3>
      <p className='text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sapiente.
      </p>
      <p className='text'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
        provident quasi tenetur iste voluptates sint.
      </p>
    </Card>
  );
};

export const Development = () => {
  return (
    <Card>
      <h3> Easy Peasy </h3>
      <p className='text'>
        Advertising and design communities to new heights. is a creative,
        engineer driven, global agency working on advancing the software,
        advertising and design communities to new heights.
      </p>
      <p className='text'>
        Advertising and design communities to new heights. is a creative,
        engineer driven, global agency working on advancing the software,
        advertising and design communities to new heights.
      </p>
    </Card>
  );
};

export const Marketing = () => {
  return (
    <Card>
      <h3> Consistency is the key! </h3>
      <p className='text'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
        necessitatibus quis omnis quaerat alias atque praesentium facere cumque
        corporis harum.
      </p>
      <p className='text'>Lorem ipsum dolor sit amet.o new heights.</p>
    </Card>
  );
};

const Card = styled.div`
  margin-top: 30px;
  padding: 20px 30px;
  border-radius: 7px;
`;
