import { useEffect, useState } from 'react'
import { UseFetch } from '../../utils/pokemonContext'
import { ContainerDetail, List, Type, TitleDetail, Layout, LayoutTop, TitleBottom, ContainerAbility, PositionAbility, NavBarBottom, ImgAnimate, ContainerImage, ContainerChart, TitleStat, TitleChart, Bar, Bar2, NumberChart, Top } from './styled'
import { useLocation } from 'react-router-dom';
import generateColor from '../../utils/generateColor';
import generateColorType from '../../utils/generateColorType';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { IAbilities, IPoke, IStats, ITypes } from '../../utils/interface';

interface ILocation {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: any,
}

export default function Detail() {
    const navigate = useNavigate()
    const location: ILocation = useLocation();
    const [data, setData] = useState<any>()

    const [flagStat, setFlagStat] = useState(true)
    const [flagAbility, setFlagAbility] = useState(false)

    useEffect(() => {
        const detail = async () => {
            const res = await UseFetch(`pokemon/${location.state}`)
            setData(res.data)
        }

        detail()
    }, [])

    return (
        <ContainerDetail color={generateColor(data?.types[0]?.type.name)}>
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
                    <TitleBottom color={flagStat ? generateColorType(data?.types[0]?.type.name) : "#8f8f8f"} onClick={() => { setFlagStat(true); setFlagAbility(false) }}>Statistic</TitleBottom>
                    <TitleBottom color={flagAbility ? generateColorType(data?.types[0]?.type.name) : "#8f8f8f"} onClick={() => { setFlagStat(false); setFlagAbility(true) }}>Ability</TitleBottom>
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
                    flagAbility && (
                        <ContainerAbility >
                            {
                                data.abilities.map((e: IAbilities, i: number) => {
                                    return (
                                        <PositionAbility key={i}>
                                            {e.ability.name}
                                        </PositionAbility>
                                    )
                                })
                            }
                        </ContainerAbility>
                    )
                }
            </Layout>
        </ContainerDetail>
    )
}