# Como utilizar fonte no Expo Go:

:round_pushpin: 1º Passo: <br>
Instalar a biblioteca da Expo Font ao seu projeto

```
npx expo install expo-font
```
<br>

:round_pushpin: 2º Passo: <br>
Dentro da pastas <strong>assets</strong> ```(Que vem os icons padrões do projeto ( adpative-icon, favicon ))```, criar uma pasta chamada de fonts. <br>

```
.expo
assets -> fonts
node_modules
src
```
<br>


:round_pushpin: 3º Passo: <br>
Fazer o download que deseja, no site Google Fonts, o arquivo tem que ser com a extensão <strong>.ttf</strong> <br>
Exemplo: ```Roboto-Black.tft```
<br>
<br>

:round_pushpin: 4º Passo:
Importar o useFonts dentro do seu projeto e criar uma variavel para carregar as fontes que você instalou:
```
import { useFonts } from "expo-font";
```
```
const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Jacquard24-Regular": require("./assets/fonts/Jacquard24-Regular.ttf"),
  });
```
<br>

:round_pushpin: 5º Passo:
Verificar se as fontes foram carregadas e fazer o tratamento disto:
```
const [notLoadedFont, setNotLoadedFont] = useState(false);

  if (!fontsLoaded) {
    setNotLoadedFont(true);
  }
```
<br>

:round_pushpin: 6º Passo:
Utilizar a fonte em seu STYLE
```
<Text style={{ fontFamily: notLoadedFont ? "" : "Roboto-Bold", fontSize: 30 }}>
    Roboto Bold
</Text>
```

