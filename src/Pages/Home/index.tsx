import Layout from '../../components/Layout'
import BannerImage from "../../assets/image/banner.jpeg"
import Card from '../../components/common/Card'
import https from '../../service/https'
import { useApiContext } from '../../context/ApiContext'
import Loader from '../../components/common/Loader'
import { useState, useEffect } from 'react'

const Index = () => {
    const [pageLoader, setPageLoader] = useState(false)
    const { showList, setShowList }: any = useApiContext()
    const loadData = async (value: string) => {
        try {
            setPageLoader(true)
            const res = await https.get(`${value}`)
            res.data && setShowList(res?.data)
            setPageLoader(false)

        } catch (error) {
            setPageLoader(false)
            console.log(error)
        }
    }
    const categoryBtn = [
        { label: 'Species', value: 'species' },
        { label: 'People', value: 'people' },
        { label: 'Planets', value: 'planets' },
    ]
    useEffect(() => {
        loadData(categoryBtn[0]?.value)
    }, [])

    return (
        <>
            <Layout>
                {pageLoader && <Loader />}
                <section className='banner_section mt-40'>
                    <img src={BannerImage} alt='Banner image' />
                </section>
                <main className='main_category_section container mx-auto mt-40'>
                    <section className='category_select_section'>
                        {categoryBtn.map((item, index) => <button onClick={() => loadData(item.value)}>
                            {item.label}
                        </button>)}
                    </section>
                    <section className='category_card_section mt-40'>
                        {showList?.results?.map((item: any, index: number) => <Card key={index} data={item} id={index + 1} />)}
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Index