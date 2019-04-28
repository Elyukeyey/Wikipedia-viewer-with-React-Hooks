import React from 'react';
import posed from 'react-pose';

const Container = posed.div({
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        delay: 150
    }
});

const Header = () => {
  return (
    <Container className="mb-5">
      <h1 className="text-success">Wikipedia search</h1>
    </Container>
  )
}

export default Header;