export interface Pizza {
    nome: string;
    categoria: string;
    ingredientes: string;
    imagem: string;
    preco: string;
    estado: string;
    cidade: string;
    isNew?: boolean;
    isPopular?: boolean;
}

export const pizzas: Pizza[] = [

    {
        nome: "CALABRESA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e calabresa fatiada",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "MUSSARELA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, provolone, parmesão e catupiry",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "CHOCOLATE",
        categoria: "PIZZAS DOCES",
        ingredientes: "Um toque de mussarela, chocolate meio amargo e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "ALHO E ÓLEO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e alho frito",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "CALABRESA COM CEBOLA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, calabresa fatiada e cebola",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "SC",
        cidade: "Blumenau",
        isNew: true
    },
    {
        nome: "FRANGO COM CATUPIRY",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, frango temperado e catupiry",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "SC",
        cidade: "Blumenau",
        isNew: true
    },
    {
        nome: "PORTUGUESA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, presunto, cebola, ovo e azeitona verde",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "CAPRESE TRADICIONAL",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, mussarela de búfala bola, tomate fatiado, pesto de azeitonas pretas e manjericão fresco",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "ATUM",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, atum, cebola fatiada e azeitona preta",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "MARGUERITA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, tomate fatiado e manjericão fresco",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "CHOCOLATE COM MORANGO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Um toque de mussarela, chocolate meio amargo, morango e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "MILHO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e milho verde",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"

    },

    {
        nome: "SNICKERS",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate, caramelo e amendoim",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"

    },
    {
        nome: "BRÓCOLIS COM CATUPIRY",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, brócolis e catupiry",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "PEPPERONI",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e pepperoni",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 69,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "VEGETARIANA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, tomate, pimentão, cebola, azeitona e milho",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "BACON",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e bacon",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "FRANGO COM CHEDDAR",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, frango temperado e cheddar",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "NAPOLITANA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, tomate, parmesão e manjericão",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "CAMARÃO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, camarão e catupiry",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 89,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "RÚCULA COM TOMATE SECO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, rúcula e tomate seco",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 69,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "CARNE SECA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, carne seca e cebola",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "PALMITO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e palmito",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "BANANA COM CANELA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Banana, canela e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "ROMEU E JULIETA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Goiabada e queijo mussarela",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "PRESTÍGIO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate, coco ralado e leite condensado",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "SENSACIONAL",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate, morango, banana e leite condensado",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "DOIS AMORES",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate branco, chocolate preto e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "ABACAXI COM CANELA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Abacaxi, canela e leite condensado",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "BRIGADEIRO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate e granulado",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "BEIJINHO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Coco ralado e leite condensado",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "MORANGO COM NUTELLA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Nutella e morango",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 69,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "DOCE DE LEITE",
        categoria: "PIZZAS DOCES",
        ingredientes: "Doce de leite e coco ralado",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "PAÇOCA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Paçoca e leite condensado",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "OVOMALTINE",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate e Ovomaltine",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "KIT KAT",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate e Kit Kat",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "CALABRESA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e calabresa fatiada",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "MUSSARELA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, provolone, parmesão e catupiry",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "CHOCOLATE",
        categoria: "PIZZAS DOCES",
        ingredientes: "Um toque de mussarela, chocolate meio amargo e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "ALHO E ÓLEO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e alho frito",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "SC",
        cidade: "Blumenau",
        isPopular: true
    },
    {
        nome: "CALABRESA COM CEBOLA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, calabresa fatiada e cebola",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "SC",
        cidade: "Blumenau",
        isNew: true
    },
    {
        nome: "FRANGO COM CATUPIRY",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, frango temperado e catupiry",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "SC",
        cidade: "Blumenau",
        isNew: true
    },
    {
        nome: "PORTUGUESA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, presunto, cebola, ovo e azeitona verde",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "CAPRESE TRADICIONAL",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, mussarela de búfala bola, tomate fatiado, pesto de azeitonas pretas e manjericão fresco",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "ATUM",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, atum, cebola fatiada e azeitona preta",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "MARGUERITA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, tomate fatiado e manjericão fresco",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "CHOCOLATE COM MORANGO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Um toque de mussarela, chocolate meio amargo, morango e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "MILHO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e milho verde",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"

    },

    {
        nome: "SNICKERS",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate, caramelo e amendoim",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"

    },
    {
        nome: "BRÓCOLIS COM CATUPIRY",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, brócolis e catupiry",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "PEPPERONI",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e pepperoni",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 69,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "VEGETARIANA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, tomate, pimentão, cebola, azeitona e milho",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "BACON",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e bacon",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "FRANGO COM CHEDDAR",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, frango temperado e cheddar",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "NAPOLITANA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, tomate, parmesão e manjericão",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "CAMARÃO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, camarão e catupiry",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 89,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "RÚCULA COM TOMATE SECO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, rúcula e tomate seco",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 69,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "CARNE SECA",
        categoria: "PIZZAS",
        ingredientes: "Mussarela, carne seca e cebola",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "PALMITO",
        categoria: "PIZZAS",
        ingredientes: "Mussarela e palmito",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "BANANA COM CANELA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Banana, canela e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "ROMEU E JULIETA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Goiabada e queijo mussarela",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "PRESTÍGIO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate, coco ralado e leite condensado",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "SENSACIONAL",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate, morango, banana e leite condensado",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "DOIS AMORES",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate branco, chocolate preto e leite condensado",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "PR",
        cidade: "Curitiba"
    },
    {
        nome: "ABACAXI COM CANELA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Abacaxi, canela e leite condensado",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "BRIGADEIRO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate e granulado",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "BEIJINHO",
        categoria: "PIZZAS DOCES",
        ingredientes: "Coco ralado e leite condensado",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 49,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "MORANGO COM NUTELLA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Nutella e morango",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 69,90",
        estado: "RS",
        cidade: "Santa Cruz do Sul"
    },
    {
        nome: "DOCE DE LEITE",
        categoria: "PIZZAS DOCES",
        ingredientes: "Doce de leite e coco ralado",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "PAÇOCA",
        categoria: "PIZZAS DOCES",
        ingredientes: "Paçoca e leite condensado",
        imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 54,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "OVOMALTINE",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate e Ovomaltine",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 59,90",
        estado: "SC",
        cidade: "Blumenau",
    },
    {
        nome: "KIT KAT",
        categoria: "PIZZAS DOCES",
        ingredientes: "Chocolate e Kit Kat",
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        preco: "R$ 64,90",
        estado: "SC",
        cidade: "Blumenau",
    },
];