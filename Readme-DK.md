# Smuknu (Dansk)

## Beskrivelse

Smuknu er et webapplikations-projekt, der sigter mod at håndtere indkøbskurve og lette ordreplaceringer. Det er bygget ved hjælp af React, TypeScript og forskellige andre teknologier for at sikre en problemfri brugeroplevelse.

## Teknologier

- React
- TypeScript
- Axios
- generate-react-cli
- Formik (med Yup til validering)
- react-icons
- react-number-format
- react-router-Development
- sass

## Yderligere Funktioner

- Git/GitHub versionskontrolstyring
- GitHub Actions opsat til kontinuerlig integration

## Implementeringsdetaljer

- **Komponentgenerering**: `generate-react-cli`-biblioteket blev brugt til hurtig komponentgenerering.
- **Formhåndtering**: Formularer blev oprettet ved hjælp af `Formik`-biblioteket parret med `Yup` til validering.
- **Ikonintegration**: Alle ikoner blev hentet fra `react-icons`-biblioteket.
- **API-interaktion**: `Axios` blev brugt til effektiv kommunikation med API'er.
- **Kodeoptimering**: Der blev udviklet brugerdefinerede hooks til at hente data fra API'er, sammen med separate mappestrukturer til formvalidering, interfaces og hjælpefunktioner.

## Funktionalitet

- Brugere kan tilføje, slette og justere antallet af varer i indkøbskurven.
- En ordreformular indsamler brugerdata og sender det til det specificerede API.

## Kom godt i gang

1. Klone repositoryet.
2. Installer afhængigheder ved hjælp af `npm install`.
3. Start udviklingsserveren ved hjælp af `npm dev`.