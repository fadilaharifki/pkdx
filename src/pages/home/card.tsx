import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import generateColor from '../../utils/generateColor'
import generateColorType from '../../utils/generateColorType'
import { IData, IPoke, ITypes } from '../../utils/interface'
import { CardPoke, List, Type, TitleCard, Img } from './styled'

export default function Card({ data }: IData) {
    const [poke, setPoke] = useState<IPoke>()

    const navigate = useNavigate()
    const color = generateColor(poke ? poke?.types[0]?.type.name : 'gray')

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(data?.url)
            setPoke(res.data)
        };

        getData();
    }, [data])

    const toPageDetail = () => {
        navigate(`/pokemon/${data.name}`, { state: data.name })
    }

    return (
        <CardPoke color={color} onClick={toPageDetail}>
            <Img src={poke?.sprites?.other.home.front_default} alt="name pokemon" />
            <div>
                <TitleCard>{data.name}</TitleCard>
                <List>
                    {
                        poke?.types?.map((e: ITypes, i: number) => {
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