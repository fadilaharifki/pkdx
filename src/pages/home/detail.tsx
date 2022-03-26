import { useEffect, useState } from 'react'
import { UseFetch } from '../../utils/pokemonContext'
import { ContainerDetail, List, Type, TitleDetail, Layout, TextAbout, Desc, TextAbouTitle, TextAbilities, ContainerAbout, LayoutTop, TitleBottom, ContainerAbility, NavBarBottom, ImgAnimate, ContainerImage, ContainerChart, TitleStat, TitleChart, Bar, Bar2, NumberChart, Top } from './styled'
import { useLocation } from 'react-router-dom';
import generateColor from '../../utils/generateColor';
import generateColorType from '../../utils/generateColorType';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { IAbilities, IPoke, IStats, ITypes } from '../../utils/interface';

interface IPokeSpecies {
    flavor_text_entries: Array<IFlavorTextEntries>
}

interface IFlavorTextEntries {
    flavor_text: string,
    language: ILanguage,
    version: IVersion,
}

interface ILanguage {
    name: string,
    ulr: string
}

interface IVersion {
    name: string,
    ulr: string
}

export default function Detail() {
    const navigate = useNavigate()
    const location = useLocation();

    const [data, setData] = useState<IPoke>()
    const color = generateColor(data ? data?.types[0]?.type.name : '#8f8f8f')

    const [about, setAbout] = useState<IPokeSpecies>()

    const [flagAbout, setFlagAbout] = useState(true)
    const [flagStat, setFlagStat] = useState(false)

    useEffect(() => {
        const detail = async () => {
            const res = await UseFetch(`pokemon/${location.state}`)
            const resSpecies = await UseFetch(`pokemon-species/${location.state}`)
            setAbout(resSpecies.data)
            setData(res.data)
        }

        detail()
    }, [])

    const toAbout = () => {
        setFlagAbout(true)
        setFlagStat(false)
    }

    const toStat = () => {
        setFlagAbout(false)
        setFlagStat(true)
    }

    return (
        <ContainerDetail color={color}>
            <LayoutTop>
                <Top>
                    <div>
                        <TitleDetail>{data?.name}</TitleDetail>
                        <List>
                            {
                                data?.types?.map((e: ITypes, i: number) => {
                                    return (
                                        <Type color={generateColorType(e.type.name)} key={i}>{e.type.name}</Type>
                                    )
                                })
                            }
                        </List>
                    </div>
                    <AiOutlineClose onClick={() => navigate(-1)} size={25} style={{ cursor: "pointer" }} />
                </Top>
                <ContainerImage>
                    <ImgAnimate src={data?.sprites?.other?.["official-artwork"].front_default} width={350} alt="animate" />
                </ContainerImage>
            </LayoutTop>
            <Layout>
                <NavBarBottom>
                    <TitleBottom color={flagAbout ? generateColorType(color) : "#8f8f8f"} onClick={toAbout}>About</TitleBottom>
                    <TitleBottom color={flagStat ? generateColorType(color) : "#8f8f8f"} onClick={toStat}>Statistic</TitleBottom>
                </NavBarBottom>
                {
                    flagStat && (
                        <>
                            {
                                data?.stats.map((e: IStats, i: number) => {
                                    return (
                                        <ContainerChart key={i}>
                                            <TitleStat>
                                                <TitleChart>{e.stat.name}</TitleChart>
                                                <NumberChart>{e.base_stat}</NumberChart>
                                            </TitleStat>
                                            <div>
                                                <div>
                                                    <Bar>
                                                        <Bar2 size={e.base_stat} />
                                                    </Bar>
                                                </div>
                                            </div>
                                        </ContainerChart>
                                    )
                                })
                            }
                        </>
                    )
                }
                {
                    flagAbout && (
                        <div>
                            <Desc>{about?.flavor_text_entries[0]?.flavor_text}</Desc>
                            <ContainerAbout>
                                <div>
                                    <TextAbouTitle>Height</TextAbouTitle>
                                    <TextAbouTitle>Weight</TextAbouTitle>
                                    <TextAbouTitle>Ability</TextAbouTitle>
                                </div>
                                <div>
                                    <TextAbout> {data?.height} (m)</TextAbout>
                                    <TextAbout> {data?.weight} (kg)</TextAbout>
                                    <ContainerAbility >
                                        {
                                            data?.abilities.map((e: IAbilities, i: number) => {
                                                return (
                                                    <TextAbilities key={i}>
                                                        {e.ability.name}
                                                    </TextAbilities>
                                                )
                                            })
                                        }
                                    </ContainerAbility>
                                </div>
                            </ContainerAbout>
                        </div>
                    )
                }
            </Layout>
        </ContainerDetail>
    )
}