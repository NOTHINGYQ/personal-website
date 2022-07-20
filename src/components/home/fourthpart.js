import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit, FcPodiumWithSpeaker,FcIdea,FcBullish } from 'react-icons/fc';



const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function Fourthpart() {
    return (
        <Box p={4} maxW={'1100px'} margin={'auto'}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcBullish} w={10} h={10} />}
                    title={'Eagerness to Learn'}
                    text={
                        'Over the past years, with great enthusiasm, I grew up to be a skillful and experienced programmer through committing countless hours to learn extra-curricular technologies as well as applying them in practice, even sometimes on the spot.'
                    }
                />
                <Feature
                    icon={<Icon as={FcPodiumWithSpeaker} w={10} h={10} />}
                    title={'Leadership'}
                    text={
                        'Led team members to participate in an autonomous race car competition and won national third prize'
                    }
                />
                <Feature
                    icon={<Icon as={FcIdea} w={10} h={10} />}
                    title={'Creativity'}
                    text={
                        'Creativity is another key that fosters me to excel as a programmer. With a solid understanding of skills learned, whenever needed, I always come up with solutions that exit.'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}