import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

export default function Inicio() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.emoji}>🍕</Text>
        <Text style={styles.title}>Pizzaria do Vini</Text>
        <Text style={styles.subtitle}>
          Pizza quentinha e gostosa direto para sua casa!
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Bem-vindo!</Text>
          <Text style={styles.cardText}>
            Escolha sua pizza no nosso cardápio e faça seu pedido.
          </Text>
        </View>

        <Button
          className="bg-red-500 w-full"
          onPress={() => router.push("/cardapio")}
        >
          <ButtonText>Ver Cardápio</ButtonText>
        </Button>

        <Button
          className="bg-zinc-700 w-full mt-3"
          onPress={() => router.push("/carrinho")}
        >
          <ButtonText>Ver Carrinho</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: { fontSize: 64, marginBottom: 10 },
  title: { fontSize: 30, fontWeight: "bold", color: "#d32f2f" },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginTop: 8,
    marginBottom: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  cardTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  cardText: { fontSize: 15, color: "#555", lineHeight: 22 },
});
