import React, {Component, Suspense} from 'react';
import { connect } from 'react-redux';
import bagActions from '../../../actions/bagActions';
import BagComponent from '../../presentational/BagComponent/BagComponent';
import listingActions from '../../../actions/listingActions';

class BagContainer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.loadBag();
    }

    remoteItemHandler = (item) => {
        this.props.removePizza({bagAction:'remove', data: item})
    }

    render(){

        return (
            <div className="BagContainer">
                <BagComponent {...this.props} remoteItemHandler={this.remoteItemHandler}/>
            </div>
        );
    }
}

function mapStateToProps(state /*, ownProps*/){

  return {
    data: state.bagReducer,
    cartItems: state.listingReducer.cartItems
  };
}

function mapDispatchToProps(dispatch){
    return {
        loadBag: ()=> dispatch(bagActions.loadBag()),
        removePizza: (data)=> dispatch(listingActions.pizzaSelected(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagContainer);