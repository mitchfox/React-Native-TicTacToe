import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';



var itemArray = new Array(9).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: "",

    }
  }

  drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({
        isCross: !itemArray[itemNumber]
      })
    }
    this.winGame();
  }

  chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  }

  resetGame = () => {
    itemArray.fill("empty");
    this.setState({
      winMessage: ""
    })
    // Force Update to Component
    this.forceUpdate();
  };

  winGame = () => {
    // Winning Game Logic
    if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2])) {
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[3] !== "empty") && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5])) {
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[6] !== "empty") && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[6] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6])) {
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[1] !== "empty") && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7])) {
      this.setState({ winMessage: (itemArray[1] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[2] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' wins!') })
    }
    else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[6])) {
      this.setState({ winMessage: (itemArray[2] ? 'Cross' : 'Circle').concat(' wins!') })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("./src/images/logo.png")}
          style={styles.logo}
        />

        <View style={styles.grid}>

          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(0)}
              >
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(1)}
              >
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(2)}
              >
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>


          </View>

          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(3)}
              >
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(4)}
              >
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(5)}
              >
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>


          </View>


          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(6)}
              >
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(7)}
              >
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(8)}
              >
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={'#FFF'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <View>
          <Button primary
            style={styles.resetButton}
            onPress={this.resetGame}
          >
            <Text style={{ color: '#FFF', fontWeight: 'bold', textTransform: 'uppercase', alignContent: 'center', }}>Reset Game</Text>
          </Button>

          <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1828',
    alignItems: 'center',

  },
  logo: {
    aspectRatio: 5,
    resizeMode: 'contain',
    marginTop: 100,
    marginBottom: 15,
    
  },
  resetButton: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 16,
    marginTop: 20,

  },
  grid: {
    borderWidth: 1,
    borderColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 25,
  },
  winMessage: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 40,
  }
});
