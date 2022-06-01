import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activate, deactivate } from '../store/cardSlice';
import CardCSS from './Card.module.css';

const Card = (props) => {
  const isCardActive = useSelector((state) => state.card.value);
  const dispatch = useDispatch();

  let image;
  switch (props.image) {
    case 1:
      image = CardCSS.image1;
      break;
    case 2:
      image = CardCSS.image2;
      break;
    case 3:
      image = CardCSS.image3;
      break;
    case 4:
      image = CardCSS.image4;
      break;
    case 5:
      image = CardCSS.image5;
      break;
    case 6:
      image = CardCSS.image6;
      break;
    case 7:
      image = CardCSS.image7;
      break;
    default:
      image = CardCSS.noImage;
      break;
  }

  const clickHandler = () => {
    isCardActive ? dispatch(deactivate()) : dispatch(activate());
    console.log(isCardActive);
  };

  return (
    <Fragment>
      <div
        onClick={clickHandler}
        className={`${CardCSS.inactiveCard} ${image} ${
          isCardActive && CardCSS.activeCard
        }`}
      >
        Card
      </div>
    </Fragment>
  );
};

export default Card;
