import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";
import {fetchProducts} from '../../tools/productActions';
import { bindActionCreators } from 'redux';
import PostData from '../../API/employes.json'; 

import './employee.css';
import img from '../.././img_avatar3.png';



class Dashboard extends Component {

  componentDidMount() {
    const {fetchProducts} = this.props;
    fetchProducts();
  }
  render() {
    const { error, loading, products } = this.props;;  

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {
          PostData.user.map ((user, i) => {
            return (
              <figure>
                <img src={img} />
                <h1>Name ={user.id}</h1>
                <h1>Id = {user.name}</h1>
                <h1>Age = {user.age}</h1>
                <h1>Gender = {user.gender}</h1>
                <h1>Email = {user.email}</h1>
                <h1>Phono No = {user.phoneNo}</h1>
              </figure>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.items,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProducts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
