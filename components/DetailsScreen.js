import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

export function DetailsScreen({ navigation }) {
  const [tableData, setTableData] = useState(initialData);

  const initialData = [
    // Table Data
    {
      id: 1,
      VisitorName: "Michael Wanjero",
      EntryTime: 10,
      ExitTime: "9:30pm",
      Department: "IT",
      VisitDate: "2 March",
      VisitID: "C01",
      Phone: "0711111111",
    },
    {
      id: 2,
      VisitorName: "Paul Netia",
      EntryTime: 20,
      ExitTime: "9:30pm",
      Department: "IT",
      VisitDate: "3 March",
      VisitID: "C02",
      Phone: "0722222222",
    },
    {
      id: 3,
      VisitorName: "Cedric Shimuli",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "IT",
      VisitDate: "4 March",
      VisitID: "C03",
      Phone: "0733333333",
    },
    {
      id: 4,
      VisitorName: "Sam Mwangi",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "IT",
      VisitDate: "5 March",
      VisitID: "C04",
      Phone: "0744444444",
    },
    {
      id: 5,
      VisitorName: "Victor Wanjero",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "Team Lead",
      VisitDate: "6 March",
      VisitID: "C05",
      Phone: "0755555555",
    },
    {
      id: 6,
      VisitorName: "Sharon Wanjero",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "Finance",
      VisitDate: "7 March",
      VisitID: "C06",
      Phone: "0766666666",
    },
    {
      id: 7,
      VisitorName: "Lorna Abogi",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "Tech Support",
      VisitDate: "8 March",
      VisitID: "C07",
      Phone: "0777777777",
    },
    {
      id: 8,
      VisitorName: "Benjamin Musili",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "Tech Support",
      VisitDate: "9 March",
      VisitID: "C08",
      Phone: "0788888888",
    },
    {
      id: 9,
      VisitorName: "Brian Ganira",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "Tech Support",
      VisitDate: "10 March",
      VisitID: "C09",
      Phone: "0799999999",
    },
    {
      id: 10,
      VisitorName: "Charles Matata",
      EntryTime: 30,
      ExitTime: "9:30pm",
      Department: "IT",
      VisitDate: "11 March",
      VisitID: "C10",
      Phone: "0111000000",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <Text>{(index + 1).toString()}</Text>
        <Text>{item.VisitorName}</Text>
        <Text>{item.VisitDate}</Text>
        <Text>{item.EntryTime}</Text>
        <Text>{item.ExitTime}</Text>
        <Text>{item.Department}</Text>
        <Text>{item.Phone}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={[styles.headerText, { width: 70 }]}>S.No</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Name</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Visit Date</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Entry Time</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Exit Time</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Department</Text>
            <Text style={[styles.headerText, { width: 120 }]}>Phone</Text>
          </View>
        )}
      />
      <Text>Details Screen!</Text>
      <Button title="Goto Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Goto Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button
        title="Goto Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Goto Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBC4D",
  },
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 15,
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 1,
    elevation: 1,
    borderRadius: 3,
    paddingVertical: 10,
  },
});
