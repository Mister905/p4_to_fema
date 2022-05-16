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

const Signature = ({
  alternate_gars_first_name,
  alternate_gars_last_name,
  alternate_gars_title,
  alternate_gars_initials,
  pa_liaison_initials,
  applicant_county,
  tema_region
}) => {
  return (
    <View style={styles.body}>
      <View>
        <Text>
          {alternate_gars_first_name} {alternate_gars_last_name}
        </Text>
      </View>
      <View>
        <Text>{alternate_gars_title}</Text>
      </View>
      <View>
        <Text>
          {alternate_gars_initials}:{pa_liaison_initials}
        </Text>
      </View>

      <View>
        <Text>Enclosure (as Stated)</Text>
      </View>

      <View>
        <Text>Enclosure (as Stated)</Text>
      </View>

      <View>
        <Text>
          cc: {applicant_county} County EMA Director {tema_region} Tennesse
          Regional Administrator
        </Text>
      </View>
    </View>
  );
};

export default Signature;
