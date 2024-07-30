import { useHttp } from '../hooks/http.hook'

export const MainServices = () => {
    const [request] = useHttp();

    const getSlides = async() => {
        const res = await request('./assets/data/slides.json');
        return res.slides.map(_transformSlides)
    }
    
    const getAllFaq = async() => {
        const res = await request('./assets/data/faq.json');
        return res.faqs.map(_transformFaq)
    }

    const _transformSlides = (slide) => {
        return {
            "_id": slide._id,
            "src": slide.src,
            "title": slide.title,
            "description": slide.description,
            "textColor": slide.textColor,
            "btns": slide.btns
        }
    }
    
    const _transformFaq = (faq) => {
        return {
            "_id": faq.id,
            "title": faq.title,
            "desc": faq.desc
        }
    }

    return {getSlides, getAllFaq}
}