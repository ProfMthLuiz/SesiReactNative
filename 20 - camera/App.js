import {
  useState,
  useEffect,
  useRef,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Modal,
  Image,
  Camera,
  CameraType,
  FontAwesome,
  MaterialIcons,
  MediaLibrary,
} from "./src/imports/imports";

export default function App() {
  const camRef = useRef(null); // Referência para o componente da câmera
  const [type, setType] = useState(CameraType.back); // Estado para o tipo de câmera (frontal ou traseira)
  const [hasPermission, setHasPermission] = Camera.useCameraPermissions(); // Estado para as permissões da câmera
  const [open, setOpen] = useState(false); // Estado para controlar a abertura do modal
  const [capturedPhoto, setCapturedPhoto] = useState(null); // Estado para armazenar a foto capturada
  const [capturedVideo, setCapturedVideo] = useState(null); // Estado para armazenar o vídeo capturado
  const [isRecording, setIsRecording] = useState(false); // Estado para controlar se a gravação de vídeo está ocorrendo

  useEffect(() => {
    (async () => {
      // Solicitação de permissões da câmera
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      if (cameraStatus !== "granted") {
        alert("Desculpe, precisamos da permissão da câmera para que isso funcione!");
        return;
      }
  
      // Solicitação de permissões da biblioteca de mídia
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Desculpe, precisamos da permissão da biblioteca de mídia para que isso funcione!");
        return;
      }
  
      // Solicitação de permissões do microfone
      const { status: microphoneStatus } = await Camera.requestMicrophonePermissionsAsync();
      if (microphoneStatus !== "granted") {
        alert("Desculpe, precisamos da permissão do microfone para que isso funcione!");
        return;
      }
  
      // Solicitação de permissões de escrita da biblioteca de mídia
      const { status: writeStatus } = await MediaLibrary.requestPermissionsAsync({
        mediaLibraryWriteOnly: true,
      });
      if (writeStatus !== "granted") {
        alert("Desculpe, precisamos da permissão de escrita da biblioteca de mídia para que isso funcione!");
        return;
      }
  
      setHasPermission(true);
      requestPermission(true);
    })();
  }, []);
  

  if (hasPermission === null) {
    return <View />; // Retorna uma visualização vazia enquanto as permissões estão sendo verificadas
  } else if (!hasPermission.granted) {
    // Se as permissões da câmera não foram concedidas
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Precisamos da sua permissão para mostrar a câmera
        </Text>
        <Button
          onPress={() => setHasPermission("granted")}
          title="Conceder permissão"
        />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      console.log(data);
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }

  async function savePicture() {
    if (capturedPhoto) {
      try {
        const asset = await MediaLibrary.createAssetAsync(capturedPhoto);
        if (asset) {
          alert("Imagem salva com sucesso na galeria!");
        }
      } catch (error) {
        console.log("Erro ao salvar a imagem:", error);
        alert("Ocorreu um erro ao salvar a imagem.");
      }
    }
  }

  async function recordVideo() {
    try {
      if (!isRecording) {
        setIsRecording(true);
        // Se não estiver gravando, inicie a gravação
        const { uri } = await camRef.current.recordAsync({ maxDuration: 10 });
        setCapturedVideo(uri);
        setOpen(true);
      } else {
        // Se estiver gravando, pare a gravação
        camRef.current.stopRecording(); // Para a gravação
      }
      setIsRecording(false); // Inverte o estado de isRecording
    } catch (error) {
      console.log("Erro ao gravar vídeo:", error);
      alert("Ocorreu um erro ao gravar o vídeo.");
    }
  }

  async function saveVideo() {
    if (capturedVideo) {
      try {
        const asset = await MediaLibrary.createAssetAsync(capturedVideo, {
          mediaType: "video",
        });
        if (asset) {
          alert("Vídeo salvo com sucesso na galeria!");
        }
      } catch (error) {
        console.log("Erro ao salvar o vídeo:", error);
        alert("Ocorreu um erro ao salvar o vídeo.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="flip-camera-ios" color="gray" size={30} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={recordVideo}>
            <FontAwesome
              name={isRecording ? "pause" : "play-circle"}
              color="gray"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      </Camera>

      {capturedVideo && (
        <Modal animationType="slide" transparent={true} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => setOpen(false)}
            >
              <FontAwesome name="window-close" size={50} color="#FF0000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={saveVideo}>
              <FontAwesome name="upload" color="gray" size={30} />
            </TouchableOpacity>

            <Image
              style={{ width: "100%", height: 300, borderRadius: 20 }}
              source={{ uri: capturedVideo }}
            />
          </View>
        </Modal>
      )}

      {capturedPhoto && (
        <Modal animationType="slide" transparent={true} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => setOpen(false)}
            >
              <FontAwesome name="window-close" size={50} color="#FF0000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={savePicture}>
              <FontAwesome name="upload" color="gray" size={30} />
            </TouchableOpacity>

            <Image
              style={{ width: "100%", height: 300, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
}); 
