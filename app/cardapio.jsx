import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

const pizzas = [
  { nome: "Calabresa", descricao: "Calabresa, queijo e cebola", preco: "R$ 35,00" },
  { nome: "Frango com Catupiry", descricao: "Frango desfiado e catupiry", preco: "R$ 38,00" },
  { nome: "Muçarela", descricao: "Queijo muçarela e orégano", preco: "R$ 32,00" },
];

export default function Cardapio() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}> Cardápio</Text>
        <Text style={styles.subtitle}>Escolha sua pizza:</Text>

        {pizzas.map((pizza) => (
          <View style={styles.pizza} key={pizza.nome}>
            <Text style={styles.pizzaName}>{pizza.nome}</Text>
            <Text style={styles.description}>{pizza.descricao}</Text>
            <Text style={styles.price}>{pizza.preco}</Text>

            <Button
              className="bg-red-500 mt-3"
              onPress={() => router.push("/carrinho")}
            >
              <ButtonText>Adicionar ao carrinho</ButtonText>
            </Button>
          </View>
        ))}

        <Button
          className="bg-gray-400 w-full mt-3"
          onPress={() => router.back()}
        >
          <ButtonText>Voltar</ButtonText>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 20, paddingBottom: 30 },
  title: { fontSize: 30, fontWeight: "bold", color: "#d32f2f" },
  subtitle: { fontSize: 17, color: "#555", marginBottom: 15 },
  pizza: {
    backgroundColor: "#fff5f5",
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
  },
  pizzaName: { fontSize: 21, fontWeight: "bold" },
  description: { color: "#666", marginTop: 5 },
  price: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: "#d32f2f" },
});
