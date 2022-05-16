import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingVertical: 5,
    paddingHorizontal: 35,
  },

  mb10: {
    marginBottom: "10px",
  },
});
const HeaderContact = ({
  fema_contact_form_of_address,
  fema_contact_first_name,
  fema_contact_last_name,
  fema_contact_title,
  fema_contact_location_name,
  fema_contact_location_line_1,
  fema_contact_city,
  fema_contact_state,
  fema_contact_zip_code,
}) => {
  return (
    <View style={styles.body}>
      <View>
        <Text>
          {fema_contact_form_of_address} {fema_contact_first_name}{" "}
          {fema_contact_last_name}
        </Text>
      </View>
      <View>
        <Text>{fema_contact_title}</Text>
      </View>
      <View>
        <Text>{fema_contact_location_name}</Text>
      </View>
      <View>
        <Text>{fema_contact_location_line_1}</Text>
      </View>
      <View>
        <Text>
          {fema_contact_city}, {fema_contact_state}, {fema_contact_zip_code}
        </Text>
      </View>
    </View>
  );
};

export default HeaderContact;
