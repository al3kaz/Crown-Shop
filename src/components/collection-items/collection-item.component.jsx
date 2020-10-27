import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

import {
   CollectionItemContainer,
   CollectionFooterContainer,
   ImageContainer,
   NameContainer,
   PriceContainer,
   CustomButtonContainer
} from './collection-item.style';


const CollectionItem = ({ item, addItem }) => {

   const { name, price, imageUrl, } = item;

   return (
      <CollectionItemContainer>
         <ImageContainer className="image" imageUrl={imageUrl} />
         <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
         </CollectionFooterContainer>
         <CustomButtonContainer onClick={() => addItem(item)} inverted >ADD TO CART</CustomButtonContainer>
      </CollectionItemContainer>
   );
}

const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);