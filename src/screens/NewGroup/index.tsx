import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { AppError } from "@utils/AppError";

export function NewGroup(){
    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    async function handleNew(){
        try {
            if (group.length === 0) {
                return Alert.alert("Nova Turma", "Informe o nome da Turma.");
            }

            await groupCreate(group);
            navigation.navigate("players", { group });
        }
        catch(error) {
            if (error instanceof AppError){
                Alert.alert("Nova Turma", error.message);
            }
            else {
                Alert.alert("Nova Turma", "Não foi possível criar uma nova turma.")
            }
        }
    };

    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight 
                    title="Nova turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />
                <Input 
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />
                <Button 
                    title="Criar"
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}