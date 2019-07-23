import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect, } from 'react-redux';

import { getData } from '../../actions/data';
import Card from '../../components/Card';

class HomeScreen extends React.Component {
  componentDidMount() {
    const { getDataConnected } = this.props;
    getDataConnected();
  }

  _renderItem = ({ item }) => (
    <Card
      title={item.strDrink}
      image_url={item.strDrinkThumb}
    />
  );

  render() {
    const { data, errorMessage } = this.props;
    return (
      <View>
        {errorMessage && <Text>{errorMessage}</Text>}
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.idDrink}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  data: state.data.data,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = dispatch => ({
  getDataConnected: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);