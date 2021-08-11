import React, {Component, Suspense} from 'react';
import { connect } from 'react-redux';
import listingActions from '../../../actions/listingActions';
import ListingComponent from '../../presentational/ListingComponent/ListingComponent';

class ListingContainer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.loadPizzas();
    }

    addToBasketHandler = (data) => {
        this.props.pizzaSelected(data)
    }

    render(){
        const { data, classes } = this.props;
        return (
            <div className="ListingContainer">
                {
                    (typeof(data) !== 'undefined' && data.products !== null && data.products.length) && 
                        <ListingComponent addToBasketHandler={this.addToBasketHandler} {...data} classes={classes} />
                        
                }
            </div>
        );
    }
}

function mapStateToProps(state /*, ownProps*/){

  return {
    data: state.listingReducer,
    cartItems: state.listingReducer.cartItems
  };
}

function mapDispatchToProps(dispatch){
    return {
        loadPizzas: ()=> dispatch(listingActions.loadPizza()),
        pizzaSelected: (data)=> dispatch(listingActions.pizzaSelected(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer);