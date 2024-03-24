import TouchComponent from "./src/components/TouchComponent";
import { View } from "react-native";
import { styles } from "./src/style/Styles";

export default function App() {
  clickBtn1 = () => {
    alert("BTN_1");
  };

  clickBtn2 = () => {
    alert("BTN_2");
  };

  clickBtn3 = () => {
    alert("BTN_3");
  };

  return (
    <View>
      <TouchComponent
        textBtn="Log"
        clickBtn={clickBtn1}
        styleBtn={styles.touchBtn}
        styleCtn={styles.container}
        styleTxt={styles.textBtn}
      />
    </View>
  );
}
