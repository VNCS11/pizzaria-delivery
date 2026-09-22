import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

export default function Pedido() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.emoji}>✅</Text>
        <Text style={styles.title}>Pedido realizado!</Text>
        <Text style={styles.text}>
          Seu pedido foi recebido pela pizzaria.
        </Text>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Resumo</Text>
          <Text>Pizza de Calabresa</Text>
          <Text>Entrega: em breve</Text>
          <Text>Pagamento: na entrega</Text>
          <Text style={styles.total}>Total: R$ 35,00</Text>
        </View>

        <Button
          className="bg-red-500 w-full"
          onPress={() => router.replace("/")}
        >
          <ButtonText>Voltar para o início</ButtonText>
        </Button>

        <Button
          className="bg-gray-400 w-full mt-3"
          onPress={() => router.back()}
        >
          <ButtonText>Voltar</ButtonText>
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
  emoji: { fontSize: 60, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: "bold", color: "#2e7d32", textAlign: "center" },
  text: { fontSize: 16, color: "#555", textAlign: "center", marginTop: 8, marginBottom: 22 },
  box: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    gap: 8,
  },
  boxTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 4 },
  total: { fontWeight: "bold", marginTop: 5 },
});
