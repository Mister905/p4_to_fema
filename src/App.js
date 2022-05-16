import React from "react";
import P4_To_FEMA from "./components/P4_To_FEMA";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";

import p4_to_fema_data from "./p4_to_fema.data";


const styles = StyleSheet.create({
  viewer: {
    height: "100vh",
    width: "100vw",
  },
});

const App = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <P4_To_FEMA data={p4_to_fema_data} />
    </PDFViewer>
  );
};

export default App;
