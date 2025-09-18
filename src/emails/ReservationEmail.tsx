import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface ReservationEmailProps {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message?: string;
  consentVersion?: string;
}

const ReservationEmail = ({
  name,
  email,
  phone,
  date,
  time,
  guests,
  message,
  consentVersion,
}: ReservationEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouvelle demande de réservation - Aux Délices du Maroc</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Nouvelle Demande de Réservation</Heading>
        <Text style={paragraph}>Une nouvelle demande de réservation a été soumise via le site web.</Text>
        
        <Section style={detailsSection}>
          <Row style={row}>
            <Column style={label}>Nom :</Column>
            <Column style={value}>{name}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Email :</Column>
            <Column style={value}>{email}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Téléphone :</Column>
            <Column style={value}>{phone}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Date :</Column>
            <Column style={value}>{date}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Heure :</Column>
            <Column style={value}>{time}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Personnes :</Column>
            <Column style={value}>{guests}</Column>
          </Row>
        {message && (
          <Row style={row}>
            <Column style={label}>Message :</Column>
            <Column style={value}>{message}</Column>
          </Row>
        )}
          {consentVersion && (
            <Row style={row}>
              <Column style={label}>Consentement :</Column>
              <Column style={value}>Accepté (version {consentVersion})</Column>
            </Row>
          )}
        </Section>
        <Section style={detailsSection}>
          <Text style={{ fontSize: '14px', color: '#555' }}>
            Vous recevez cet email car un client a rempli le formulaire de réservation sur
            auxdelicesdumaroc.com. Pour toute demande liée aux données personnelles ou pour
            supprimer ces informations, répondez à ce message ou contactez le DPO à
            <a href="mailto:dpo@auxdelicesdumaroc.com"> dpo@auxdelicesdumaroc.com</a>.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ReservationEmail;

const main = {
  backgroundColor: '#fdf5e6',
  fontFamily: 'Montserrat, sans-serif',
  padding: '20px',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  padding: '40px',
  margin: '0 auto',
  maxWidth: '600px',
};

const heading = {
  color: '#A94438',
  fontFamily: '"Playfair Display", serif',
  fontSize: '28px',
  textAlign: 'center' as const,
  marginBottom: '30px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333333',
};

const detailsSection = {
  marginTop: '30px',
};

const row = {
  marginBottom: '10px',
};

const label = {
  fontSize: '16px',
  fontWeight: 'bold' as const,
  color: '#A94438',
  width: '120px',
};

const value = {
  fontSize: '16px',
  color: '#333333',
};
