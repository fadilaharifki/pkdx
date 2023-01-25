import { Container, Box } from "./style";

interface PostProps {
  loading: boolean;
}

export default function CardSkeleton({ loading }: PostProps) {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      {loading && (
        <Container>
          {count.map((e, i) => {
            return <Box key={i} />;
          })}
        </Container>
      )}
    </>
  );
}
