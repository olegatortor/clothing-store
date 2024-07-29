import { useHttp } from '../hooks/http.hook'

export const MainServices = () => {
    const [request] = useHttp();

    const getSlides = async() => {
        const res = await request('./assets/data/slides.json');
        return res.slides.map(_transformSlides)
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

    return {getSlides}
}