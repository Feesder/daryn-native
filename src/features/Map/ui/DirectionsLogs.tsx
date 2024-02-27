import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Mark } from "shared/api/model/Mark";
import DirectionsStore from "shared/store/directionsStore";
import Store from "shared/store/directionsStore";

interface props {
  updateDirections: (directions: Mark[]) => void
}

export const DirectionsLogs = observer(({updateDirections}: props) => {
  const [directions, setDirections] = useState<Mark[]>(Store.directions);

  useEffect(() => {
    const uniqueDays = new Set();
    setDirections(
      directions.filter((value) => {
        if (!uniqueDays.has(value.timeAdded.getDay())) {
          uniqueDays.add(value.timeAdded.getDay());
          return true;
        }
        return false;
      })
    );
    console.log('DirectionsLogs:')
    console.log(directions)
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tableLogs}>
        <Pressable
          style={styles.button}
          onPress={() => {
            axios
              .get<Mark[]>("http://192.168.0.109:8080/api/v1/mark")
              .then((response) => {
                DirectionsStore.directions = response.data;
                updateDirections(response.data);
                console.log(DirectionsStore.directions)
              });
          }}
        >
          <Text style={styles.textButton}>Показать все метки</Text>
        </Pressable>
        {directions &&
          directions.map((value) => (
            <Pressable
              style={{ ...styles.button, ...styles.border }}
              onPress={() => {
                const date = value.timeAdded.toISOString().split("T")[0];
                axios
                  .get<Mark[]>(
                    "http://192.168.0.109:8080/api/v1/mark?time=" + date
                  )
                  .then((response) => {
                    DirectionsStore.directions = response.data;
                    updateDirections(response.data);
                    console.log(DirectionsStore.directions)
                  });
              }}
              key={String(value.id)}
            >
              <Text style={styles.textButton}>{value.timeAdded.toISOString().split("T")[0]}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "30%",
  },
  tableLogs: {
    backgroundColor: "#1c1c1e",
    borderRadius: 5,
    height: 40,
  },
  button: {
    padding: 15,
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: "#28282a",
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
  },
});
