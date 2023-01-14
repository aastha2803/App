import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { SearchBar, Button } from "@rneui/themed";
import { Icon } from "@rneui/base";
import React from "react";

import { Tab, TabView } from "@rneui/themed";

export default function App() {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <ScrollView horizontal={false}>
        <View style={styles.container}>
          <View
            style={{
              marginLeft: 40,
              marginRight: 20,
              flexDirection: "row",
              alignItems: 'center'
            }}
          >
            <View style={{ width: "85%", marginRight: 10 }}>
              <SearchBar
                platform="android"
                containerStyle={{
                  borderRadius: 10,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                inputContainerStyle={{}}
                inputStyle={{}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                placeholder="Search"
                placeholderTextColor="#888"
              />
            </View>
            <Icon
              name="chat"
              color={"green"}
              type="material-community"
              size={40}
            />
          </View>
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
                  alignContent: "center",
                  justifyContent: "center",
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
                  alignContent: "center",
                  justifyContent: "center",
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
                width: 125,
                backgroundColor: "#ffffe6",
                borderRadius: 25,
                borderColor: "#ffff80",
                borderWidth: 1,
                alignItems: "center",
                padding: 15,
                margin: 20,
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: "#ffd9b3",
                  padding: 10,
                  borderredius: 100,
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/boy.png")}
                />
              </View>
              <Text style={{ fontSize: 18, lineHeight: 20 }}>Sahil</Text>
              <Text
                style={{ color: "gray", textAlign: "center", lineHeight: 20 }}
              >
                UX Designer Joined today
              </Text>
            </View>
            <View
              style={{
                width: 125,
                backgroundColor: "#f2f9fa",
                borderRadius: 25,
                borderColor: "#66ccff",
                borderWidth: 1,
                alignItems: "center",
                padding: 15,
                margin: 20,
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: "#cceeff",
                  padding: 10,
                  borderredius: 100,
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/girl.webp")}
                />
              </View>
              <Text style={{ fontSize: 18, lineHeight: 20 }}>Megha</Text>
              <Text
                style={{ color: "gray", textAlign: "center", lineHeight: 20 }}
              >
                UX Designer Joined today
              </Text>
            </View>
            <View
              style={{
                width: 125,
                backgroundColor: "#ffe6e6",
                borderRadius: 25,
                borderColor: "#ffb3b3",
                borderWidth: 1,
                alignItems: "center",
                padding: 15,
                margin: 20,
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: "#ffb3b3",
                  padding: 10,
                  borderredius: 100,
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 50, height: 55, marginBottom: 10 }}
                  source={require("./assets/img/man.webp")}
                />
              </View>
              <Text style={{ fontSize: 18, lineHeight: 20 }}>Ravi</Text>
              <Text
                style={{ color: "gray", textAlign: "center", lineHeight: 20 }}
              >
                UX Designer Joined toda
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            padding: 10,
            marginBottom: 10,
            margin: 20,
            borderRadius: 25,
            backgroundColor: "#e6f2ff",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            color="#66b3ff"
            containerStyle={{
              padding: 5,
              alignContent: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            name="clock"
            size={50}
            type="material-community"
          />
          <View style={{ margin: 5 }}>
            <Text>03/01/23</Text>
            <Text>Clock In - hh:mm AM</Text>
            <Text>Clock Out - hh:mm PM</Text>
          </View>
          <Button
            buttonStyle={{
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 120,
            }}
          >
            Clock In
          </Button>

          <Icon
            color="#66b3ff"
            containerStyle={{
              padding: 5,
              alignContent: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            name="right"
            size={20}
            type="antdesign"
          />
        </View>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "#e6e6ff",
            height: 3,
          }}
        >
          <Tab.Item
            title="Home"
            titleStyle={{ fontSize: 12, color: "green" }}
            icon={{ name: "home", type: "entypo", color: "green" }}
          />
          <Tab.Item
            title="My Space"
            titleStyle={{ fontSize: 12, color: "gray" }}
            icon={{ name: "user-secret", type: "fontisto", color: "gray" }}
          />
          <Tab.Item
            title="Notification"
            titleStyle={{ fontSize: 12, color: "gray" }}
            icon={{ name: "notifications", type: "ionicon", color: "gray" }}
          />
        </Tab>
        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            margin: 20,
            padding: 20,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#fff",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 40,
            elevation: 3,
            backgroundColor: "#FFF",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, width: "70%" }}>
              My Team
            </Text>
            <Text
              style={{
                textAlign: "right",
                width: "30%",
                color: "green",
                textDecorationLine: "underline",
              }}
            >
              View All
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View
              style={{
                width: "25%",
              }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  backgroundColor: "#ffcccc",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/girl.webp")}
                />
              </View>
            </View>
            <Text style={{ width: "25%" }}>Rashmi</Text>
            <Text style={{ width: "25%", color: "gray" }}>Trainee</Text>
            <View style={{ width: "25%", flexDirection: "row" }}>
              <Icon
                name="dot-fill"
                type="octicon"
                color="#00cc00"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>Present</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View
              style={{
                width: "25%",
              }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  backgroundColor: "#ccccff",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/girl.webp")}
                />
              </View>
            </View>
            <Text style={{ width: "25%" }}>Manisha</Text>
            <Text style={{ width: "25%", color: "gray" }}>HR</Text>
            <View style={{ width: "25%", flexDirection: "row" }}>
              <Icon
                name="dot-fill"
                type="octicon"
                color="#00cc00"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>Present</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View
              style={{
                width: "25%",
              }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  backgroundColor: "#b3ffcc",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/boy.png")}
                />
              </View>
            </View>
            <Text style={{ width: "25%" }}>Abhishek</Text>
            <Text style={{ width: "25%", color: "gray" }}>Developer</Text>
            <View style={{ width: "25%", flexDirection: "row" }}>
              <Icon
                name="dot-fill"
                type="octicon"
                color="#00cc00"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>Present</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View
              style={{
                width: "25%",
              }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  backgroundColor: "#f2ccff",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/man.webp")}
                />
              </View>
            </View>
            <Text style={{ width: "25%" }}>Aditya</Text>
            <Text style={{ width: "25%", color: "gray" }}>Trainee</Text>
            <View style={{ width: "25%", flexDirection: "row" }}>
              <Icon
                name="dot-fill"
                type="octicon"
                color="#00cc00"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>Present</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View
              style={{
                width: "25%",
              }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  backgroundColor: "#fff0b3",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 55 }}
                  source={require("./assets/img/boy.png")}
                />
              </View>
            </View>
            <Text style={{ width: "25%" }}>Neeraj</Text>
            <Text style={{ width: "25%", color: "gray" }}>HR</Text>
            <View style={{ width: "25%", flexDirection: "row" }}>
              <Icon
                name="dot-fill"
                type="octicon"
                color="#00cc00"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>Present</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            margin: 20,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#fff",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 40,
            elevation: 3,
            backgroundColor: "#FFF",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Quick Links</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                backgroundColor: "#cce6ff",
                padding: 20,
                width: 110,
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Icon
                color="#66b3ff"
                containerStyle={{
                  padding: 5,
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  position: "absolute",
                  right: 0,
                }}
                name="arrow-up-right"
                size={20}
                type="feather"
              />
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Holiday Calendar
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#cce6ff",
                padding: 20,
                width: 110,
                marginRight: 10,
                borderRadius: 10,
              }}
            >
              <Icon
                color="#66b3ff"
                containerStyle={{
                  padding: 5,
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  position: "absolute",
                  right: 0,
                }}
                name="arrow-up-right"
                size={20}
                type="feather"
              />
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Leave Policy
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#cce6ff",
                padding: 20,
                width: 110,
                borderRadius: 10,
              }}
            >
              <Icon
                color="#66b3ff"
                containerStyle={{
                  padding: 5,
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  position: "absolute",
                  right: 0,
                }}
                name="arrow-up-right"
                size={20}
                type="feather"
              />
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Payroll Manual
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            margin: 20,
            padding: 20,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#fff",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 40,
            elevation: 3,
            backgroundColor: "#FFF",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Celebrations</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              backgroundColor: "#99e699",
              borderRadius: 20,
              padding: 20,

              height: 80,
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <Text style={{ width: 80 }}>Birthday</Text>
            <View
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor: "#99e699",
              }}
            >
              <Image
                style={{ width: 50, height: 55 }}
                source={require("./assets/img/boy.png")}
              />
            </View>
            <Text style={{ width: 60, textAlign: "right", marginRight: 10 }}>
              Shubham
            </Text>
            <Icon
              color="#66b3ff"
              containerStyle={{
                padding: 5,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
              name="right"
              size={20}
              type="antdesign"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              backgroundColor: "#80dfff",
              borderRadius: 20,
              padding: 20,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <Text style={{ width: 80 }}>Marriage Anniversarys</Text>
            <View
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor: "#80dfff",
              }}
            >
              <Image
                style={{ width: 50, height: 55 }}
                source={require("./assets/img/man.webp")}
              />
            </View>
            <Text style={{ width: 60, textAlign: "right", marginRight: 10 }}>
              Yash
            </Text>
            <Icon
              color="#66b3ff"
              containerStyle={{
                padding: 5,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
              name="right"
              size={20}
              type="antdesign"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              backgroundColor: "#cc99ff",
              borderRadius: 20,
              padding: 20,

              height: 80,
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <Text style={{ width: 80 }}>Work Anniversary</Text>
            <View
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor: "#cc99ff",
              }}
            >
              <Image
                style={{ width: 50, height: 55 }}
                source={require("./assets/img/girl.webp")}
              />
            </View>
            <Text style={{ width: 60, textAlign: "right", marginRight: 10 }}>
              Riku
            </Text>
            <Icon
              color="#66b3ff"
              containerStyle={{
                padding: 5,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
              name="right"
              size={20}
              type="antdesign"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              backgroundColor: "#ffcc99",
              borderRadius: 20,
              padding: 20,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <Text style={{ width: 80 }}>Kid's Birthday</Text>
            <View
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor: "#ffcc99",
              }}
            >
              <Image
                style={{ width: 50, height: 55 }}
                source={require("./assets/img/boy.png")}
              />
            </View>
            <Text style={{ width: 60, textAlign: "right", marginRight: 10 }}>
              Priyank
            </Text>
            <Icon
              color="#66b3ff"
              containerStyle={{
                padding: 5,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
              name="right"
              size={20}
              type="antdesign"
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            margin: 20,
            padding: 20,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#fff",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 40,
            elevation: 3,
            backgroundColor: "#FFF",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>My Tasks</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              borderColor: "#b380ff",
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <Text style={{ width: "50%" }}>Attendance</Text>
            <Text style={{ width: "20%", textAlign: "right" }}>17</Text>
            <Text
              style={{
                width: "30%",
                textAlign: "right",
                color: "green",
                textDecorationLine: "underline",
              }}
            >
              View
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              borderColor: "#ccffff",
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <Text style={{ width: "50%" }}>Leave</Text>
            <Text style={{ width: "20%", textAlign: "right" }}>8</Text>
            <Text
              style={{
                width: "30%",
                textAlign: "right",
                color: "green",
                textDecorationLine: "underline",
              }}
            >
              View
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              borderColor: "#ffcccc",
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <Text style={{ width: "50%" }}>Job Offers</Text>
            <Text style={{ width: "20%", textAlign: "right" }}>11</Text>
            <Text
              style={{
                width: "30%",
                textAlign: "right",
                color: "green",
                textDecorationLine: "underline",
              }}
            >
              View
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              borderColor: "#ffffb3",
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <Text style={{ width: "50%" }}>Interview Schedule</Text>
            <Text style={{ width: "20%", textAlign: "right" }}>4</Text>
            <Text
              style={{
                width: "30%",
                textAlign: "right",
                color: "green",
                textDecorationLine: "underline",
              }}
            >
              View
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    paddingTop: 50,
    paddingBottom: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
