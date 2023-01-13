import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { Icon } from "@rneui/base";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        platform="android"
        containerStyle={{
          borderRadius: 10,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 40,
          marginRight: 40,
        }}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Search"
        placeholderTextColor="#888"
      />
      <View
        style={{
          margin: 25,
          textAlign: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            width: "85%",
            fontWeight: "bold",
            // paddingLeft: 40,
            textAlign: "left",
          }}
        >
          Annocements
        </Text>
        <Text
          style={{
            color: "green",
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
          }}
        >
          View all
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        style={{
          margin: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffefcc",
            padding: 10,
            borderRadius: 25,
            marginRight: 15,
          }}
        >
          <Icon
            color="tomato"
            containerStyle={{
              backgroundColor: "yellow",
              padding: 5,
              borderRadius: 5,
              margin: 5,
            }}
            disabledStyle={{}}
            iconProps={{}}
            iconStyle={{}}
            name="clock"
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onPress()")}
            size={40}
            type="feather"
          />
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 15 }}>
              Employees Are Expected To Clock...
            </Text>
            <Text style={{ color: "gray" }}>1 hour ago</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffcccc",
            padding: 10,
            borderRadius: 25,
            marginRight: 10,
          }}
        >
          <Icon
            color="red"
            containerStyle={{
              backgroundColor: "#f66",
              padding: 5,
              borderRadius: 5,
              margin: 5,
            }}
            disabledStyle={{}}
            iconProps={{}}
            iconStyle={{}}
            name="tree"
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onPress()")}
            size={40}
            type="font-awesome"
          />
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 15 }}>
              Employees Are Expected To Clock...
            </Text>
            <Text style={{ color: "gray" }}>1 hour ago</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#FFF",
          height: 10,
          margin: 3,
        }}
      ></View>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          margin: 20,
        }}
      >
        Welcome
      </Text>
      <ScrollView horizontal={true}>
        <View
          style={{
            width: 200,
            backgroundColor: "#f2f9fa",
            borderRadius: 10,
            borderColor: "cccfff",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 55 }}
            source={require("./assets/img/boy.png")}
          />
          <Text style={{ fontSize: 15 }}>Sahil</Text>
          <Text style={{ color: "gray" }}>X Designer \nJoined today</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const viewHeight = "100%";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    height: viewHeight,
    paddingTop: 50,
  },
});
