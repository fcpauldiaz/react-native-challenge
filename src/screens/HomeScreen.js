import React from 'react';
import { View, FlatList } from 'react-native';
import { connect, } from 'react-redux';

import { getData } from '../actions/data';
import Card from '../components/card';

class HomeScreen extends React.Component {
  state = {
    title: 'Welcome',
    data: []
  };
  componentDidMount() {
    this.props.getData();
  }

  _keyExtractor = (item, index) => item.idDrink;
  _renderItem = ({ item }) => (
    <Card
      title={item.strDrink}
      description={item.strDrink}
      image_url={item.strDrinkThumb}
    />
  );

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.props.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

 function mapStateToProps(state) {
   return {
     ...state,
     data: state.data.data,
   };
 }

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);