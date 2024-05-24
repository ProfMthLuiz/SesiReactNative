import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const API_KEY = "c9c2b5510a27b06b125843b3ad5a638b"; // Substitua com sua chave da API do OpenWeatherMap
const latitude = 35.6895;
const longitude = 139.6917;

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(` Console.log response.data: ${weather}`);
    } catch (err) {
      setError("Local não encontrado ou erro na requisição.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão do Tempo</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Cidade: {weather.name}</Text>
          <Text style={styles.weatherText}>
            Temperatura: {weather.main.temp}°C
          </Text>
          <Text style={styles.weatherText}>
            Descrição: {weather.weather[0].description}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: "100%",
  },
  weatherContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  weatherText: {
    fontSize: 18,
    marginVertical: 4,
  },
  error: {
    color: "red",
    marginTop: 16,
  },
});
