import { Container, Input, Paper, Stack, Typography } from "../../components";

export default function Home() {
  return (
    <Container>
      <Stack direction="column" spacing="2rem">
        <Typography variant="h1" as="h1" aria-label="title" role="heading">
          Today
        </Typography>
        <Paper>
          <Typography variant="h2">5</Typography>
        </Paper>
      </Stack>
      <Input id={""} value={""} icon={<Faplus />} />
    </Container>
  );
}
