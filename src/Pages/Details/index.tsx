import Layout from '../../components/Layout'
import BannerImage from "../../assets/image/banner.jpeg"
import https from '../../service/https'
import Loader from '../../components/common/Loader'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Index = () => {
    const params = useParams()
    const [pageLoader, setPageLoader] = useState(false)
    const [detailData, setDetailData]: any = useState({})
    const loadDetail = async () => {
        try {
            setPageLoader(true)
            const response: any = await https.get(`${params.slug}/${params.id}`)
            setDetailData(response?.data)
            setPageLoader(false)
        } catch (error) {
            setPageLoader(false)
            console.log(error)
        }
    }
    useEffect(() => { loadDetail() }, [params])

    return (
        <>
            <Layout>
                {pageLoader && <Loader />}
                <section className='banner_section mt-40 container mx-auto'>
                    <img src={BannerImage} alt='Banner image' />
                </section>
                <section className='details_text_section container mx-auto mt-40'>
                    <h2>{detailData?.name}</h2>
                    <p className='mt-20'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat earum ullam, ipsum in doloremque quasi repudiandae fugit odio corporis laudantium unde nemo. Culpa consequatur, doloremque non incidunt quasi inventore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat earum ullam, ipsum in doloremque quasi repudiandae fugit odio corporis laudantium unde nemo. Culpa consequatur, doloremque non incidunt quasi inventore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat earum ullam, ipsum in doloremque quasi repudiandae fugit odio corporis laudantium unde nemo. Culpa consequatur, doloremque non incidunt quasi inventore.
                    </p>

                </section>
            </Layout>
        </>
    )
}

export default Index