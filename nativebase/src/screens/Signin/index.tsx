import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {
    Box,
    Center,
    Heading,
    Input,
    FormControl,
    VStack,
    Icon,
    Button,
    Checkbox,
    HStack,
    Text,
    WarningOutlineIcon,
    Image
} from "native-base";

export function SignIn() {
    return (
        <Center
            height="full"
        >
            <Image 
                size={150}
                alt="Foto do usuario"
                source={{ uri:"https://github.com/LuisFernandodoparana.png"}}
            />
            <VStack
                width="full"
                p={5}
            >
                <Box width="full">
                    <Heading color="coolGray.700">
                        Entrar
                    </Heading>
                    <FormControl isInvalid>
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input
                            placeholder="seu@email.com.br"
                            mt={3}
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons
                                        name="person"
                                        size={5}
                                        ml={2}
                                        color="muted.400"
                                    />}
                                />
                            }
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            Você precisa digitar o e-mail cadastrado
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            placeholder="sua senha"
                            mt={3}
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons
                                        name="lock"
                                        size={5}
                                        ml={2}
                                        color="muted.400"
                                    />}
                                />
                            }
                        />
                    </FormControl>
                    <Button
                        mt="7"
                        colorScheme="purple"
                    >Entrar
                    </Button>
                </Box>
                <HStack
                    mt={5}
                >
                    <Checkbox
                        value="agree"
                    >
                        <Text>
                            Concondo com a politica de segurança
                        </Text>
                    </Checkbox>
                </HStack>
            </VStack>
        </Center>
    )
}