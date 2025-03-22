# **Veterinary Services App!**
![Veterinário Animado](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnM0d216bHZsbTF1ZzZuenF3dms5eHEyOTE2ZHZseW1yYnY3b3hrcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vUc341wCXiY4U/giphy.gif)



Este é um aplicativo desenvolvido para listar serviços de veterinária e permitir que os usuários adicionem esses serviços em um carrinho de compras. O aplicativo foi desenvolvido usando React Native, e oferece uma interface simples e intuitiva para o gerenciamento de serviços e carrinho.

## **Tecnologias Utilizadas**

- **React Native**: Framework para desenvolvimento mobile.
- **React Context API**: Gerenciamento de estado para o carrinho de compras.
- **React Navigation**: Navegação entre telas.
- **Axios**: Para realizar requisições HTTP (se necessário).
- **Styled Components / StyleSheet**: Para estilização da interface.

## **Funcionalidades**

1. **Listagem de Serviços Veterinários**:
   - O app exibe uma lista de serviços de veterinária disponíveis.
   - Cada serviço é mostrado com uma descrição básica e preço.

2. **Carrinho de Compras**:
   - O usuário pode adicionar serviços ao carrinho.
   - É possível aumentar ou diminuir a quantidade de um serviço no carrinho.
   - O total do carrinho é atualizado automaticamente com base nos serviços selecionados.

3. **Remoção de Serviços do Carrinho**:
   - O usuário pode remover serviços do carrinho, e o total é recalculado automaticamente.

4. **Exibição do Total**:
   - O total do carrinho é mostrado na tela de forma clara.

## **Instalação e Execução**

### **Passos para rodar o projeto localmente:**

1. **Clone o repositório:**
````
   git clone https://github.com/paulagmborges/Projeto_faculdade.git
````

2.Navegue até a pasta do projeto:

````
cd Projeto_faculdade
````

3.Instale as dependências:
Se você está usando o npm:

````
npm install
````
Ou, se você usa o yarn:
````
yarn install
````
4.Inicie o aplicativo no seu emulador ou dispositivo:
Com npm:
````
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS
````
Com yarn:

````

yarn react-native run-android  # Para Android
yarn react-native run-ios      # Para iOS
````
5.Requisitos
Node.js (versão recomendada: LTS)<br>

- React Native CLI (caso não tenha, instale com npm install -g react-native-cli)<br>

- Android Studio / Xcode para emulação ou um dispositivo físico <br>

6.Estrutura do Projeto**

```bash
Projeto_faculdade/
│
├── /src/
│   ├── /components/          # Componentes reutilizáveis (ex: itens de lista, botões, carrinho)
│   ├── /context/             # Gerenciamento de estado (ex: CartContext)
│   ├── /screens/             # Telas principais (ex: lista de serviços, carrinho)
│   └── /routes/              # Definição das rotas de navegação
│
├── /assets/                  # Imagens, fontes e outros arquivos estáticos
│
├── /node_modules/            # Dependências do projeto
│
├── App.js                    # Arquivo principal do aplicativo
├── package.json              # Gerenciador de dependências e scripts do projeto
├── README.md                 # Documentação do projeto
└── .gitignore                # Arquivos ignorados pelo Git
