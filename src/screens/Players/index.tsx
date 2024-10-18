import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";

export function Players(){
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Cauã', 'Tralha do Flamengo']);

    return(
        <Container>
            <Header showBackButton/>
            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input 
                    placeholder="Nome do participante"
                    autoCorrect={false}
                />
                <ButtonIcon icon="add"/>
            </Form>
            <HeaderList>
                <FlatList 
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>
            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard 
                        name={item}
                        onRemove={() => { }}
                    />
                )}
            />
        </Container>
    );
}