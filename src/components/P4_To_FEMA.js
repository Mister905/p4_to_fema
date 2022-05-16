import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import Header from "./Header";
import HeaderBody from "./HeaderBody";
import HeaderContact from "./HeaderContact";
import Body from "./Body";
import Signature from "./Signature";
import Footer from "./Footer";

const styles = StyleSheet.create({
  document: {
    backgroundColor: "white",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    fontWeight: "light",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  smallTopBuffer: {
    marginTop: 2,
  },
  mediumTopBuffer: {
    marginTop: 6,
  },
  largeTopBuffer: {
    marginTop: 10,
  },
  veryLargeTopBuffer: {
    marginTop: 12,
  },
  body: {
    paddingVertical: 5,
    paddingHorizontal: 35,
  },
});

const P4_To_FEMA = (props) => {
  const {
    director_contact_first_name,
    director_contact_last_name,
    director_contact_title,
    adjutant_contact_form_of_address,
    adjutant_contact_first_name,
    adjutant_contact_last_name,
    adjutant_contact_title,
    current_date,
    disaster_number,
    fips_number,
    applicant_legal_name,
    fema_contact_form_of_address,
    fema_contact_first_name,
    fema_contact_last_name,
    fema_contact_title,
    fema_contact_location_name,
    fema_contact_location_line_1,
    fema_contact_city,
    fema_contact_state,
    fema_contact_zip_code,
    fema_contact_name_prefix,
    program_manager_first_name,
    program_manager_last_name,
    program_manager_phone_business,
    program_manager_email,
    alternate_gars_first_name,
    alternate_gars_last_name,
    alternate_gars_title,
    alternate_gars_initials,
    pa_liaison_initials,
    applicant_county,
    tema_region,
  } = props.data;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          director_contact_first_name={director_contact_first_name}
          director_contact_last_name={director_contact_last_name}
          director_contact_title={director_contact_title}
          adjutant_contact_form_of_address={adjutant_contact_form_of_address}
          adjutant_contact_first_name={adjutant_contact_first_name}
          adjutant_contact_last_name={adjutant_contact_last_name}
          adjutant_contact_title={adjutant_contact_title}
        />
        <HeaderBody
          current_date={current_date}
          disaster_number={disaster_number}
          fips_number={fips_number}
          applicant_legal_name={applicant_legal_name}
        />

        <HeaderContact
          fema_contact_form_of_address={fema_contact_form_of_address}
          fema_contact_first_name={fema_contact_first_name}
          fema_contact_last_name={fema_contact_last_name}
          fema_contact_title={fema_contact_title}
          fema_contact_location_name={fema_contact_location_name}
          fema_contact_location_line_1={fema_contact_location_line_1}
          fema_contact_city={fema_contact_city}
          fema_contact_state={fema_contact_state}
          fema_contact_zip_code={fema_contact_zip_code}
        />

        <Body
          fema_contact_name_prefix={fema_contact_name_prefix}
          fema_contact_last_name={fema_contact_last_name}
          program_manager_first_name={program_manager_first_name}
          program_manager_last_name={program_manager_last_name}
          program_manager_phone_business={program_manager_phone_business}
          program_manager_email={program_manager_email}
        />

        <Signature
          alternate_gars_first_name={alternate_gars_first_name}
          alternate_gars_last_name={alternate_gars_last_name}
          alternate_gars_title={alternate_gars_title}
          alternate_gars_initials={alternate_gars_initials}
          pa_liaison_initials={pa_liaison_initials}
          applicant_county={applicant_county}
          tema_region={tema_region}
        />

        <Footer />
      </Page>
    </Document>
  );
};

export default P4_To_FEMA;
