import { Container, Box, Text } from './styled'
import { AiOutlineWarning } from 'react-icons/ai';
export default function ModeOffline() {
    return (
        <Container>
            <Box>
                <AiOutlineWarning color='white' size={20} />
                <Text>You are in offline mode</Text>
            </Box>
        </Container>
    )
}