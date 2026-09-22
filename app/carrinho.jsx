import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

export default function Carrinho() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}> Carrinho</Text>

        <View style={styles.item}>
          <Text style={styles.name}>Pizza de Calabresa</Text>
          <Text style={styles.details}>1 unidade</Text>
          <Text style={styles.price}>R$ 35,00</Text>
        </View>

        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.total}>R$ 35,00</Text>
        </View>

        <Button
          className="bg-red-500 w-full"
          onPress={() => router.push("/pedido")}
        >
          <ButtonText>Finalizar Pedido</ButtonText>
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
  container: { flex: 1, padding: 24 },
  title: { fontSize: 30, fontWeight: "bold", color: "#d32f2f", marginBottom: 25 },
  item: {
    backgroundColor: "#fff5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: { fontSize: 20, fontWeight: "bold" },
  details: { color: "#666", marginTop: 5 },
  price: { fontSize: 18, fontWeight: "bold", color: "#d32f2f", marginTop: 8 },
  totalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  totalLabel: { fontSize: 20, fontWeight: "bold" },
  total: { fontSize: 20, fontWeight: "bold", color: "#d32f2f" },
});
