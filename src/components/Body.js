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
const Body = ({
  fema_contact_name_prefix,
  fema_contact_last_name,
  program_manager_first_name,
  program_manager_last_name,
  program_manager_phone_business,
  program_manager_email,
}) => {
  return (
    <View style={styles.body}>
      <View>
        <Text>
          Dear {fema_contact_name_prefix} {fema_contact_last_name}:
        </Text>
      </View>

      <View>
        <Text style={styles.mb10}>
          It is requested that the referenced applicant be closed. The projects
          have been completed and as specified in the FEMA-STATE Agreement, the
          State of Tennessee will absorb the nonfederal share.
        </Text>
      </View>

      <View>
        <Text style={styles.mb10}>
          The enclosed Project Completion and Certification Report indicates the
          final amounts claimed for this applicant.
        </Text>
      </View>

      <View>
        <Text>
          Once we receive the completed P.4, TEMA will forward the closeout to
          the Federal Emergency Management Agency (FEMA). FEMA's review on
          Applicant Closure is usually within a few weeks. We will provide you
          with their closeout package when received.
        </Text>
      </View>

      <View>
        <Text style={styles.mb10}>
          If you have any questions, please contact {program_manager_first_name}{" "}
          {program_manager_last_name}
          at {program_manager_phone_business} or {program_manager_email}
        </Text>
      </View>

      <View style={styles.mb10}>
        <Text>Sincerely,</Text>
      </View>
    </View>
  );
};

export default Body;
