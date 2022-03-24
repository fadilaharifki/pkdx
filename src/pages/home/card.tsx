import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import generateColor from '../../utils/generateColor'
import generateColorType from '../../utils/generateColorType'
import { CardPoke, List, Type, TitleCard, Img } from './styled'

export default function Card({ data }: any) {
    const [poke, setPoke] = useState<any>()
    const navigate = useNavigate()
    const color = generateColor(poke ? poke?.types[0]?.type.name : 'gray')

    useEffect(() => {
        axios.get(data.url)
            .then((res) => {
                setPoke(res.data)
            })
    }, [])

    const toPageDetail = () => {
        navigate(`/pokemon/${data.name}`, { state: data.name })
    }

    return (
        <CardPoke color={color} onClick={toPageDetail}>
            <Img src={poke?.sprites?.front_default} alt="name pokemon" />
            <div>
                <TitleCard>{data.name}</TitleCard>
                <List>
                    {
                        poke?.types?.map((e: any, i: number) => {
                            return (
                                <Type color={generateColorType(e.type.name)} key={i}>{e.type.name}</Type>
                            )
                        })
                    }
                </List>
            </div>
        </CardPoke>
    )
}