import { useEffect, useState } from 'react'
import { UseFetch } from '../../utils/pokemonContext'
import { ContainerDetail, List, Type, TitleDetail, Layout, LayoutTop, TitleBottom, ContainerAbility, PositionAbility, NavBarBottom, ImgAnimate, ContainerImage, ContainerChart, TitleStat, TitleChart, Bar, Bar2, NumberChart } from './styled'
import { useLocation } from 'react-router-dom';
import generateColor from '../../utils/generateColor';
import generateColorType from '../../utils/generateColorType';

export default function Detail() {
    const location: any = useLocation();
    const [data, setData] = useState<any>()
    const [flagStat, setFlagStat] = useState(true)
    const [flagAbility, setFlagAbility] = useState(false)

    useEffect(() => {
        UseFetch(`pokemon/${location.state}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {

            })
    }, [])

    return (
        <ContainerDetail color={generateColor(data?.types[0]?.type.name)}>
            <LayoutTop>
                <div>
                    <TitleDetail>{data?.name}</TitleDetail>

                    <List>
                        {
                            data?.types?.map((e: any, i: number) => {
                                return (
                                    <Type color={generateColorType(e.type.name)} key={i}>{e.type.name}</Type>
                                )
                            })
                        }
                    </List>
                </div>
                <ContainerImage>
                    <ImgAnimate src={data?.sprites?.other?.["official-artwork"].front_default} width={350} alt="animate" />
                </ContainerImage>
            </LayoutTop>
            <Layout>
                <NavBarBottom>
                    <TitleBottom color={flagStat ? generateColorType(data?.types[0]?.type.name) : "black"} onClick={() => { setFlagStat(true); setFlagAbility(false) }}>Statistic</TitleBottom>
                    <TitleBottom color={flagAbility ? generateColorType(data?.types[0]?.type.name) : "black"} onClick={() => { setFlagStat(false); setFlagAbility(true) }}>Ability</TitleBottom>
                </NavBarBottom>
                {
                    flagStat && (
                        <>
                            {
                                data?.stats.map((e: any, i: number) => {
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
                                data.abilities.map((e: any, i: number) => {
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