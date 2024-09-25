import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderContainer, SliderContent } from './Reviews.styled';
const Rewiews = () => {
  const testimonials = [
    { id: 1, text: 'Отзыв 1' },
    { id: 2, text: 'Отзыв 2' },
    { id: 3, text: 'Отзыв 3' },
    { id: 4, text: 'Отзыв 4' },
    { id: 5, text: 'Отзыв 5' },
    { id: 6, text: 'Отзыв 6' },
    { id: 7, text: 'Отзыв 7' },
    { id: 8, text: 'Отзыв 8' },
    // Добавьте нужное количество отзывов
  ];

  const prevArrowStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    zIndex: '999',
    cursor: 'pointer',
  };

  const nextArrowStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    zIndex: '999',
    cursor: 'pointer',
  };
  const CustomPrevArrow = props => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...prevArrowStyle }}
        onClick={onClick}
      >
        <p>Prev</p>
      </div>
    );
  };

  const CustomNextArrow = props => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...nextArrowStyle }}
        onClick={onClick}
      >
        <p>Next</p>
      </div>
    );
  };
  const settings = {
    className: 'center',
    dots: true, // Отключаем пагинацию
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true, // Включаем режим центрирования
    centerPadding: '25%',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <>
      <SliderContainer>
        <SliderContent>
          <Slider
            {...settings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
          >
            {testimonials.map(testimonial => (
              <div key={testimonial.id}>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </SliderContent>
      </SliderContainer>
    </>
  );
};
export default Rewiews;
